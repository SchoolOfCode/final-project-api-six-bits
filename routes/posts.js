import express from "express";
import { getAllPosts, createPost } from "../models/posts.js";

const router = express.Router();

/* GET posts listing. */
router.get("/", async (req, res) => {
  const posts = await getAllPosts();
  res.json({
    success: true,
    payload: posts,
  });
});

/* POST post listing. */
router.post("/", async (req, res) => {
  const result = await createPost(req.body);
  res.json({
    success: true,
    message: `Post created: ${req.body.title}`,
  });
});

export default router;
