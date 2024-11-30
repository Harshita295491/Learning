
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    validate: { validator: function(value) { // Custom validation function to check if the email ends with '@thebluespire.com' 
        return /@thebluespire\.com$/.test(value);
     }, message: props => `${props.value} is not a valid email address! It should end with '@thebluespire.com'.` }
  },
 
});

const Sample = mongoose.model('checking_email', userSchema);

module.exports = Sample;
