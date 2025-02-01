# Student Rank Predictor - Backend API

This project is a backend solution for analyzing quiz performance and predicting a student's NEET rank based on their quiz data. It is built using **Node.js** and **Express.js**.


## Features

1. **Analyze Quiz Data**:
   - Identify patterns in student performance by topics, difficulty levels, and response accuracy.
   - Highlight weak areas and improvement trends.

2. **Predict NEET Rank**:
   - Predict a student's NEET rank based on their quiz performance and historical data.

3. **Bonus Feature**:
   - Predict the most likely college a student could be admitted to based on their predicted NEET rank.

---

## Technologies Used

- **Node.js**: Runtime environment for JavaScript.
- **Express.js**: Web framework for building the API.
- **CSV-Parser**: For reading and parsing CSV files.
- **Axios**: For making HTTP requests (if needed).

---

## Setup Instructions

### Prerequisites

1. **Node.js**: Make sure you have Node.js installed. Download it from [nodejs.org](https://nodejs.org/).
2. **Git**: Install Git to clone the repository. Download it from [git-scm.com](https://git-scm.com/).

### Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/student-rank-predictor.git
   cd student-rank-predictor
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Add Mock Data**:
   - Place your `current_quiz.csv` and `historical_quiz.csv` files in the project root directory.

4. **Run the Server**:
   ```bash
   node server.js
   ```

5. **Access the API**:
   - The server will run at `http://localhost:3000`.
   - Use Postman or `curl` to interact with the API.

---

## API Endpoints

### 1. **Predict Rank**
- **Endpoint**: `POST /predict-rank`
- **Request Body**:
  ```json
  {
    "userId": "1"
  }
  ```
- **Response**:
  ```json
  {
    "userId": "1",
    "averageScore": 87.5,
    "predictedRank": 1250,
    "predictedCollege": "XYZ Medical College"
  }
  ```

---

## Project Structure

```
student-rank-predictor/
├── server.js               # Main server file
├── current_quiz.csv        # Mock current quiz data
├── historical_quiz.csv     # Mock historical quiz data
├── README.md               # This file
├── package.json            # Node.js dependencies and scripts
└── node_modules/           # Installed dependencies
```

---

## Approach

1. **Data Analysis**:
   - Loaded and analyzed quiz data using `csv-parser`.
   - Calculated accuracy by topic and identified weak areas.

2. **Rank Prediction**:
   - Used a simple linear formula to predict rank based on average quiz scores.
   - Integrated a college prediction feature based on rank.

3. **Backend API**:
   - Built a RESTful API using Express.js to expose the prediction logic.

---

## Screenshots

### API Response Example
![API Response](screenshots/api-response.png)

### Accuracy by Topic Visualization
![Accuracy by Topic](screenshots/accuracy-by-topic.png)

---

## Video Demonstration

A 2-5 minute video demonstrating the API, its inputs, outputs, and logic is included in the submission.

---

## Future Improvements

1. Integrate a machine learning model for more accurate rank predictions.
2. Fetch real-time data from the provided API endpoints.
3. Add authentication and user management features.

---

## Author

Aadish Vikram Chakravorty 😊
chakravortyaadish.work@gmail.com
https://github.com/Aadish-Vikram-Chakravorty
