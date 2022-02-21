import express from "express";
import { getAllPosts } from "../models/posts.js";

const router = express.Router();

/* GET users listing. */
// router.get("/", async function (req, res, next) {
//   const users = await getAllUsers();

//   res.json({
//     success: true,
//     payload: users
//   });
// });

/* GET posts listing. */
router.get("/", (req, res, next) => {
  res.json({ msg: "GET working" });
});

/* POST post listing. */
router.post("/", (req, res) => {
  res.json({ msg: "POST working" });
});

export default router;
