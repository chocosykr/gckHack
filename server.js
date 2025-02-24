import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './User.js';

dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// MongoDB connection using MONGODB_URI from .env
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Route to handle adding a user
app.post('/add-user', async (req, res) => {
  const { email, symptoms, duration, filepath } = req.body;

  if (!email) {
      return res.status(400).json({ message: 'Email is required' });
  }
  if (!symptoms) {
      return res.status(400).json({ message: 'Description is required' });
  }
  if (!duration) {
    return res.status(400).json({ message: 'Description is required' });
}


  try {
      // Find the user by email
      const user = await User.findOne({ email });

      if (user) {
     
         user.symptoms = symptoms;
        user.duration = duration;
        user.filepath = filepath;
       
          await user.save();
          return res.status(200).json({ message: 'Description updated successfully' });
      } else {
          // If the user doesn't exist, create a new user
          const newUser = new User({ email, symptoms, duration, filepath});
          await newUser.save();
          return res.status(201).json({ message: 'User created successfully' });
      }
  } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error saving user', error: err.message });
  }
});




// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});