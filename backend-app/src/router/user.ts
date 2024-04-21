import { Router } from "express";
import {
  deleteCustomer,
  getAllCustomer,
  getCustomer,
  loginUser,
  signup,
  updateCustomer,
} from "../controller/customer";

const router = Router();

router.route("/login").post(loginUser);
router.route("/signup").post(signup);
router.route("/customer").get(getCustomer);
router.route("/allcustomer").get(getAllCustomer);
router.route("/deletecustomer").post(deleteCustomer);
router.route("/updatecustomer").put(updateCustomer);

export default router;
