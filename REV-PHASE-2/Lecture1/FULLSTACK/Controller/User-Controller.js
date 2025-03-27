import User from "../model/UserModel.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//register user
const registerUser = async (req, res) => {
  // algorithm

  // send success status to user
  // send error

  // get data from user
  const { name, email, password } = req.body;

  // validate the data
  //check the condition if any of the field is empty then return the error message
  if (!name || !email || !password) {
    return res.status(400).json({
      msg: "All fields are required!",
    });
  }
  //check the condition if password is less than 6 characters or does not contain at least one lowercase letter, one uppercase letter, one number and one special character then return the error message
  if (
    password.length < 6 ||
    !/[a-z]/.test(password) || // Check for at least one lowercase letter
    !/[A-Z]/.test(password) || // Check for at least one uppercase letter
    !/[0-9]/.test(password) || // Check for at least one digit
    !/[!@#$%^&*(),.?":{}|<>]/.test(password) // At least one special character
  ) {
    return res.status(400).json({
      msg: "Password should be at least 6 characters long and include at least 1 lowercase letter, 1 uppercase letter, 1 number and at least 1 special charecter",
    });
  }
  //check the condition if email does not contain '@' symbol then return the error message
  // if(!/@/.test(email)){
  //     return res.status(400).json({
  //         msg: "Invalid email address"
  //     });
  // }
  if (!email.includes("@")) {
    return res.status(400).json({
      msg: "Invalid email! Email must contain '@' symbol.",
    });
  }

  // check if user already exists

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        messege: "User already exists",
      });
    }

    // create a user in DB
    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);
    //check if user not registered in db any how
    if (!user) {
      return res.status(400).json({
        msg: "User not registered",
      });
    }

    // create a verification token
    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token;
    // save the token in DB
    await user.save();

    // send  email

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAILTRAP_SENDEREMAIL, // sender address
      to: user.email, // list of receivers
      subject: "verify your email", // Subject line
      text: `Click on the link to verify your email 
            ${process.env.BASE_URL}/api/v1/user/verify/${token}`, // plain text body,

      // html: `<p>Click on the link below to verify your email:</p>
      //  <a href="${process.env.BASE_URL}/api/v1/user/verify/${token}" target="_blank">
      //  Verify Email</a>`, // HTML body
    };

    // await transporter.sendMail(mailOptions)
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email: ", err);
        return res
          .status(500)
          .json({ msg: "Failed to send verification email", error: err });
      }
      console.log("Email sent: ", info.response);
    });

    ``;
    res.status(201).json({
      msg: "User registered successfully, Please verify your email",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Internal server error",
      success: false,
      error,
    });
  }
};

//verify user
const verifyUser = async (req, res) => {
  // get token from url
  const { token } = req.params; //params used for get data from url
  //validate
  if (!token) {
    return res.status(400).json({
      msg: "Invalid token",
    });
  }
  //find user based on token
  const user = await User.findOne({ verificationToken: token });
  //if user not founmd return error
  if (!user) {
    return res.status(400).json({
      msg: "User not found!",
    });
  }

  // set verified fields to true
  user.isverified = true;
  //remove varification token
  user.verificationToken = undefined;
  //save the details
  await user.save();

  // ✅ Send response to the client
  res.status(200).json({
    msg: "Email verified successfully! You can now log in.",
    success: true,
  });
};

//login user
const loginUser = async (req, res) => {
  //get email and password
  const { email, password } = req.body; //body used for get data from body
  //chekc if email and password is empty
  if (!email || !password) {
    console.log("email or paddword are not correct")
    return res.status(400).json({
      msg: "All fields are required!",
    });
  }



  try {
    //check user email in db
    const user = await User.findOne({ email });
//if not exist return error
    if (!user) {
      return res.status(400).json({
        msg: "Invalid email or password!",
      });
    }
//if email is write the control reach here and check the password with the help of bcrypt compare method
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    // if password is wrong then return error
    if (!isMatch) {
      return res.status(400).json({
        msg: "Invalid email or password!",
      });
    }

    //and check another condition thata user is verified or not
    if (!user.isverified) {
      return res.status(400).json({
        msg: "Please verify your email to login",
      });
    }

    //if user is verified then create a token with the help of jwt.sign method
    const token =   jwt.sign(
      { id: user._id },
       process.env.JWT_SECRET, 
       { expiresIn: process.env.JWT_EXPIRY }
      )
      const cookieoption ={
        httpOnly: true,
        secure:true,
        maxAge: 24*60*60*1000
      }

      res.cookie("token", token , cookieoption)

      res.status(200).json({
        msg: "User logged in successfully",
        success: true,
        token,
        user:{
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      })
  } 
  
  catch (error) {
    return res.status(400).json({
      msg: "Internal server error",
      success: false,
      error,
    });
  }
};

// getMe homepage 

const getMe = (req,res) =>{
  try {
    
  } catch (error) {
    
  }
}

//logout user
const logoutUser = (req,res) =>{
  try {
    
  } catch (error) {
    
  }
}

//password reset 
const resetPassword = (req,res) =>{
  try {
    
  } catch (error) {
    
  }
}

//password forgot 
const forgotPassword = (req,res) =>{
  try {
    
  } catch (error) {
    
  }
}



//user profile route
//logout route
//forgot password route
//reset password route
//update password route
//update user details route
//delete user route
export { registerUser , verifyUser , loginUser , getMe , logoutUser , resetPassword , forgotPassword};
