import { createUser } from "../db/scripts/users/populateTable.js";
import { getAllUsers } from "../db/scripts/users/readTable.js";

export async function readUsers(req, res) {
  const data = await getAllUsers();
  res.status(200).json({
    status: "success",
    message: "Read all users",
    payload: data,
  });
}

export async function registerUser(req, res) {
  // Check if the fields are not empty
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // Check if user already exists
  // const data = await createUser(req.body);
  // res.status(201).json({
  //   status: "success",
  //   message: "New user was created",
  //   payload: data,
  // });
}

export async function loginUser(req, res) {}
