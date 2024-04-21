import { NextFunction, Request, Response } from "express";
import Movie from "../model/movie";
import MyError from "../utils/myError";
import Customer from "../model/customer";

export const getMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({ message: "Бүх kino олдлоо", movies });
  } catch (error) {
    console.log(error);
  }
};

// const getCloudinaryLink = async (name, image) => {
//   const { secure_url } = await cloudinary.uploader.upload(req.file.path);
//   return secure_url;
// };

export const createMovie = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  // console.log("REQ FILE +++++ ", req.file);
  try {
    const finduser = Customer.findById(req.user?._id);
    if (!finduser) {
      throw new MyError("Нэмэх үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      const newMovie = {
        title: req.body.title,
        poster: {
          vertical: req.body.vertical || "",
          lands: { land1: req.body.land1, land2: req.body.land2 },
        },
        movie_trailer: req.body.movie_trailer,
        duration: req.body.duration,
        releaseDate: req.body.releaseDate,
        director: req.body.director,
        genre: req.body.genre,
        synopsis: req.body.synopsis,
        cinemas: req.body.cinemas,
        movieType: req.body.movieType || "2D",
        cast: [
          { name: req.body.cast1name, img: req.body.cast1img },
          { name: req.body.cast2name, img: req.body.cast2img },
          { name: req.body.cast3name, img: req.body.cast3img },
        ],
        ticketPrice: {
          adult: req.body.adult,
          child: req.body.child,
        },
      };

      console.log("newMovie", newMovie);

      const movie = await Movie.create(newMovie);
      res.status(201).json({ message: "new event created", movie });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteMovie = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const finduser = Customer.findById(req.user?._id);
    console.log("MOVIEID =====", req.params.movieId);
    if (!finduser) {
      throw new MyError("Устгах үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      await Movie.findByIdAndDelete(req.params.movieId);
      res.status(201).json({ message: "movie deleted" });
    }
  } catch (error) {
    next(error);
  }
};

export const updateMovie = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    // Find the user by ID
    const finduser = Customer.findById(req.user?._id);

    const updateData = req.body;
    console.log("REQ BODY +++> ", updateData);

    const filteredData = Object.entries(updateData).reduce(
      (acc, [key, value]) => {
        if (value !== "") {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    console.log(filteredData);

    if (!finduser) {
      throw new MyError("Өөрчлөх үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      // Find and update the event by ID
      const newmovieData = await Movie.updateOne(
        { _id: req.params.movieId },
        { $set: filteredData }
      );

      console.log("UURCHILSUN DATA +++> ", newmovieData);

      res.status(201).json({ message: "updated movie", newmovieData });
    }
  } catch (error) {
    // Pass the error to the next middleware function
    next(error);
  }
};
