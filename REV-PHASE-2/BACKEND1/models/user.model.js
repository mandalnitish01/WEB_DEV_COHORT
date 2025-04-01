import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
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

userschema.pre("save" , async function (next){
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password , 10)
  }
  next();
})
const User = mongoose.model("User", userschema);

export default User;
