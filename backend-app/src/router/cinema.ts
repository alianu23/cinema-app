import { Router } from "express";
import {
  createCinema,
  getCinemas,
  deleteCinemas,
  putCinema,
} from "../controller/cinema";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(createCinema).get(getCinemas).put(putCinema);
router.route("/delete").post(deleteCinemas);

export default router;
