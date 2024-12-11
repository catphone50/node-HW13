import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
