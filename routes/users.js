import express from "express";
import { insertUser, readUser, readUsers } from "../controllers/users.js";

const router = express.Router();

router.route("/").get(readUsers).post(insertUser);
router.route("/:id").get(readUser);

export default router;
