const express = require('express');
const router = express.Router();
const student = require('../models/student');

// Endpoint to get all students
router.get('/', async (req, res) => {
  try {
    const students = await student.find({}); // Fetch all student documents
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Error fetching student data' });
  }
});

module.exports = router;
