import jwt from "jsonwebtoken";
import dotenv  from 'dotenv';
dotenv.config();

export const isLoggedIn = async (req, res, next) => {
  try {

    console.log("cookie/token :- ",req.cookies);
    const token = await req.cookies?.token;

    console.log("Token found : ", token ? "YES" : "NO");

    if (!token) {
      return res.status(400).json({
        msg: "Invalid User",
      });
    }

    const decodeddata = jwt.verify(token,process.env.JWT_SECRATE);
    console.log(decodeddata)
    req.user = decodeddata;
    next();
  } 
  catch (error) {
    console.log("auth middleware failure")
    res.status(500).json({
        msg:"Internal Server error!",
        secure:false
    })

  }
  next();
};
