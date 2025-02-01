const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/current', quizController.getCurrentQuizData);
router.get('/history', quizController.getHistoricalQuizData);

module.exports = router;
