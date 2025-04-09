import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";
dotenv.config();

const isLoggedIn = async (req, res, next) => {
  try {
    console.log("cookie/token :- ", req.cookies);
    //extract token from request  of the user API call (from cookies)
    // const token = req.cookies?.token; //take token from cookies
    const refreshToken = req.cookies?.refreshToken; //take refresh token from cookies
    const accessToken = req.cookies?.accessToken; //take access token from cookies

    // console.log("token :- ", token);
    // console.log("Token found : ", token ? "YES" : "NO");
    console.log("accessToken :- ", accessToken);
    console.log("accessToken found : ", accessToken ? "YES" : "NO");
    console.log("refreshToken :- ", refreshToken);
    console.log("refreshToken found : ", refreshToken ? "YES" : "NO");

    // if(!token || !refreshToken || !accessToken){
    //   return res.status(401).json({
    //     msg: "Unauthorized! Please login again",
    //     success: false,
    //   });
    // }

    if (!accessToken) {
      if (!refreshToken) {
        return res.status(401).json({
          msg: "Unauthorized! Please login again",
          success: false,
        });
      }
      //agar refresh token hai then
      //verify the refresh token
      const refreshdecoded = jwt.verify(refreshToken, JWTREFRESH_SECRET);
      console.log(refreshdecoded.id);

      const user = await User.findOne({ _id: refreshdecoded.id });
      console.log(user.email);
      if (!user) {
        return res.status(401).json({
          msg: "Unauthorized access!",
          success: false,
        });
      }
      //create new access token
      // create jwt refresh token and access token
      const newaccessToken = jwt.sign(
        //payload/id
        { id: user._id, role: user.role },
        //token secrate
        process.env.JWTACCESS_SECRET,
        //expiry
        { expiresIn: "24h" } //token will expire in 24 hours
      );

      const newrefreshToken = jwt.sign(
        //payload/id
        { id: user._id, role: user.role },
        //token secrate
        process.env.JWTREFRESH_SECRET,
        //expiry
        { expiresIn: "24h" } //token will expire in 24 hours
      );
      user.refreshToken = newrefreshToken;
      await user.save();

      const cookieOptions = {
        expires: new Date(Date.now() + 10 * 60 * 60 * 1000), //10 min
        httpOnly: true,
        secure: true,
      };
      res.cookie("accessToken", newaccessToken, cookieOptions);
      res.cookie("refreshToken", newrefreshToken, cookieOptions);
      req.user = refreshdecoded;
      next();
    }
    else{
      const accessdecoded = jwt.verify(accessToken, process.env.JWTACCESS_SECRET);
      console.log(accessdecoded.id);

      const user = await User.findOne({ _id: accessdecoded.id });
      console.log(user.email);

      if(!user){
        return res.status(401).json({
          msg: "Unauthorized access!",
          success: false,
        });
      }
      const newaccessToken = jwt.sign(
        //payload/id
        { id: user._id, role: user.role },
        //token secrate
        process.env.JWTACCESS_SECRET,
        //expiry
        { expiresIn: "24h" } //token will expire in 24 hours
      );

      const newrefreshToken = jwt.sign(
        //payload/id
        { id: user._id, role: user.role },
        //token secrate
        process.env.JWTREFRESH_SECRET,
        //expiry
        { expiresIn: "24h" } //token will expire in 24 hours
      );
      user.refreshToken = newrefreshToken;
      await user.save();

      const cookieOptions = {
        expires: new Date(Date.now() + 10 * 60 * 60 * 1000), //10 min
        httpOnly: true,
        secure: true,
      };
      res.cookie("accessToken", newaccessToken, cookieOptions);
      res.cookie("refreshToken", newrefreshToken, cookieOptions);
      req.user = accessdecoded;
      next();

    }

   
  } catch (error) {
    console.log("auth middleware failure");
    res.status(500).json({
      msg: "Internal Server error!",
      secure: false,
    });
  }
};
export { isLoggedIn };
