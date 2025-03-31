import express from "express";
import dotenv from "dotenv";
import db from "./utils/user.db.js";
// import userroutes from './Router/user.routes.js'
dotenv.config(); //iss bracket ke under me .env ka file path dete hai
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080; //localhost port

//import all routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/n", (req, res) => {
  res.send("Hello N");
});
app.get("/i", (req, res) => {
  res.send("Hello I");
});
// app.use('/api/v1/user',userroutes)

db(); //connecting with databas
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
