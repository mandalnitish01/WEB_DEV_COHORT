import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((req, res) => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log("connecting error", err);
    });
};

export default db;
