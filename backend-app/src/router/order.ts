import { Router } from "express";
import {
  createOrder,
  getAllOrder,
  invalidTicketDelete,
} from "../controller/order";
import { authenticate } from "../middleware/auth";

const router = Router();

router
  .route("/")
  .post(authenticate, createOrder)
  .get(authenticate, getAllOrder);
router.route("/isvalid").post(authenticate, invalidTicketDelete);
export default router;
