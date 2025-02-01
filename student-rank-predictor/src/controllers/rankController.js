const { getCurrentQuizData, getHistoricalQuizData } = require('../services/apiService');

const calculateRank = async (req, res) => {
  const currentQuiz = await getCurrentQuizData();
  const historicalData = await getHistoricalQuizData();

  if (!currentQuiz || !historicalData) {
    return res.status(500).json({ message: 'Data fetching error' });
  }

  // Sample logic: Calculate average score
  const totalScores = historicalData.map(item => item.score);
  const averageScore = totalScores.reduce((a, b) => a + b, 0) / totalScores.length;

  const predictedRank = averageScore > currentQuiz.score ? 'Above Average' : 'Below Average';

  res.json({ predictedRank, currentQuizScore: currentQuiz.score, averageScore });
};

module.exports = { calculateRank };
