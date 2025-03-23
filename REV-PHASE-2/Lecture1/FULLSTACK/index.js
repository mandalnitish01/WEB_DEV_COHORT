import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:3000", //means kha se requedts aane dena caahta hu
    credentials: true,
    methods: [`GET`, `POST` , `PUT` , `DELETE` , `PATCH` , `OPTIONS`],
    allowedHeaders: [`Content-Type`, `Authorization`]
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static("public"));


const port = process.env.PORT || 3000;

app.get("/" , (req,res)=>{
    res.send("Hello World1");
})
app.get("/about" , (req,res)=>{
    res.send("About Us");
})
app.get("/contact" , (req,res)=>{
    res.send("contact Us");
})

//  console.log(process.env.PORT)

app.listen(process.env.PORT , ()=>{
    console.log(`App is listening on port ${port}`);
})