import { createUser } from "../db/scripts/users/populateTable.js";
import { getAllUsers, getUser } from "../db/scripts/users/readTable.js";

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

export async function insertUser(req, res) {
  const newUser = await createUser(req.body);
  res.status(201).json({
    status: "success",
    message: "New user was created",
    payload: newUser,
  });
}
