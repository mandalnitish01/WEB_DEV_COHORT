import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); //this is used when we want to run external/third party library in your code

const db = ()=>{
    mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.log("connecting error", error);
  });
}

export default db;