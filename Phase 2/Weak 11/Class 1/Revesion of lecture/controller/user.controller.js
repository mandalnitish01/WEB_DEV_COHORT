//response route url
const registeruser = (req,res)=>{
// res.send("registerd successfull");
// console.log("Request Body:", req.body);  // Debugging log

const {name , email , password} = req.body;
// console.log(name ,"requested part") // Debugging log

if(!name || !email || !password)
{
    return res.status(400).json({
        messege : "All fields are required!",
    });
}
console.log(name)
// res.json({ message: "User registered successfully!" });
}



// //response route url
// const login = (req,res)=>{
//     res.send("Login successfull!")
// }

// const dashboard = (req,res) =>{
//     res.send("Admin Dashboard")
// }

// export {registeruser , login , dashboard};
export {registeruser};