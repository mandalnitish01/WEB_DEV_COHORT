import mongoose, { mongo } from "mongoose";
const userschema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isverified: {
      type: Boolean,
      default: false,
    },
    verificationtocken: {
      type: String,
    },
    resetpasswordtocken: {
      type: String,
    },
    resetpasswordExpirestocken: {
      type: Date,
    },
  },
  { 
    Timestamp: true 

  }
);

const User = mongoose.model("User", userschema);

export default User;
