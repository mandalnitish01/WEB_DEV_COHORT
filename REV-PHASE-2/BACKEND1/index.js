import express from "express";
import dotenv from "dotenv";
import db from "./utils/user.db.js";
import cors from 'cors'
import cookieParser from "cookie-parser";

//import all routes
import userRoutes from './Router/user.routes.js'



dotenv.config(); //iss bracket ke under me .env ka file path dete hai
const app = express();

app.use(cors({
  origin:process.env.BASE_URL,
  methods:['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders:['content-Type','Authorization'],
  credentials:true
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 8080; //localhost port

//for checking the route is working or not
app.get("/", (req, res) => {
  res.send("Check route is working or not!");
});



db(); //connecting with databas

//import all routes
app.use('/api/v1/user',userRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

