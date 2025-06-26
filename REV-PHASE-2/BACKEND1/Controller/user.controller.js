import User from "../models/user.model.js";
import crypto from "crypto";
import dotenv from "dotenv";
import sendVerificationEmail from "../utils/sendMail.utils.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    console.log(
      "in register phase if user name email and password not provided then show all  fields are required"
    );
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
  console.log(
    "registered email : ",
    email,
    "registered password :",
    password,
    "registered name :",
    name
  ); //if we not provide the filed and try to print the it return undefined

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("in register phase if user already exist error");
      return res.status(400).json({
        mesege: "User already exists",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    console.log("Details of new added user : ", user);

    if (!user) {
      console.log("if user not registered error");
      return res.status(400).json({
        messege: "User not registered!",
      });
    }

    const token = crypto.randomBytes(32).toString("hex"); //create a token
    console.log("user verification token : ", user.verificationtocken);

    // const tokenExpires = Date.now()+ 10 * 60 * 1000; //10 minutes
    // console.log("Verification Token expires in : ", tokenExpires);

    user.verificationtocken = token;
    // user.verificationExpirestocken = tokenExpires; //set the token to user

    await user.save();

    //send email to user
    const isEmailSent = await sendVerificationEmail(user.email, token);
    // if (!isEmailSent) {
    //   console.log("Email not sent to user");
    //   return res.status(400).json({
    //     msg: "Email not sent!",
    //   });
    // }
    // console.log("Email sent successfully to user");

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
  console.log("Get token from url for verify the user : ", token);

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
    console.log("Login user email : ", user);

    if (!user) {
      return res.status(400).json({
        msg: "Invalid email or password!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password); //it return true and false
    // const isMatch = user.comparePassword(password);
    console.log("match the password : ", isMatch);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        msg: "Invalid email or password!",
      });
    }

    if (!user.isverified) {
      res.status(400).json({
        msg: "User Not veriyfied",
      });
    }

    // //creat jwt token
    // const token = jwt.sign(
    //   { id: user._id, role: user.role }, //{id:user._id} is payload
    //   process.env.JWT_SECRET, //secret key
    //   {
    //     expiresIn: "24h", //token will expire in 24 hours
    //   }
    // );
    // console.log("JWT token : ", token);
// there is something before the code 


    // create jwt refresh token and access token
    const accessToken = jwt.sign(
      //payload/id
      { id: user._id, role: user.role },
      //token secrate
      process.env.JWTACCESS_SECRET,
      //expiry
      { expiresIn: "24h" } //token will expire in 24 hours
    );

    const refreshToken = jwt.sign(
      //payload/id
      { id: user._id, role: user.role },
      //token secrate
      process.env.JWTREFRESH_SECRET,
      //expiry
      { expiresIn: "24h" } //token will expire in 24 hours
    );
    user.refreshToken = refreshToken;
    await user.save();
    //set it to cookies
    const cookieOptions = {
      httpOnly: true, //prevent from XSS attacks
      secure: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // res.cookie() expects expires to be a Date object, not a number.
    };
    console.log("Cookie option returned value :", cookieOptions);

    // console.log("token code : ", token, "Cookie details :", cookieOptions); //this is for jwt token
    console.log(
      "accessToken code : ",
      accessToken,
      "Cookie details :",
      cookieOptions
    );
    console.log(
      "refreshToken code : ",
      refreshToken,
      "Cookie details :",
      cookieOptions
    );
    // Set the cookie with the token
    // res.cookie("token", token, cookieOptions); //this is for jwt token
    res.cookie("accessToken", accessToken, cookieOptions);
    res.cookie("refreshToken", refreshToken, cookieOptions);

    console.log("user login successfull!");

    res.status(200).json({
      success: true,
      message: "Login successfully!",
      // token, //for jwt token
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      msg: "Login failed!",
    });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    console.log("User profile details : ", user);

    if (!user) {
      return res.status(400).json({
        msg: "User Not found!",
        success: false,
      });
    }

    res.status(200).json({
      msg: "User details",
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      //not include return statement
      msg: "User not found!",
      success: false,
    });
  }
};

const logoutUser = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    return res.status(400).json({
      msg: "No token found!",
      success: false,
    });
  }
  
  try {
    const refreshdecoded = jwt.verify(token, process.env.JWTREFRESH_SECRET);
    console.log(refreshdecoded.id);
    const user = await User.findOne({ _id: refreshdecoded.id });
    console.log(user);
    console.log("logouted user email id ", user.email);


    if (!user) {
      return res.status(401).json({
        msg: "Unauthorized access!",
        success: false,
      });
    }
    //remove refresh token from user
    // user.refreshToken = null; //user baar baar ye cheej karega isliye null kiya na ki undefined.
    res.cookie("accessToken", "", {
      httpOnly: true,
      secure: true,
    });

    res.cookie("refreshToken", "", {
      httpOnly: true,
      secure: true,
    });

    res.status(200).json({
      success: true,
      msg: "Logged out Successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      msg: "something error",
      success: false,
    });
  }
};

export { registerUser, verifyUser, loginUser, getMe, logoutUser };
