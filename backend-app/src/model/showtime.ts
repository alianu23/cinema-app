import { Schema, model } from "mongoose";

const showtimeSchema = new Schema({
  movie: {
    type: Schema.ObjectId,
    ref: "Movie",
    require: true,
  },
  cinema: {
    type: Schema.ObjectId,
    ref: "Cinema",
  },
  branch: {
    type: String,
    require: true,
  },
  screen: {
    type: String,
    require: true,
  },
  startTime: {
    date: {
      month: { type: String, require: true },
      day: { type: String, require: true },
    },
    time: { type: String, require: true },
  },
  seats: {
    type: Array,
    default: [
      [
        {
          status: "available",
          seatNumber: "1-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "1-2",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "1-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "1-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "1-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "1-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "1-7",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "1-8",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "1-9",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "1-10",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "1-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "1-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "1-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "1-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "1-15",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "1-16",
          isNull: "true",
        },
      ],
      [
        {
          status: "available",
          seatNumber: "2-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "2-2",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-7",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "2-8",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "2-9",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "2-10",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "2-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-15",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "2-16",
          isNull: "true",
        },
      ],
      [
        {
          status: "available",
          seatNumber: "3-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "3-2",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-7",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "3-8",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "3-9",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "3-10",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "3-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-15",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "3-16",
          isNull: "true",
        },
      ],
      [
        {
          status: "available",
          seatNumber: "4-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "4-2",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-7",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "4-8",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "4-9",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "4-10",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "4-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-15",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "4-16",
          isNull: "true",
        },
      ],
      [
        {
          status: "available",
          seatNumber: "5-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "5-2",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-7",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "5-8",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "5-9",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "5-10",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "5-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-15",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "5-16",
          isNull: "true",
        },
      ],
      [
        {
          status: "available",
          seatNumber: "6-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "6-2",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-7",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "6-8",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "6-9",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "6-10",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "6-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-15",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "6-16",
          isNull: "true",
        },
      ],
      [
        {
          status: "available",
          seatNumber: "7-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "7-2",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-7",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "7-8",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "7-9",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "7-10",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "7-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-15",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "7-16",
          isNull: "true",
        },
      ],
      [
        {
          status: "available",
          seatNumber: "8-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "8-2",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-7",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "8-8",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "8-9",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "8-10",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "8-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-15",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "8-16",
          isNull: "true",
        },
      ],
      [
        {
          status: "available",
          seatNumber: "9-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "9-2",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-7",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-8",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-9",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-10",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-15",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "9-16",
          isNull: "true",
        },
      ],
      [
        {
          status: "available",
          seatNumber: "10-1",
          isNull: "true",
        },
        {
          status: "available",
          seatNumber: "10-2",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-3",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-4",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-5",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-6",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-7",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-8",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-9",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-10",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-11",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-12",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-13",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-14",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-15",
          isNull: "false",
        },
        {
          status: "available",
          seatNumber: "10-16",
          isNull: "true",
        },
      ],
    ],
  },
});

const Showtime = model("Showtime", showtimeSchema);

export default Showtime;
