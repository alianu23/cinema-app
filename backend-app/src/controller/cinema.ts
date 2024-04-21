import { NextFunction, Request, RequestHandler, Response } from "express";
import Cinema from "../model/cinema";
import Customer from "../model/customer";
import MyError from "../utils/myError";

export const getCinemas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cinemas = await Cinema.find();
    res.status(201).json({ message: "Бүх кино олдлоо", cinemas });
  } catch (error) {
    console.log(error);
  }
};

export const createCinema = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("------------------->", req.body);

    const cinemas = await Cinema.findOneAndUpdate(
      { _id: req.body.cinemaId },
      {
        $push: {
          branches: {
            location: {
              address: {
                street: req.body.branchLocation,
              },
            },
            name: req.body.branchName,
            opening: `${req.body.opening}:00`,
            closing: `${req.body.closing}:00`,
            image: req.body.image,
          },
        },
      },
      { new: true }
    );
    console.log("aaabbbbbb-----", cinemas);

    res.status(201).json({ message: "new cinema created" });
    // }
  } catch (error) {
    next(error);
  }
};

export const deleteCinemas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("uneee-------------->", req.body.branchName.cinema);
    const cinema = await Cinema.findOne({
      _id: req.body.branchName.cinema._id,
    });
    console.log("------------------->", cinema);
    const updatedBranch = cinema?.branches.filter((branch: any) => {
      return branch._id.toString() !== req.body.branchName.branch._id;
    });
    const result = await Cinema.updateOne(
      { _id: req.body.branchName.cinema._id },
      {
        $set: {
          branches: updatedBranch,
        },
      }
    );
    const cinemas = await Cinema.find();
    console.log(cinemas);
    res.status(201).json({ message: " кино театр устлаа.", cinemas });
  } catch (error) {
    res.status(400).json({ message: "Delete cinema error" + error });
  }
};

export const putCinema = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    console.log("hehe----------------------->", body);
    const formData = body.formData;
    const branchId = body.branch;
    const cinema = await Cinema.findById(req.body.cinema._id);
    console.log("cinema", cinema?.branches);
    const branchess = cinema?.branches;
    const fndIndex = branchess
      ?.map((branch) => branch._id?.toString())
      .indexOf(body.branch) as number;
    // .indexOf(body.branch);
    console.log("index", fndIndex);
    console.log("branch", body.branch);

    // const updatedCinema = await Cinema.findOneAndReplace(
    //   { _id: req.body.cinema._id },
    //   {
    //     $set: {
    //       branchess:
    //     },
    //   },
    //   { returnNewDocument: true }
    // );
    // console.log("uurchilsun data", updatedCinema);

    res.status(201).json({ message: "Cinema updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
