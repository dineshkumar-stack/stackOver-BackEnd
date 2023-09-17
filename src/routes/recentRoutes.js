const express = require('express');
const router = express.Router();
const recentController = require('../controllers/recentController');

router.get('/recent', recentController.getRecentQ);

module.exports = router;