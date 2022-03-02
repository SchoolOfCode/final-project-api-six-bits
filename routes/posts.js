import express from "express";
import { insertPost, readPosts } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(readPosts).post(insertPost);

export default router;
