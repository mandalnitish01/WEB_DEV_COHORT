import User from "../models/user.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({
      msg: "All felds are required!",
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
  //condition for email
  if (!email.includes("@")) {
    return res.status(400).json({
      msg: "Invalid email! Email must contain '@' symbol.",
    });
  }
  console.log(email, password, name); //if we not provide the filed and try to print the it return undefined

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        mesege: "User already exists",
      });
    }

    const newuser = await User.create({
      name,
      email,
      password,
    });
    console.log(newuser);

    if (!newuser) {
      return res.status(400).json({
        messege: "User not registered!",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    newuser.verificationtocken = token;
    await newuser.save();

    //send email to user
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, //true for port 465 baaki false
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    console.log("transporter", transporter);

    //create mail options
    const mailOptions = {
      from: process.env.MAILTRAP_SENDEREMAIL, // sender address
      to: newuser.email, // list of receivers
      subject: "Plese verify your email", // Subject line
      text: `Click on the link to verify your email 
            ${process.env.BASE_URL}/api/v1/user/verify/${token}`,
      //   html: `<p>Click on the link below to verify your email:</p>
      //    <a href="${process.env.BASE_URL}/api/v1/user/verify/${token}" target="_blank">
      //    Verify Email</a>`, // HTML body
    };
    console.log("mail loaded!", mailOptions);

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email sending error:", error);

        // Ensure response is sent only once
        if (!res.headersSent) {
          return res.status(500).json({ error: "Email sending failed" });
        }
      } else {
        console.log("Email sent:", info.response);

        // Ensure response is sent only once
        if (!res.headersSent) {
          return res.status(200).json({ message: "Email sent successfully" });
        }
      }
    });

    res.status(201).json({
      messege: "User registered successfully!",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      messege: "User not registered!",
      success: false,
      error,
    });
  }
};

const verifyUser = async (req, res) => {
  const { token } = req.params;
  console.log(token);

  if (!token) {
    res.status(500).json({
      msg: "Invalid token",
    });
  }

  const user = await User.findOne({ verificationtocken: token });
  if (!user) {
    res.status(500).json({
      msg: "User Not found!",
    });
  }
  user.isverified = true;
  user.verificationtocken = undefined;
  await user.save();

  return res.status(200).json({
    msg: "User verification successfully, You can login now.",
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        msg: "Invalid email or password!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({
        msg: "Invalid email or password!",
      });
    }

    if (!user.isverified) {
      res.status(400).json({
        msg: "User Not veriyfied",
      });
    }

    //creat jwt 
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRATE,
      {
        expiresIn: "24h",
      }
    );
    // console.log(token)

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    }; 
    // console.log(cookieOptions)
    res.cookie("token", token, cookieOptions);

    console.log("user login successfull!")
    res.status(200).json({
      success: true,
      message: "Login successfully!",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } 
  catch (error) {
    res.status(400).json({
      msg: "Login failed!"
    });
  }
};

const getMe = async (req,res)=>{
  try {
    
   const user = await User.findById(req.user.id).select('-password')
   if(!user){
    return res.status(400).json({
      msg:"User Not found!",
      success:false
    })
   }
   res.status(200).json({
    success:true,
    user
   })

  } catch (error) {
    return res.status(400).json({
      msg:"User not found!",
      success:false
    })
  }

}

const logoutUser = async (req,res)=>{
  try {
    
    res.cookie("token" , "",{}) //{}- in this bracket you can send cookie
    res.status(200).json({
      success:true,
      msg:"Logged out Successfully!"
    })
   

  } catch (error) {
    return res.status(400).json({
      msg:"something error",
      success:false
    })
  }

}

export { registerUser, verifyUser, loginUser , getMe ,logoutUser};
