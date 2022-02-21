import express from "express";
import { insertPost, readPosts } from "../models/posts.js";

const router = express.Router();

router.route("/").get(readPosts).post(insertPost);

export default router;
