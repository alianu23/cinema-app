import { connectDB } from "../config/db";
import "dotenv/config";
import Seat from "../model/seat";

const fs = require("fs");
const path = require("path");

const uploadSeat = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Өгөгдлийн санруу хуулж эхэлж байна");
    const fdata = fs.readFileSync(
      path.join(__dirname, "../../data/seat.json"),
      {
        encoding: "utf8",
      }
    );
    const seats = JSON.parse(fdata).seats;
    await Seat.deleteMany();
    await Seat.insertMany(seats);
    console.log("Өгөгдлийн санруу хуулж дууслаа");
  } catch (error) {
    console.log("error", error);
  } finally {
    process.exit();
  }
};

uploadSeat();
