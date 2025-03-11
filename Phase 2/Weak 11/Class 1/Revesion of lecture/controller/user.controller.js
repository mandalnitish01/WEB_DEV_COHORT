//response route url
const registeruser = (req,res)=>{
res.send("registerd successfull");
}
//response route url
const login = (req,res)=>{
    res.send("Login successfull!")
}

const dashboard = (req,res) =>{
    res.send("Admin Dashboard")
}

export {registeruser , login , dashboard};