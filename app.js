import express from "express";
import path from "path";
// import dotenv from "doten
import jwt from "express-jwt";
import jwks from "jwks-rsa";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import postsRouter from "./routes/posts.js";
import usersRouter from "./routes/users.js";
// dotenv.config();

// Middleware
const app = express();
app.use(jwtCheck);

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Auth0
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-8t7r10j2.eu.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://dev-8t7r10j2.eu.auth0.com/api/v2/",
  issuer: "https://dev-8t7r10j2.eu.auth0.com/",
  algorithms: ["RS256"],
});

// Middleware
app.use(jwtCheck);
app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
