require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userLogin = require('./routes/login');

const app = express();

// Middleware
app.use(cors());  // You can configure this if needed
app.use(express.json());  // Built-in body parser for JSON

// Routes
app.use('/login', userLogin);

// Sample route for health check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
