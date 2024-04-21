import express, { Application, Request, Response } from "express";
import color from "colors";
import "dotenv/config";
import cors from "cors";

import { connectDB } from "./config/db";

import movie from "./router/movie";
import seats from "./router/seat";
import cinema from "./router/cinema";
import showtime from "./router/showtime";
import auth from "./router/auth";
import ticket from "./router/ticket";
import order from "./router/order";
import comingsoon from "./router/comingsoon";
import verify from "./router/verify";
import events from "./router/event";
import user from "./router/user";
import admin from "./router/loginAdmin";

import setupPassport from "./config/passport";
import passport from "passport";
import session from "express-session";
import errorHandler from "./middleware/errorHandler";

const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);

const app: Application = express();
const PORT = process.env.PORT || 5000;

setupPassport();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://cinema-app-client.vercel.app",
      "https://cinema-app-one.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use((req, res, next) => {
  next();
});
app.use(
  session({
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: false,
    secret: "secret-key",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth);
app.use("/admin", admin);
app.use("/user", user);
app.use("/seats", seats);
app.use("/movie", movie);
app.use("/comingsoon", comingsoon);
app.use("/event", events);
app.use("/cinema", cinema);
app.use("/showtime", showtime);
app.use("/ticket", ticket);
app.use("/order", order);
app.use("/verify", verify);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express Server");
});

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(color.rainbow(`Server started at ${PORT} `))
);
