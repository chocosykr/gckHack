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
  const { email, description } = req.body;

  if (!email) {
      return res.status(400).json({ message: 'Email is required' });
  }
  if (!description) {
      return res.status(400).json({ message: 'Description is required' });
  }

  try {
      // Find the user by email
      const user = await User.findOne({ email });

      if (user) {
          // If the user exists, update their description
          user.description = description; // Overwrite existing description
          await user.save();
          return res.status(200).json({ message: 'Description updated successfully' });
      } else {
          // If the user doesn't exist, create a new user
          const newUser = new User({ email, description });
          await newUser.save();
          return res.status(201).json({ message: 'User created successfully' });
      }
  } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error saving user', error: err.message });
  }
});

// Route to get user description by email
app.get('/get-user/:email', async (req, res) => {
  const { email } = req.params;  // Correctly extract the email parameter
  try {
      const user = await User.findOne({ email });
      if (user) {
          res.json({ email: user.email, description: user.description }); // You might want to return more information
      } else {
          res.status(404).json({ message: 'User not found' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});