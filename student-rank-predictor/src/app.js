const express = require('express');
const app = express();
const quizRoutes = require('./routes/quizRoutes');

app.use(express.json()); // Middleware to parse JSON
app.use('/api/quiz', quizRoutes); // Route for quiz-related APIs

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`);
});
