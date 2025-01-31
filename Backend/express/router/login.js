const express = require('express');
const router = express.Router();
const student = require('../models/student');


//Login
router.post("/", (req, res) => {
    const { usn, password } = req.body;

    student.findOne({ usn:usn })
        .then(user => {
            if (user) {
                // Check if the usn matches
                if (user.usn === usn && user.password === password) {
                    res.json({ status: "success", message: "Login successful", user: user });
                } else {
                    res.status(400).json({ message: "Invalid email" });
                }
            } else {
                res.status(400).json({ message: "Invalid name" });
            }
        })
        .catch(err => {
            console.error("Error occurred during login:", err);
            res.status(500).json({ message: "Internal server error" });
        });
});



module.exports = router;
