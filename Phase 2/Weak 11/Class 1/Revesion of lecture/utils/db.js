import mongoose  from "mongoose";
import dotenv from "dotenv"
// mongoose.connect(process.encv.MONGO_URL)

dotenv.config();

const db = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to database")
    })
    .catch((err)=>{
        console.log("Faield to fetch!")
    })
}
export default db;