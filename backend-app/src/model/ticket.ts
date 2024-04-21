import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
  movieId: {
    type: Schema.ObjectId,
    require: true,
    ref: "Movie",
  },
  cinemaId: {
    type: Schema.ObjectId,
    require: true,
    ref: "Cinema",
  },
  branch: {
    type: String,
  },
  screen: {
    type: String,
    require: true,
  },
  seatNumbers: [],
  adultCount: {
    type: Number,
    require: true,
  },
  kidsCount: {
    type: Number,
    require: true,
  },
  startTime: {
    date: {
      month: String,
      day: String,
    },
    time: String,
  },
});

const Ticket = model("Ticket", ticketSchema);

export default Ticket;
