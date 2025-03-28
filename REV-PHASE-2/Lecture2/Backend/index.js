import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnect from './utils/db.js'
import userRoutes from './routes/user.routes.js'
dotenv.config()

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({

    origin: process.env.BASE_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders : ['Content-Type', 'Authorization'],
}))


//check server is up or not
app.get('/', (req, res) => {
  res.send('Hello World! kaise hoo')
})

// import all routes 
app.use("/api/v1/user" , userRoutes)

dbConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})