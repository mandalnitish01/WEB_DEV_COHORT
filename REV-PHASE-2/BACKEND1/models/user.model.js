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
    verificationExpirestocken: {
      type: String,
    },
    resetpasswordtocken: {
      type: String,
    },
    resetpasswordExpirestocken: {
      type: Date,
    },
    refreshToken:{
      type: String,
      default: null,
    }
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
// const instance = new User({ name: ‘John’, age: 30 }); //you can add schema data via this
//instance.save(); // pre-save hook will be triggered
export default User;
