import mongoose from "mongoose";
// import Color from "colors";

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected");
  } catch (error) {
    console.log("error", error);
  }
};
