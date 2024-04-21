import Movie from "../model/movie";
import { connectDB } from "../config/db";
import "dotenv/config";
import Comingsoon from "../model/comingsoon";

const fs = require("fs");
const path = require("path");

const coming = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Өгөгдлийн санруу хуулж эхэлж байна");
    const mdata = fs.readFileSync(
      path.join(__dirname, "../../data/comingsoon.json"),
      {
        encoding: "utf8",
      }
    );
    const films = JSON.parse(mdata).movies;
    await Comingsoon.deleteMany();
    await Comingsoon.insertMany(films);
    console.log("Өгөгдлийн санруу хуулж дууслаа");
  } catch (error) {
    console.log("Aldaaaa ==> ", error);
  } finally {
    process.exit();
  }
};

coming();
