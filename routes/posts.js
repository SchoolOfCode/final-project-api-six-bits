import express from "express";
import {
  insertPost,
  readPosts,
  readUserPosts,
  removePost,
} from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(readPosts).post(insertPost);
router.route("/:id").get(readUserPosts).delete(removePost);

export default router;
