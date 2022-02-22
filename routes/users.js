import express from "express";
import { insertUser, readUsers } from "../models/users.js";

const router = express.Router();

router.route("/").get(readUsers).post(insertUser);

export default router;
