console.log("🔥 INDEX.JS IS RUNNING");
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();

// ✅ DB CONNECTION
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed:", error.message);
  }
};

connectDB();


app.listen(3000, () => {
  console.log("App is running on port 3000");
});