import express from "express";
import { registerUser, loginUser } from "../controllers/users.js";

const router = express.Router();

// router.route("/").get(readUsers).post(insertUser);

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
