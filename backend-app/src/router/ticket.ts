import { Router } from "express";
import { createTicket, getTickets } from "../controller/ticket";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, createTicket).get(getTickets);

export default router;
