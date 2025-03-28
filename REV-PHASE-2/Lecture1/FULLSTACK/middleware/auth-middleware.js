// import jwt from "jsonwebtoken";
// export  const isLoggedIn = (req, res, next) => {
//   try {
//     console.log("token middleware :");
//     console.log(req.cookies);
//     let token = req.cookies?.token;

//     console.log("Token found", token ? "YES" : "NO");
//     // verify the token
//     if(!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Unauthorized",
//       });
//     }


//   const decoded =  jwt.verify(token , process.env.JWT_SECRET)
// console.log("decoded data :" , decoded);
// req.user = decoded;
// next();

//   } catch (error) {
//     console.log("Auth middleware failed" );
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",

//     })
//   }

//   next();
// };
