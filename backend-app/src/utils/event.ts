import { connectDB } from "../config/db";
import "dotenv/config";
import Event from "../model/event";

const fs = require("fs");
const path = require("path");

const upload = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Өгөгдлийн санруу хуулж эхэлж байна");
    const fdata = fs.readFileSync(
      path.join(__dirname, "../../data/event.json"),
      {
        encoding: "utf8",
      }
    );
    const events = JSON.parse(fdata).events;
    await Event.deleteMany();
    await Event.insertMany(events);
    console.log("Өгөгдлийн санруу хуулж дууслаа");
  } catch (error) {
  } finally {
    process.exit();
  }
};

upload();
