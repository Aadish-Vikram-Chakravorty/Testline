const express = require('express');
const bodyParser = require('body-parser');
const rankController = require('./Controllers/rankController');

const app = express();
app.use(bodyParser.json());

app.post('/predict-rank', rankController.predictRank);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
