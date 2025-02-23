import mongoose from 'mongoose';

// Define the schema for the user
const userSchema = new mongoose.Schema({
 email: { type: String, required: true, unique: true},  // 'username' field, required and unique
 description: { type:String, required: true},

});

// Create and export the User model based on the schema
const User = mongoose.model('User', userSchema);

export default User;
