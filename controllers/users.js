import { createUser } from "../db/scripts/users/populateTable.js";
import { getAllUsers, getUser } from "../db/scripts/users/readTable.js";
import asyncHandler from "express-async-handler";

export async function readUsers(req, res) {
  const data = await getAllUsers();
  res.status(200).json({
    status: "success",
    message: "Read all users",
    payload: data,
  });
}

export const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, phone_number, email, password } = req.body;
  // Check if there isn't any field missing
  if (!first_name || !last_name || !phone_number || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // Check if is the user is already in the database
  const userFound = await getUser({ email });
  if (userFound.length > 0) {
    res.status(400);
    throw new Error("User already exists");
  }
  

  res.json({ msg: "ok" });
});

export async function loginUser(req, res) {}
