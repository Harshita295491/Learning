const mongoose = require('mongoose');

const attendanceRequestSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    date: { type: Date, required: true }, 
    requestType: { 
      type: String, 
      enum: ['Leave', 'Remote Work', 'Overtime', 'Absent', 'Correction'], 
      required: true 
    }, // Type of request
    status: { 
      type: String, 
      enum: ['Pending', 'Approved', 'Rejected'], 
      default: 'Pending', 
      required: true 
    },
    startDate: { type: Date }, 
    endDate: { type: Date }, 
    reason: { type: String }, 
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  },
  {
    collection: 'AttendanceRequest',
    timestamps: true, 
  }
);

module.exports = mongoose.model('AttendanceRequest', attendanceRequestSchema);
