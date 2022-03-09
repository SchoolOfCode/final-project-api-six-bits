import { createUser } from "../db/scripts/users/populateTable.js";
import { getAllUsers, getUser } from "../db/scripts/users/readTable.js";
import asyncHandler from "express-async-handler";

export async function readUsers(req, res) {
  const users = await getAllUsers();
  res.status(200).json({
    status: "success",
    message: "Read all users",
    payload: users,
  });
}

export async function readUser(req, res) {
  const auth_id = req.params.id;
  const user = await getUser(auth_id);
  res.status(200).json({
    status: "success",
    message: "Read user",
    payload: user,
  });
}

export const insertUser = asyncHandler(async (req, res) => {
  const { auth_id, first_name, last_name, phone_number, email, user_created } =
    req.body;
  if (
    !auth_id ||
    !first_name ||
    !last_name ||
    !phone_number ||
    !email ||
    !user_created
  ) {
    res.status(400);
    throw new Error("Fields are missing.");
  }
  const newUser = await createUser(req.body);
  res.status(201).json({
    status: "success",
    message: "New user was created",
    payload: newUser,
  });
});
