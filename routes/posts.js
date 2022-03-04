import express from "express";
import { insertPost, readPosts, readUserPosts } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(readPosts).post(insertPost);
router.route("/:id").get(readUserPosts);

export default router;
