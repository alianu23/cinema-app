import { NextFunction, Request, Response } from "express";
import Customer from "../model/customer";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import generateToken from "../utils/generateToken";

export const loginAdmin = async (req: Request, res: Response) => {
  const { userEmail, userPassword } = req.body;

  try {
    const existUser = await Customer.findOne({ email: userEmail })
      .select("+password")
      .populate({ path: "tickets", populate: { path: "movieId" } })
      .lean();

    if (!existUser)
      return res.status(400).json({ message: `${userEmail} is not exist` });

    const isValid = await bcrypt.compare(
      userPassword,
      existUser.password as string
    );

    if (!isValid)
      return res
        .status(400)
        .json({ message: `Email or password is incorrect` });

    const token = generateToken(existUser._id.toString());
    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .json({
        message: "success",
        user: existUser,
        token,
      });
  } catch (error: any) {
    res.status(500).json({ message: `${error.message}` });
  }
};
