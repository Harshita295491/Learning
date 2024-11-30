const express = require('express');
const router = express.Router();
const AttendanceController = require('../controllers/attendanceController.js');

// router.post('/clockin',AttendanceController.clockIn);
// router.post('/clockout',AttendanceController.clockOut);
// router.get('/today', AttendanceController.getTodayAttendance);
// router.post('/break/start', AttendanceController.startBreak);
// router.post('/break/end',AttendanceController.endBreak);
// router.get('/break/history/:email', AttendanceController.getBreakHistory);
// router.get('/break/total-time/:email', AttendanceController.getTotalBreakTime);


// module.exports = router;
module.exports = (io) => {
    router.post('/clockin', (req, res) => AttendanceController.clockIn(req, res, io)); // Emit event
    router.post('/clockout', (req, res) => AttendanceController.clockOut(req, res, io)); // Emit event
    router.post('/break/start', (req, res) => AttendanceController.startBreak(req, res, io)); // Emit event
    router.post('/break/end', (req, res) => AttendanceController.endBreak(req, res, io)); // Emit event
    
    // No io needed for these APIs
    router.get('/today', AttendanceController.getTodayAttendance);
    router.get('/break/history/:email', AttendanceController.getBreakHistory);
    router.get('/break/total-time/:email', AttendanceController.getTotalBreakTime);
    router.get('/calendar', AttendanceController.getCalendar);
  
    return router;
  };

