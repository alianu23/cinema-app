import { Router } from "express";
import {
  createShowtime,
  getTime,
  updateShowtime,
} from "../controller/showtime";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, updateShowtime).get(getTime);
router.route("/new").post(authenticate, createShowtime);

export default router;
