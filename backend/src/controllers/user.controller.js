const Sample=require('../models/initial_db')

const user_creation=async (req, res) => { 
    try { const { email } = req.body;
   // Create a new user 
   const newUser = new Sample({ email }); 
   // Save the user to the database 
   await newUser.save(); res.status(201).json({ message: 'User created successfully', user: newUser });
   } 
   catch (error) { if (error.code === 11000) {
     // Handle duplicate email error
      res.status(400).json({ message: 'Email already exists' }); 
    } else if (error.errors && error.errors.email) { 
      // Handle email validation error 
      res.status(400).json({ message: error.errors.email.message }); 
    } else { res.status(500).json({ message: 'Internal server error' });
   } } }



   module.exports={user_creation}