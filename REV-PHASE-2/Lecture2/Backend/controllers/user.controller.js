import User from "../models/user.model.js"
import crypto from 'crypto'
import sendverificationEmail from '../utils/sendMail.utils.js'
const registerUser = async (req, res) => {

  //get user data from req body
  const {name,email,password} = req.body;


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
  if (!email.includes("@")) {
    return res.status(400).json({
      msg: "Invalid email! Email must contain '@' symbol.",
    });
  }

  try {
    //find user in db 
    const existingUser = await User.findOne({email});
    //check existing user
    if(!existingUser){
        res.status(400).json({
            success:false,
            msg:"user is already exists"
        })
    }

    //create a verification token
    const token = crypto.randomBytes(32).toString('hex');
    const tokenExpipry = new Date.now() + 10 * 60*60*1000;

    //create a new individual user 
const  user = await User.create({
    name,
    email,
    password,
    verificationToken : token,
    verificationTokenExpiry : tokenExpipry
})
if(!user){
    res.status(400).json({
        success:false,
        messege : "User not created"
    })
}

await sendverificationEmail(user.email , token)

//final response
return res.status(200).json({
    success:true,
    messege:"user register successfully! now you have to verify your email"
})


  } catch (error) {
   return res.status(500).json({
        success:false,
        messege:"Internal server error"
   }) 
  }
};

//verification controller
const verify = async (req,res)=>{
    try {
            //get token from params
            const token = req.params.token;
            console.log(token);

            //get user
            const user = await User.findOne({
                verificationToken : token,
                verificationTokenExpiry : {$gt : Date.now()}
            })

            //chseck user exist

            if(!user){
                return res.status(400).json({
                    success:false,
                    messege:"token Invalid"
                })
            }
            user.isVerified = true;
            user.verificationToken = undefined;
            user.verificationTokenExpiry = undefined;
            await user.save();

            return res.status(200).json({
                success:true,
                messege:"User account is verified!"
            })
    } catch (error) {
        return res.status(400).json({
            messege : "Internal server error"
        })
    }
}
export { registerUser , verify};
