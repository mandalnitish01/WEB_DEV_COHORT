import User from "../model/User.model";

//response route url
const registeruser = async (req, res) => {
  // res.send("registerd successfull");
  // console.log("Request Body:", req.body);  // Debugging log

  const { name, email, password } = req.body;
  // console.log(name ,"requested part") // Debugging log

  if (!name || !email || !password) {
    return res.status(400).json({
      messege: "All fields are required!",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        messege: "User already exist"
      })
    }

    const user = await User.create({
      name,
      email,
      password
    })
    if (!user) {
      return res.status(400).json({
        messege: "User not registered",
      });
    }
  } catch (error) {}

  // console.log(email)
  // res.json({ message: "User registered successfully!" });
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
