// const express = require('express')
import express from "express"
import dotenv from "dotenv"
import cord from "cors"


const app = express()
dotenv.config()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/nitish" , (req,res)=>{
    res.send("Hyy Nitish!")
})
//if you give the route then you myst need to add slace before write the route name
app.get("/niraj" , (req,res)=>{ //route start with /npm i dotenv
    res.send("Nyy niraj!")
})

// console.log(process.env.PORT)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})