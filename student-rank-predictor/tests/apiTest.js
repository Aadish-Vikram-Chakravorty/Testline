const axios = require('axios');

// Replace with the actual API endpoint you receive
const apiURL = 'https://api.example.com/quiz-data'; 

async function fetchQuizData() {
  try {
    const response = await axios.get(apiURL); // GET request
    console.log(response.data); // Display the response
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchQuizData();
