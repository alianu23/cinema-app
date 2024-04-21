import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getMovies,
  updateMovie,
} from "../controller/movie";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, createMovie).get(getMovies);
router
  .route("/:movieId")
  .delete(authenticate, deleteMovie)
  .put(authenticate, updateMovie);

export default router;
