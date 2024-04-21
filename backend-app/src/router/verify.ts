import { Router } from "express";
import {
  changePassword,
  sendEmailToUser,
  verifyOtp,
} from "../controller/verify";

const router = Router();

router.route("/send-email").post(sendEmailToUser);
router.route("/otp").post(verifyOtp);
router.route("/changepassword").put(changePassword);

export default router;
