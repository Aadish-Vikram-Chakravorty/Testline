const quizService = require('../services/quizService');

exports.getCurrentQuizData = async (req, res) => {
  try {
    const data = await quizService.fetchCurrentQuizData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHistoricalQuizData = async (req, res) => {
  try {
    const data = await quizService.fetchHistoricalQuizData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
