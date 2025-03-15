import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from 'nodemailer'



//response route url
const registeruser = async (req, res) => {
  // res.send("registerd successfull");
  // console.log("Request Body:", req.body);  // Debugging log

  //get data
  const { name, email, password } = req.body;
  // console.log(name ,"requested part") // Debugging log
  //validation
  if (!name || !email || !password) {
    return res.status(400).json({
      messege: "All fields are required!",
    });
  }
  // console.log(email); //Debugging log


  //check if user already exists
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        messege: "User already exist",
      });
    }
    //if not then creat a user in DB
    const newuser = await User.create({
      name,
      email,
      password,
    });
    
    console.log(newuser);

    if (!newuser) {
      return res.status(400).json({
        messege: "User not registered",
      });
    }
    //create a verification tocken

    const tocken = crypto.randomBytes(32).toString("hex");
    console.log(tocken);


    // save the tocken in DB
    newuser.verificationToken = tocken;
    await newuser.save();


     //send token as email to user

     const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      ports,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailoption = {
      from: process.env.MAILTRAP_SENDEMAIL, // sender address
    to: newuser.email, // list of receivers
    subject: "Verify your email", // Subject line
    text: `plesse click on the following link
    ${process.env.BASE_URL}/api/v1/users/verify/${tocken}`,
    };

    await transporter.sendMail(mailoption)

res.status(201).json({
  messege:"User registered successfully!",
  success:true
});

}

catch (error) {
  res.status(400).json({
    messege:"User not registered!",
    error,
    success:false
  })
}
};

// //response route url
// const login = (req,res)=>{
//     res.send("Login successfull!")
// }

// const dashboard = (req,res) =>{
//     res.send("Admin Dashboard")
// }

// export {registeruser , login , dashboard};
export { registeruser };
