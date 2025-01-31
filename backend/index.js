const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db'); // This will now persist the connection

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Plantellect Backend is running with MongoDB Atlas!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
