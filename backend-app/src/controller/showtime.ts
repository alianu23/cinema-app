import { NextFunction, Request, Response } from "express";
import Showtime from "../model/showtime";
import Ticket from "../model/ticket";
import { IReq } from "../utils/interface";
import Customer from "../model/customer";
import MyError from "../utils/myError";

export const getTime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const times = await Showtime.find();
    res.status(201).json({ message: "Бүх цагууд олдлоо", times });
  } catch (error) {
    console.log(error);
  }
};

export const updateShowtime = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const findUser = await Customer.findById(req.user._id);
    if (!findUser) {
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    } else {
      if (req.body.ticket === undefined) {
        const showtime = await Showtime.create(req.body);
        res
          .status(200)
          .json({ message: "Amjilttai uzlegiin huvaari nemlee", showtime });
      }
      const ticket = await Ticket.findOne({ _id: req.body.ticket }).populate(
        "_id"
      );
      const length = ticket?.seatNumbers.length as number;

      for (let i = 0; i < length; i++) {
        await Showtime.updateOne(
          {
            _id: req.body.showtime._id,
          },
          {
            $set: {
              [`seats.${ticket?.seatNumbers[i].split("-").map(Number)[0] - 1}.${
                ticket?.seatNumbers[i].split("-").map(Number)[1] - 1
              }.status`]: "unavailable",
            },
          }
        );
      }
      res.status(200).json({
        message: "Amjilttai uzlegiin huvaari uurchilluu",
        ticket,
      });
    }
  } catch (error) {
    console.log("uzlegiin huvaari nemeh ued aldaa garav", error);
    next(error);
  }
};

export const createShowtime = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const findUser = await Customer.findById(req.user._id);
    if (!findUser) {
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    } else {
      // console.log("hi", req.body);
      const data = req.body.formData;
      const arr = data.date.split("-");
      const arr1 = arr[2].split("T");
      // console.log(arr, arr1);
      // console.log("month", arr[1]);
      // console.log("day", arr1[0]);
      // console.log("time", arr1[1]);
      const updatedSts = await Showtime.create({
        movie: data.movieId,
        cinema: data.cinemaId,
        branch: data.branch,
        screen: data.screen,
        startTime: {
          date: {
            month: arr[1],
            day: arr1[0],
          },
          time: arr1[1],
        },
      });
      res
        .status(200)
        .json({ message: "Амжилттай үзвэрийн хуваарь нэмлээ", updatedSts });
    }
  } catch (error) {
    next(error);
  }
};
