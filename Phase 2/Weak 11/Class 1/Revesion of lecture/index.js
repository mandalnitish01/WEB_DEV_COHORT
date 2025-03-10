// const express = require('express')
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js" //.js kabhi kabhi lagta hai bss isse lagane se configration set ho jatahai

const app = express()
dotenv.config() //it holds the senstive materials means important information

app.use(cors({ //used for send the request to the particular server. koie or nhi bhej sakta hai. 
    //particular server se baat karne ke liye hmm use karte hai  
    // origin: "http://localhost:3000/niraj", //kha se request aane dena caahta hu mai
    origin: process.env.BASE_URL, 
    methods: ['GET' , 'POST' , 'DELETE' , 'OPTIONS'],
    allowedHeaders :['Content-Type' , 'Authorization'],

}));
app.use(express.json());
app.use(express.urlencoded({extended:true})); //handle url encoded ex:- search :- nitish%20kr  %20 is the space so in express.urlencoded user to solve this


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/nitish" , (req,res)=>{ 
    res.send("Hyy Nitish!")
})
//if you give the route then you myst need to add slace before write the route name
app.get("/niraj" , (req,res)=>{ //route start with /npm i dotenv
    res.send("Hyy niraj!")
})

// console.log(process.env.PORT)
db();
app.listen(port, () => { //port is used for render the particular page. means route krte hai.
  console.log(`Example app listening on port ${port}`)
})