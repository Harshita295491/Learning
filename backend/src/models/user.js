
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  picture: String,
  accessToken: String,
  refreshToken: String,
  idToken: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
