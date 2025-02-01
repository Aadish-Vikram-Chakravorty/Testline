const axios = require('axios');

// Mock API endpoints
const HISTORICAL_API_URL = 'https://api.example.com/historical';

exports.fetchHistoricalData = async (userId) => {
    try {
        const response = await axios.get(`${HISTORICAL_API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching historical data:', error);
        return [];
    }
};

exports.predictRank = (currentQuizData, historicalData) => {
    const currentScore = calculateScore(currentQuizData);
    const avgPastScore = historicalData.reduce((acc, quiz) => acc + quiz.score, 0) / historicalData.length;

    const weightedScore = (currentScore * 0.7) + (avgPastScore * 0.3); // 70% current, 30% past

    const predictedRank = Math.max(1, Math.floor(1000 - (weightedScore * 10))); // Simplified logic
    return predictedRank;
};

function calculateScore(quizData) {
    return quizData.responses.filter(q => q.isCorrect).length; // Simple score calculation
}
