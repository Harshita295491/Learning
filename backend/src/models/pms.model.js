// models/pms.model.js
const mongoose = require('mongoose');

// Define the PMS statistics schema
const pmsStatsSchema = new mongoose.Schema({
    totalProjects: { type: Number, default: 0 },
    totalTrackedHours: { type: String, default: "00 H : 00 M" },
    nonBillableHours: { type: String, default: "00 H : 00 M" },
    billableHours: { type: String, default: "00 H : 00 M" },
    totalTasks: { type: Number, default: 0 },
    completedTasks: { type: Number, default: 0 },
    overdueTasks: { type: Number, default: 0 },
    remainingTasks: { type: Number, default: 0 },
    totalActivities: { type: Number, default: 0 }
});

// Create and export the model
const PmsStats = mongoose.model('PmsStats', pmsStatsSchema);

module.exports = PmsStats;
