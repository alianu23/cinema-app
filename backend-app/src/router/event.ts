import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "../controller/event";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, createEvent).get(getEvents);
router
  .route("/:eventId")
  .delete(authenticate, deleteEvent)
  .put(authenticate, updateEvent);

export default router;
