const express = require('express');
const { calculateRank } = require('../controllers/rankController');

const router = express.Router();
router.get('/predict-rank', calculateRank);

module.exports = router;
