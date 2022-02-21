import express from "express";
import { insertPost, readPosts } from "../models/posts.js";

const router = express.Router();

/* GET posts listing. */
router.get("/", readPosts);

/* POST post listing. */
router.post("/", insertPost);

export default router;
