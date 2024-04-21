import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  poster: {
    vertical: {
      type: String,
      require: true,
    },
    lands: {
      land1: {
        type: String,
        require: true,
      },

      land2: {
        type: String,
        require: true,
      },
    },
  },
  movie_trailer: {
    type: String,
    require: true,
  },
  duration: Number,
  releaseDate: Date,
  director: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },

  synopsis: {
    type: String,
    maxlength: [500],
  },
  cinemas: [
    {
      type: Schema.ObjectId,
      ref: "Cinema",
    },
  ],
  movieType: {
    type: String,
    enum: ["2D", "3D", "IMAX", "LASER"],
    default: "2D",
  },
  cast: [
    {
      name: String,
      img: String,
    },
  ],
  ticketPrice: {
    adult: Number,
    child: Number,
  },
});

const Movie = model("Movie", movieSchema);

export default Movie;
