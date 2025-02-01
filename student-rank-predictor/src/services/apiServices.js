const axios = require('axios');

// API Endpoints
const QUIZ_API = 'https://api.jsonserve.com/rJvd7g';
const HISTORY_API = 'https://api.jsonserve.com/XgAgFJ';

// Fetch current quiz data
const getCurrentQuizData = async () => {
  try {
    const response = await axios.get(QUIZ_API);
    return response.data;
  } catch (error) {
    console.error('Error fetching current quiz data:', error);
    return null;
  }
};

// Fetch historical data
const getHistoricalQuizData = async () => {
  try {
    const response = await axios.get(HISTORY_API);
    return response.data;
  } catch (error) {
    console.error('Error fetching historical quiz data:', error);
    return null;
  }
};

module.exports = { getCurrentQuizData, getHistoricalQuizData };
