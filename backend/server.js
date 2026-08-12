const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10kb' }));

// Rate limiting - prevent spam/abuse
const appointmentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requests per IP in 15 min
  message: {
    success: false,
    error: 'Too many appointment requests. Please try again after 15 minutes.'
  }
});

// Routes
app.use('/api/appointments', appointmentLimiter, require('./routes/appointmentRoutes'));

// Test route
app.get('/', (req, res) => {
  res.send('Your Dentist Backend is running ✅');
});

// 404 handler - jab galat route hit ho
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});