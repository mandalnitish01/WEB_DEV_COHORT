import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
const registerUser = async (req, res) => {
  //get data
  //validate
  //check if user already exists
  //create a user in DB
  //create a verification token
  //save token in DB
  //send token as email to user with verification link
  //send success response to user
  const { name, email, password } = req.body;
  console.log("User details for registration: ", { name, email, password });
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Please provide all required fields: name, email, and password.",
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

  // Check if user already exists
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email.",
      });
    }
    // Create a new user in the database
    const user = await User.create({
      name,
      email,
      password,
    });
    console.log("Details of new registered user: ", user);
    if (!user) {
      return res.status(400).json({
        message: "User not registered!",
      });
    }

    // Here you would typically create a verification token, save it to the user document,
    const token = crypto.randomBytes(32).toString("hex");
    console.log("user verification token: ", token);

    user.verificationToken = token;
    await user.save();
    // console.log("User verification token saved in database.");

    // Send the verification token to the user's email
    // This is done using a mail service like Nodemailer/mailtrap or SendGrid.

    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    //create verification link
    const verificationurl = `${process.env.BASE_URL}/api/v1/user/verify/${token}`;
    console.log("Verification URL: ", verificationurl);

    const mailOptions = {
      from: process.env.MAILTRAP_FROM_EMAIL,
      to: user.email, //send it to new user email
      subject: "Verify Your Email",
      text: `Please verify your email by clicking the link:
    http://${process.env.BASE_URL}/api/v1/user/verify/${token}`,
      html: `<p>Please verify your email by clicking the link:</p>
           <a href="http://${process.env.BASE_URL}/api/v1/user/verify/${token}">Verify Email</a>`,
    };
    //send mail to user
    const info = await transporter.sendMail(mailOptions);
    console.log("email detail:", info);

    res.status(201).json({
      message:
        "User registered successfully! Please check your email to verify your account.",
      success: true,
    });
  }
     
  catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({
      message: "User registration failed!",
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
};

const verifyUser = async (req, res) => {
    const { token } = req.params;
    console.log("Get token from URL for verify the user: ", token);
    
    if (!token) {
        return res.status(400).json({
        msg: "Invalid token",
        });
    }
    
    try {
        const user = await User.findOne({ verificationToken: token });
        if (!user) {x
        return res.status(404).json({
            msg: "User not found or already verified.",
        });
        }
    
        // Mark the user as verified
        user.isVerified = true;
        user.verificationToken = undefined; // Clear the verification token
        await user.save();
    
        res.status(200).json({
        msg: "User verified successfully!",
        success: true,
        });
    } catch (error) {
        console.error("Error during user verification:", error);
        res.status(500).json({
        msg: "User verification failed!",
        success: false,
        error: error.message || "Internal Server Error",
        });
    }
}

export { registerUser , verifyUser };
