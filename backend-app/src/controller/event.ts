import { NextFunction, Request, Response } from "express";
import Event from "../model/event";
import Customer from "../model/customer";
import MyError from "../utils/myError";

export const getEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const events = await Event.find();
    res.status(200).json({ message: "Бүх event олдлоо", events });
  } catch (error) {
    console.log(error);
  }
};

export const createEvent = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Body oor orj irsen === >", req.body);
    const finduser = Customer.findById(req.user?._id);
    if (!finduser) {
      throw new MyError("Нэмэх үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      const newEvent = req.body;

      console.log("newEvent", newEvent);

      const event = await Event.create(newEvent);
      console.log("SHineer uussen ===> ", event);
      res.status(201).json({ message: "new event created", event });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const finduser = Customer.findById(req.user?._id);
    if (!finduser) {
      throw new MyError("Устгах үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      await Event.findByIdAndDelete(req.params.eventId);
      res.status(201).json({ message: "deleted event" });
    }
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (
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

    if (!finduser) {
      throw new MyError("Өөрчлөх үйлдлийг хийхийн тулд нэвтрэх хэрэгтэй", 400);
    } else {
      // Find and update the event by ID
      const newEventData = await Event.updateOne(
        { _id: req.params.eventId },
        { $set: filteredData }
      );

      console.log("UURCHILSUN DATA +++> ", newEventData);

      res.status(201).json({ message: "updated event", newEventData });
    }
  } catch (error) {
    // Pass the error to the next middleware function
    next(error);
  }
};
