import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isLoggedIn = async (req, res, next) => {
  try {
    console.log("cookie/token :- ", req.cookies);
    const token =  req.cookies?.token; //take token from cookies

    console.log("token :- ", token);
    console.log("Token found : ", token ? "YES" : "NO");

    if (!token) {
      return res.status(401).json({
        success: false,
        msg: "Invalid User",
      }); 
    }

    const decodeddata = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded data : ",decodeddata);

    req.user = decodeddata;
    console.log("decoded User ",req.user); //here is the proble it return undefined
   
   
    next();
  } catch (error) {
    console.log("auth middleware failure");
    res.status(500).json({
      msg: "Internal Server error!",
      secure: false,
    });
  }
};
export { isLoggedIn };
