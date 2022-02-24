import { createUser } from "../db/scripts/users/populateTable.js";
import { getAllUsers, getUser } from "../db/scripts/users/readTable.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
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

  // Generate a random string (salt)
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create new user
  const newUser = await createUser({
    first_name,
    last_name,
    phone_number,
    email,
    hashPassword,
  });

  if (newUser.length > 0) {
    res.status(201).json({
      user_id: newUser[0].user_id,
      first_name: newUser[0].first_name,
      last_name: newUser[0].last_name,
      email: newUser[0].message,
      token: generateToken(newUser[0].user_id.toString()),
    });
  } else {
    res.status(400);
    throw new Error("Database error");
  }
});

export async function loginUser(req, res) {}

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
