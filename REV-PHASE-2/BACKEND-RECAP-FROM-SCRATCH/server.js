import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './Utils/db.js'
import userRoutes from './routes/user.routes.js'
dotenv.config()
const app = express()

app.use(cors({
    origin: process.env.BASE_URL, // Adjust this to your frontend's URL
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies to be sent
    allowedHeaders: ['Content-Type', 'Authorization']
}))

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // console.log(req.body)
  res.send('Hello World from Express!')
})
//connect with database
db();

app.use(express.json())

//user routes
app.use('/api/v1/user', userRoutes);
// This is the main entry point of the application.
// It sets up the Express server, connects to the database, and defines routes for user-related operations.
// The server listens on the specified port and responds to requests at the root endpoint.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

