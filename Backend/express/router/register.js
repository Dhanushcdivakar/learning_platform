const express = require('express');
const router = express.Router();
const student = require('../models/student');


//Register
router.post("/",(req,res)=>{
    student.create(req.body)
  .then(student =>res.json(student));
});

// router.get("/",(req,res)=>{
//     res.send("hello World")
//   });


module.exports = router;
