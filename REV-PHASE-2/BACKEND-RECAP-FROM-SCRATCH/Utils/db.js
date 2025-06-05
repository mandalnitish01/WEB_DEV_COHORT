import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch(() => {
      console.log("Database connection failed");
    });
};
export default db;
