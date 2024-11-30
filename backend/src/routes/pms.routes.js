// routes/pmsRoutes.js
const express = require('express');
const router = express.Router();
const { getPmsStats } = require('../controllers/pms.controller');

router.get('/pms/stats', getPmsStats);

module.exports = router;
