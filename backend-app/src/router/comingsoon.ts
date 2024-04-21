import { Router } from "express";
import {
  createComingsoon,
  getComingsoon,
  deleteMovie,
  updateComing,
} from "../controller/comingsoon";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, createComingsoon).get(getComingsoon);
router
  .route("/:movieId")
  .delete(authenticate, deleteMovie)
  .put(authenticate, updateComing);

export default router;
