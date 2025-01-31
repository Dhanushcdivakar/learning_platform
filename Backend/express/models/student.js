const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn:{
    type:String,
    // required:true,
    unique:true
  },
  score: { type: Number, required: true },
  password:{
    type:String,
    // required:true,
    min:6,
    max:20
  }
  // Add other fields as necessary, e.g., email, progress, etc.
});

module.exports = mongoose.model('Student', studentSchema);
