import express from "express";
import { createPost, readPosts } from "../models/posts.js";

const router = express.Router();

/* GET posts listing. */
router.get("/", readPosts);

/* POST post listing. */
router.post("/", async (req, res) => {
  const result = await createPost(req.body);
  res.json({
    success: true,
    message: `Post created: ${req.body.title}`,
  });
});

export default router;
