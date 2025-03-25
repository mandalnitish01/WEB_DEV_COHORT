import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// import all routes
import userRoute from "./Routes/User-route.js";

app.use(cors({
    origin: process.env.BASE_URL, //means kha se requedts aane dena caahta hu
    credentials: true,
    methods: [`GET`, `POST` , `PUT` , `DELETE` , `PATCH` , `OPTIONS`],
    allowedHeaders: [`Content-Type`, `Authorization`]
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
// app.use(express.static("public"));


const port = process.env.PORT || 5000;

db();

app.use("/api/v1/user" , userRoute)
app.listen(process.env.PORT , ()=>{
    console.log(`App is listening on port ${port}`);
})
