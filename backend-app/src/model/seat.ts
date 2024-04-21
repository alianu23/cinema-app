import { Schema, model } from "mongoose";
import { type } from "os";

const seatSchema = new Schema({
  status: {
    type: String,
    require: true,
    enum: ["unavailable", "available"],
  },
  seatNumber: String,
  isNull: Boolean,
});

const Seat = model("Seat", seatSchema);

export default Seat;
