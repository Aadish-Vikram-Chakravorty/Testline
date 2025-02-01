const axios = require('axios');

// Replace with actual API endpoints
const CURRENT_QUIZ_API = 'https://api.jsonserve.com/rJvd7g';
const HISTORICAL_QUIZ_API = 'https://api.jsonserve.com/XgAgFJ';

exports.fetchCurrentQuizData = async () => {
  const response = await axios.get(CURRENT_QUIZ_API);
  return response.data;
};

exports.fetchHistoricalQuizData = async () => {
  const response = await axios.get(HISTORICAL_QUIZ_API);
  return response.data;
};
