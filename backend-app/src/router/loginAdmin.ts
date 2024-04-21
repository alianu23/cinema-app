import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth";
import { loginAdmin } from "../controller/adminLogin";

const router = Router();

router.route("/login").post(authorize("admin"), loginAdmin);

export default router;
