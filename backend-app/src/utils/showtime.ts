import { connectDB } from "../config/db";
import "dotenv/config";
import Showtime from "../model/showtime";

const fs = require("fs");
const path = require("path");

const uploadShowtime = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Өгөгдлийн санруу хуулж эхэлж байна");
    const fdata = fs.readFileSync(
      path.join(__dirname, "../../data/showtime.json"),
      {
        encoding: "utf8",
      }
    );
    const showtime = JSON.parse(fdata).times;
    await Showtime.deleteMany();
    await Showtime.insertMany(showtime);
    console.log("Өгөгдлийн санруу хуулж дууслаа");
  } catch (error) {
    console.log("error", error);
  } finally {
    process.exit();
  }
};

uploadShowtime();