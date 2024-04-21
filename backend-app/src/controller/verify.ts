import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";

import MyError from "../utils/myError";
import Customer from "../model/customer";
import { sendEmail } from "../utils/sendEmail";

export const sendEmailToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    const otp = Math.round(Math.random() * 1000)
      .toString()
      .padStart(4, "0");

    const findUser = await Customer.findOne({ email });

    if (!findUser) {
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    }
    const salt = await bcrypt.genSalt(10);

    findUser.otp = await bcrypt.hash(otp, salt);

    await findUser.save();

    await sendEmail({ email, otp });

    res.status(201).json({ message: "email yvla", otp });
  } catch (error) {
    next(error);
  }
};

export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp } = req.body;

    const findUser = await Customer.findOne({ email });

    if (!findUser) {
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    }
    const validOtp = await bcrypt.compare(otp, findUser?.otp);

    if (!validOtp) {
      throw new MyError("Код буруу байна", 401);
    }
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const bcryptedPass = (await bcrypt.hash(password, salt)) as string;
    await Customer.updateOne(
      { email: email },
      { $set: { password: bcryptedPass } }
    );

    res.status(200).json({ message: "Амжилттай пассворд солилоо" });
  } catch (error) {
    next(error);
  }
};
