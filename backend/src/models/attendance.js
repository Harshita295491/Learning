



const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },

    clockin: {
      type: Date,
      default: Date.now,
      required: true
    },
    clockout: {
      type: Date,
      validate: {
        validator: function (value) {
          return !this.clockin || value >= this.clockin;
        },
        message: 'Clockout time must be after clock-in time.'
      }
    },
    totalTrackedTime: {
      type: String,
      default: "00:00:00"
    },
    status: {
      type: String,
      enum: ['Present', 'Absent', 'Leave', 'Remote Work', 'Missed Clock In', 'Missed Clock Out', 'Full Day Missed', 'Pending', 'Completed', 'Missing Attendance'],
      default: 'Missing Attendance'
    },
    clockinIpAddress: {
      type: String,
      required: true
    },
    clockoutIpAddress: { type: String },
    attendanceRequestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AttendanceRequest'
    },
    workType: {


      type: String,
      enum: ['Work From Office', 'Work From Home'],
      required: true,
    },
    breaks: [
      {
        start: {
          type: Date,
          required: true,
        },
        end: {
          type: Date,
        },
      },
    ],
    // New Field: Total Break Time
    totalBreakTime: {
      type: String,
      default: '00:00:00', // Default to zero time
    },






  },

  {
    collection: 'Attendance',
    timestamps: true
  }
);

module.exports = mongoose.model('Attendance', attendanceSchema)
