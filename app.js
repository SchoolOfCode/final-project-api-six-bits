import express from "express";
import path from "path";
// import dotenv from "dotenv";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import postsRouter from "./routes/posts.js";
import usersRouter from "./routes/users.js";
// dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  res.status(500).json({ "Error message": err.message });
});

export default app;
