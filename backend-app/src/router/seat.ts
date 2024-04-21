import { Router } from "express";
import { createSeats, getSeats } from "../controller/seat";

const router = Router();

router.route("/").post(createSeats).get(getSeats);

export default router;
