import Movie from "../model/movie";
import { connectDB } from "../config/db";
import "dotenv/config";

// import fs from "fs";
// import path from "path";

const fs = require("fs");
const path = require("path");

const upload = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Өгөгдлийн санруу хуулж эхэлж байна");
    const fdata = fs.readFileSync(
      path.join(__dirname, "../../data/film.json"),
      {
        encoding: "utf8",
      }
    );
    const films = JSON.parse(fdata).films;
    await Movie.deleteMany();
    await Movie.insertMany(films);
    console.log("Өгөгдлийн санруу хуулж дууслаа");
  } catch (error) {
  } finally {
    process.exit();
  }
};

upload();
