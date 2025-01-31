const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const studentRoutes = require('./router/students');
const register = require('./router/register');
const login = require('./router/login');



dotenv.config();

const app = express();

// Middleware
app.use(cors(
));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/register',register);
app.use('/api/login',login);

app.get('/', (req, res) => {
  res.send('Hello World! Your backend is successfully deployed.');
});

// Start Server
const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0'; 

app.listen(PORT,HOST, () => {
  console.log(`Server is running on port ${PORT}`);
});
