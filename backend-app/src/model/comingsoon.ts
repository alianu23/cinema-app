import { Schema, model } from "mongoose";

const comingSoonSchema = new Schema({
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
  movie_trailer: {
    type: String,
    require: true,
  },
  synopsis: {
    type: String,
  },
  movieType: {
    type: String,
    enum: ["2D", "3D", "IMAX", "LASER"],
    require: true,
  },
  cast: [
    {
      name: String,
      img: String,
    },
  ],
});

const Comingsoon = model("Comingsoon", comingSoonSchema);

export default Comingsoon;
