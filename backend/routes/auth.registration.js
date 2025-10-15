const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/user');  // Path is 'models' not 'model'
const router = express.Router();

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation: check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // New user creation
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: "Error in registration" });
  }
});

module.exports = router;
