const Attendance = require('../models/attendance.js');
const AttendanceRequest = require('../models/attendanceRequest.js');
const User = require('../models/user.js');
const io = require('../config/socket.js');
//const Holiday = require('../models/holiday.js');
const mongoose = require('mongoose');

const convertToIST = (utcDate = new Date()) => {
  const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  return new Date(utcDate.getTime() + istOffset);
};



// Get calendar data for a specific date range
exports.getCalendar = async (req, res) => {
  try {
    const { startDate, endDate, email } = req.query;

    // Validate query parameters
    if (!startDate || !endDate) {
      return res.status(400).json({ message: 'Start date and end date are required.' });
    }

    // Extract year and month from startDate for fetching holidays
    const startDateObj = new Date(startDate);
    const year = startDateObj.getFullYear();
    const month = (startDateObj.getMonth() + 1).toString().padStart(2, '0'); // Get month in two-digit format

    // Fetch holidays in the range using the newly created method
    const holidaysResponse = await HolidayController.getHolidaysByMonth({ query: { year, month } }, res);

    const holidays = holidaysResponse.data; // This contains the holidays for the specified month

    // Fetch attendance records in the range for the user
    const attendanceRecords = await Attendance.find({
      email: email,
      clockin: { $gte: startDate, $lte: endDate },
    }).sort({ clockin: 1 });

    // Create a map of attendance by date
    const attendanceMap = attendanceRecords.reduce((acc, record) => {
      const dateKey = new Date(record.clockin).toISOString().split('T')[0];
      acc[dateKey] = {
        status: record.status,
        clockin: record.clockin,
        clockout: record.clockout,
        workType: record.workType,
      };
      return acc;
    }, {});

    // Create a map of holidays by date
    const holidayMap = holidays.reduce((acc, holiday) => {
      const dateKey = new Date(holiday.date).toISOString().split('T')[0];
      acc[dateKey] = {
        type: holiday.type,
        name: holiday.name,
        description: holiday.description,
      };
      return acc;
    }, {});

    // Generate calendar data for the range
    const calendarData = [];
    for (let d = new Date(startDate); d <= new Date(endDate); d.setDate(d.getDate() + 1)) {
      const dateKey = d.toISOString().split('T')[0];
      const isWeekend = [0, 6].includes(d.getDay()); // Sunday (0), Saturday (6)

      const holiday = holidayMap[dateKey];
      const attendance = attendanceMap[dateKey];

      calendarData.push({
        date: dateKey,
        isWeekend,
        holiday: holiday ? { name: holiday.name, type: holiday.type, description: holiday.description } : null,
        attendance: attendance ? { status: attendance.status, clockin: attendance.clockin, clockout: attendance.clockout, workType: attendance.workType } : null,
        dayType: holiday
          ? holiday.type
          : isWeekend
          ? 'Weekend'
          : attendance
          ? attendance.status
          : 'Working Day', // Prioritize holiday > weekend > attendance > working day
      });
    }

    res.status(200).json({ success: true, data: calendarData });
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    res.status(500).json({ message: 'Error occurred while fetching calendar data', error });
  }
};



exports.getTodayAttendance = async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ message: 'email is required.' });
    }

    const user = await User.findOne({ email }); // Fetch user
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    
    const todayStart = new Date(new Date().setHours(0, 0, 0, 0));

    const attendance = await Attendance.findOne({
      email: email,
      clockin: { $gte: todayStart },
    });

    if (!attendance) {
      return res.status(404).json({ message: 'No attendance record found for today.' });
    }

    const response = {
      message: 'Attendance retrieved successfully.',
      email:attendance.email,
      clockin: attendance.clockin,
      clockout: attendance.clockout || null,
      totalTrackedTime: attendance.totalTrackedTime || null,
      status: attendance.status,
      workType: attendance.workType,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving attendance', error: error.message });
  }
};

exports.clockIn = async (req, res) => {
  try {
    const email = req.body.email;
    const workType = req.body.workType;

    if (!email) {
      return res.status(400).json({ message: 'email is required.' });
    }

    const user = await User.findOne({ email }); // Fetch user
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (!workType || !['Work From Office', 'Work From Home'].includes(workType)) {
      return res.status(400).json({
        message: 'Invalid work type. Must be "Work From Office" or "Work From Home".',
      });
    }

    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const todayStart = new Date(new Date().setHours(0, 0, 0, 0));

    const existingAttendance = await Attendance.findOne({
      email: email,
      clockin: { $gte: todayStart },
    });

    if (existingAttendance) {
      return res.status(400).json({ message: 'You have already clocked in for today.' });
    }

    const clockInTimeIST = convertToIST();

    const attendance = new Attendance({
      email: email,
      user: user._id,
      name: user.name,
      clockin: clockInTimeIST,
      clockinIpAddress: ipAddress,
      status: 'Missing Attendance',
      workType: workType,
    });

    await attendance.save();

    // Calculate elapsedTime (in milliseconds)
    const elapsedTime = Date.now() - new Date(clockInTimeIST).getTime();

    //Emit clock-in data with elapsed time
    io.emit('updateClockin', {
      email,
      clockInTime: clockInTimeIST,
      elapsedTime, // Broadcast elapsed time to the frontend
    });

    res.status(200).json({
      message: 'Clock-in successful',
      attendance,
      elapsedTime, // Include elapsed time in the response
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error during clock-in',
      error: error.message || error,
    });
  }
};

/*exports.clockIn = async (req, res) => {
  
  try {
    const email = req.body.email;
    const workType = req.body.workType;

    if (!email) {
      return res.status(400).json({ message: 'email is required.' });
    }

    
    const user = await User.findOne({ email }); // Fetch user
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (!workType || !['Work From Office', 'Work From Home'].includes(workType)) {
      return res.status(400).json({
        message: 'Invalid work type. Must be "Work From Office" or "Work From Home".',
      });
    }

    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const todayStart = new Date(new Date().setHours(0, 0, 0, 0));

    const existingAttendance = await Attendance.findOne({
      email:email,
      clockin: { $gte: todayStart },
    });

    if (existingAttendance) {
      return res.status(400).json({ message: 'You have already clocked in for today.' });
    }

    const clockInTimeIST = convertToIST();

    const attendance = new Attendance({
      
      email:email,
      user:user._id,
      name:user.name,
      clockin: clockInTimeIST,
      clockinIpAddress: ipAddress,
      status: 'Missing Attendance',
      workType: workType,
    });

    await attendance.save();

    //emit clcokin to all clients
    io.emit('updateClockin', {email,clockInTime : clockInTimeIST});
    

    res.status(200).json({ message: 'Clock-in successful', attendance });
  } catch (error) {
    res.status(500).json({ message: 'Error during clock-in', error: error.message || error });
  }
};*/
// exports.clockOut = async (req, res) => {
//   try {
//     const email = req.body.email;

//     if (!email) {
//       return res.status(400).json({ message: 'email is required.' });
//     }

//     const todayStart = new Date(new Date().setHours(0, 0, 0, 0));

//     const attendance = await Attendance.findOne({
//       email:email,
//       clockin: { $gte: todayStart },
//       $or: [
//         { clockout: { $exists: false } },
//         { clockout: null },
//       ],
//     });

//     if (!attendance) {
//       return res.status(400).json({ message: 'Clock-in not found, please clock-in first' });
//     }

//     const clockOutTimeIST = convertToIST();
//     attendance.clockout = clockOutTimeIST;
//     attendance.clockoutIpAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//     const clockInTime = new Date(attendance.clockin);
//     const totalTrackedMs = new Date(clockOutTimeIST) - clockInTime;

//     const totalSeconds = Math.floor(totalTrackedMs / 1000);
//     const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
//     const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
//     const seconds = (totalSeconds % 60).toString().padStart(2, '0');

//     attendance.totalTrackedTime = ${hours}:${minutes}:${seconds};
//     // attendance.status = 'Present';
//     const minimumShiftHours = 8; // Minimum shift hours
//     if (totalTrackedMs < minimumShiftHours * 60 * 60 * 1000) {
//       attendance.status = 'Early Out';
//     } else {
//       attendance.status = 'Present';
//     }

//     await attendance.save();
    
//     res.status(200).json({ message: 'Clock-out successful', attendance });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during clock-out', error: error.message });
//   }
// };
exports.clockOut = async (req, res) => {
  try {
    const email = req.body.email;

    if (!email) {
      return res.status(400).json({ message: 'email is required.' });
    }

    const todayStart = new Date(new Date().setHours(0, 0, 0, 0));

    const attendance = await Attendance.findOne({
      email: email,
      clockin: { $gte: todayStart },
      $or: [
        { clockout: { $exists: false } },
        { clockout: null },
      ],
    });

    if (!attendance) {
      return res.status(400).json({ message: 'Clock-in not found, please clock-in first' });
    }

    const clockOutTimeIST = convertToIST();
    attendance.clockout = clockOutTimeIST;
    attendance.clockoutIpAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const clockInTime = new Date(attendance.clockin);
    const totalTrackedMs = new Date(clockOutTimeIST) - clockInTime;

    // Calculate total tracked time in HH:mm:ss format
    const totalSeconds = Math.floor(totalTrackedMs / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const totalTrackedTime = `${hours}:${minutes}:${seconds}`;
    attendance.totalTrackedTime = totalTrackedTime;

    // Update attendance status
    const minimumShiftHours = 8; // Minimum shift hours
    if (totalTrackedMs < minimumShiftHours * 60 * 60 * 1000) {
      attendance.status = 'Early Out';
    } else {
      attendance.status = 'Present';
    }

    await attendance.save();

    // Broadcast clock-out data
    io.emit('updateClockout', {
      email,
      clockInTime: attendance.clockin,
      clockOutTime: clockOutTimeIST,
      totalTrackedTime,
      status: attendance.status,
    });

    res.status(200).json({
      message: 'Clock-out successful',
      attendance,
      totalTrackedTime,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error during clock-out',
      error: error.message,
    });
  }
};

// exports.startBreak = async (req, res) => {
//   try {
//     const email = req.body.email;

//     if (!email) {
//       return res.status(400).json({ message: 'email is required.' });
//     }

//     const todayStart = new Date(new Date().setHours(0, 0, 0, 0));

//     const attendance = await Attendance.findOne({
//       email: email,
//       clockin: { $gte: todayStart },
//       clockout: { $exists: false }, // Ensure the user hasn't clocked out yet
//     });

//     if (!attendance) {
//       return res.status(400).json({ message: 'Clock-in not found, please clock-in first.' });
//     }

//     const ongoingBreak = attendance.breaks.find((b) => !b.end);
//     if (ongoingBreak) {
//       return res.status(400).json({ message: 'Break already started. Please end the ongoing break first.' });
//     }

//     attendance.breaks.push({ start: convertToIST() });

//     await attendance.save();
   
//     res.status(200).json({ message: 'Break started successfully', attendance });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during start break', error: error.message });
//   }
// };
exports.startBreak = async (req, res) => {
  try {
    const email = req.body.email;

    if (!email) {
      return res.status(400).json({ message: 'email is required.' });
    }

    const todayStart = new Date(new Date().setHours(0, 0, 0, 0));

    const attendance = await Attendance.findOne({
      email: email,
      clockin: { $gte: todayStart },
      clockout: { $exists: false }, // Ensure the user hasn't clocked out yet
    });

    if (!attendance) {
      return res.status(400).json({ message: 'Clock-in not found, please clock-in first.' });
    }

    // Check if a break is already ongoing
    const ongoingBreak = attendance.breaks.find((b) => !b.end);
    if (ongoingBreak) {
      return res.status(400).json({ message: 'Break already started. Please end the ongoing break first.' });
    }

    // Add a new break with the start time
    const breakStartTime = convertToIST();
    attendance.breaks.push({ start: breakStartTime });

    await attendance.save();

    // Broadcast the break start event to all connected clients
    io.emit('updateBreakStart', {
      email,
      breakStartTime,
      elapsedBreakTime: '00:00:00', // Initial elapsed time
    });

    res.status(200).json({
      message: 'Break started successfully',
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error during start break',
      error: error.message,
    });
  }
};



// exports.endBreak = async (req, res) => {
//   try {
//     const email = req.body.email;

//     if (!email) {
//       return res.status(400).json({ message: 'email is required.' });
//     }

//     const todayStart = new Date(new Date().setHours(0, 0, 0, 0));

//     const attendance = await Attendance.findOne({
//       email: email,
//       clockin: { $gte: todayStart },
//       clockout: { $exists: false }, // Ensure the user hasn't clocked out yet
//     });

//     if (!attendance) {
//       return res.status(400).json({ message: 'Clock-in not found, please clock-in first.' });
//     }

//     const ongoingBreak = attendance.breaks.find((b) => !b.end);
//     if (!ongoingBreak) {
//       return res.status(400).json({ message: 'No ongoing break found. Please start a break first.' });
//     }

//     ongoingBreak.end = convertToIST();

//     const breakDuration = new Date(ongoingBreak.end) - new Date(ongoingBreak.start);

//     const totalBreakMs =
//       attendance.breaks.reduce((acc, b) => {
//         if (b.start && b.end) {
//           acc += new Date(b.end) - new Date(b.start);
//         }
//         return acc;
//       }, 0) + breakDuration;

//     const totalSeconds = Math.floor(totalBreakMs / 1000);
//     const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
//     const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
//     const seconds = (totalSeconds % 60).toString().padStart(2, '0');

//     attendance.totalBreakTime = ${hours}:${minutes}:${seconds};

   
//     await attendance.save();
//     res.status(200).json({ message: 'Break ended successfully', attendance });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during end break', error: error.message });
//   }
// };
exports.endBreak = async (req, res) => {
  try {
    const email = req.body.email;

    if (!email) {
      return res.status(400).json({ message: 'email is required.' });
    }

    const todayStart = new Date(new Date().setHours(0, 0, 0, 0));

    // Find the attendance record for today
    const attendance = await Attendance.findOne({
      email: email,
      clockin: { $gte: todayStart },
      clockout: { $exists: false }, // Ensure the user hasn't clocked out yet
    });

    if (!attendance) {
      return res.status(400).json({ message: 'Clock-in not found, please clock-in first.' });
    }

    // Find the ongoing break
    const ongoingBreak = attendance.breaks.find((b) => !b.end);
    if (!ongoingBreak) {
      return res.status(400).json({ message: 'No ongoing break found. Please start a break first.' });
    }

    // Set the end time for the break
    ongoingBreak.end = convertToIST();

    // Calculate the duration of the current break
    const breakDuration = new Date(ongoingBreak.end) - new Date(ongoingBreak.start);

    // Calculate the total break time (including the current break)
    const totalBreakMs =
      attendance.breaks.reduce((acc, b) => {
        if (b.start && b.end) {
          acc += new Date(b.end) - new Date(b.start);
        }
        return acc;
      }, 0);

    // Convert total break time to HH:MM:SS format
    const totalSeconds = Math.floor(totalBreakMs / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');

    attendance.totalBreakTime = `${hours}:${minutes}:${seconds} `;

    // Save the updated attendance record
    await attendance.save();

    // Broadcast break end event to all clients
    io.emit('updateBreakEnd', {
      email,
      breakEndTime: ongoingBreak.end,
      totalBreakTime: attendance.totalBreakTime,
    });

    res.status(200).json({ message: 'Break ended successfully', attendance });
  } catch (error) {
    res.status(500).json({ message: 'Error during end break', error: error.message });
  }
};


exports.getBreakHistory = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: 'email is required.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const todayStart = new Date(new Date().setHours(0, 0, 0, 0));
    const todayEnd = new Date(new Date().setHours(23, 59, 59, 999));

    const attendance = await Attendance.findOne({
      email,
      clockin: { $gte: todayStart, $lt: todayEnd },
      clockout: { $exists: false },
    });

    if (!attendance) {
      return res.status(404).json({ message: 'No attendance record found for today.' });
    }

    res.status(200).json({ message: 'Break history retrieved successfully', breaks: attendance.breaks });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving break history', error: error.message });
  }
};

exports.getTotalBreakTime = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: 'email is required.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const todayStart = new Date(new Date().setHours(0, 0, 0, 0));
    const attendance = await Attendance.findOne({
      email,
      clockin: { $gte: todayStart },
      clockout: { $exists: false },
    });

    if (!attendance) {
      return res.status(404).json({ message: 'No attendance record found for today.' });
    }

    let totalBreakMs = 0;

    attendance.breaks.forEach((b) => {
      if (b.start && b.end) {
        totalBreakMs += new Date(b.end) - new Date(b.start);
      }
    });

    const totalSeconds = Math.floor(totalBreakMs / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');

    res.status(200).json({
      message: 'Total break time calculated successfully',
      totalBreakTime: `${hours}:${minutes}:${seconds}`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving total break time', error: error.message });
  }
};