import mongoose from 'mongoose';

// Define the schema for the user
const userSchema = new mongoose.Schema({
 email: { type: String, required: true, unique: true},  // 'username' field, required and unique
 symptoms: { type:String, required: true},
 duration: { type:String, required: true},
filepath: {type:String},
});

// Create and export the User model based on the schema
const User = mongoose.model('User', userSchema);

export default User;
