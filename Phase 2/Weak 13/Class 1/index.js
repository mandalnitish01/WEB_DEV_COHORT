
import express from "express";

const app = express();
app.get("/", function (req, res) {
  res.status(200).json({ msg: "home page" });
});
app.get("/about", (req, res) => {
    res.status(200).json({ msg: "about page" });
});
app.get('/contact' , (req,res)=>{
    res.status(200).json({ msg: "contact page" });

})

app.listen(8000, function (req, res) {
  console.log("server is listening on port", 8000);
});
