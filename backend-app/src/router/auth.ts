import { Response, Router } from "express";

import { authenticate, isAuth } from "../middleware/auth";
import passport from "passport";
import { login, loginSuccess } from "../controller/auth";

const router = Router();

router
  .route("/google")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));

router.route("/google/callback").get(
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
    successRedirect: "/auth/google/success",
  })
);

router.route("/google/success").get(loginSuccess);

router.route("/login/success").get(login);

export default router;
