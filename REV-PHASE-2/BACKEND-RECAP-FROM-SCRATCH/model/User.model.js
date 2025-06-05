import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ['user', 'admin'], //enum full form is enumeration, which restricts the value to a set of predefined values
        default: 'user',
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken:{
        type: String,
        default: null,
    },
    resetPasswordToken: {
        type: String,
        default: null,
    },
    resetPasswordExpires: {
        type: Date,
        default: null,
    },
},{
    timestamps: true, // This will add createdAt and updatedAt fields. mongoose automatically add two filelds in the dataabase schema.
})
const User = mongoose.model('User', userSchema);
export default User;
// This code defines a Mongoose schema for a User model in a Node.js application.
// The schema includes fields for name, email, password, role, and createdAt.