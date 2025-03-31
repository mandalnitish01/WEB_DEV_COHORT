import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); //this is apply whne we apload third party liberary into my code then 

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((req, res) => {
      console.log("Database connected successfully! enjoy with DB");
    })
    .catch((err) => {
      console.log("connecting error", err);
    });
};

export default db;
