import express from "express";
import { insertUser, readUsers } from "../controllers/users.js";

const router = express.Router();

router.route("/").get(readUsers).post(insertUser);

export default router;
