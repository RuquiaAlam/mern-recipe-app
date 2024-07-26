import express from "express";
import mongoose from "mongoose";
import cors from "cors"; //ser rule for communication between fron end and backend
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import {userRouter} from "./routes/users.js"
dotenv.config();
const MONGO_URI =
  "mongodb+srv://Ruquia:ERPInc_1826@cluster0.dnrbf0r.mongodb.net/mern-recipe-app?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
app.use("/auth", userRouter);
