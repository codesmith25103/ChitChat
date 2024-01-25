const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.js');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Specify extended option for bodyParser

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/auth', authRoutes);
const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const api_id = process.env.STREAM_API_ID;
console.log(api_secret)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
