// Import the PmsStats model directly
const PmsStats = require('../models/pms.model'); // Import the model

// Controller function to get PMS statistics
const getPmsStats = async (req, res) => {
    try {
        // Fetch the PMS statistics (assuming there’s only one record for simplicity)
        const pmsStats = await PmsStats.findOne({});

        // If no data is found, send a default response
        if (!pmsStats) {
            return res.status(404).json({
                message: "PMS statistics not found",
                data: {
                    totalProjects: 0,
                    totalTrackedHours: "00 H : 00 M",
                    nonBillableHours: "00 H : 00 M",
                    billableHours: "00 H : 00 M",
                    totalTasks: 0,
                    completedTasks: 0,
                    overdueTasks: 0,
                    remainingTasks: 0,
                    totalActivities: 0
                }
            });
        }

        // Send the fetched data as a JSON response
        res.json(pmsStats);
    } catch (error) {
        console.error("Error fetching PMS statistics:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getPmsStats
};
