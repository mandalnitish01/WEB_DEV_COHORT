const registeruser = async (req, res) => {
  res.send("registered");
};
const verifyuser = async (req, res) => {
    res.send("verified");
  };
const loginuser = async (req, res) => {
    res.send("logined");
  };
  

export {registeruser,verifyuser,loginuser}