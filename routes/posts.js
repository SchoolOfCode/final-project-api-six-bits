import express from "express";
import {
  insertPost,
  readPosts,
  readUserPosts,
  removePost,
} from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(readPosts).post(insertPost).delete(removePost);
router.route("/:id").get(readUserPosts);

export default router;
