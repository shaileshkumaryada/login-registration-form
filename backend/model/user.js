const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name must be at most 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please enter a valid email address'
    }
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    minlength: [8, 'Password must be at least 8 characters']
  }
});

module.exports = mongoose.model('User', userSchema);
