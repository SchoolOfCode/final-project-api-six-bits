import { createUser } from "../db/scripts/users/populateTable.js";
import { getAllUsers, getUser } from "../db/scripts/users/readTable.js";

export async function readUsers(req, res) {
  const data = await getAllUsers();
  res.status(200).json({
    status: "success",
    message: "Read all users",
    payload: data,
  });
}

export async function readUser(req, res) {
  const user = await getUser(req.body.auth_id);
  res.status(200).json({
    status: "success",
    message: "Read user",
    payload: user,
  });
}

export async function insertUser(req, res) {
  const data = await createUser(req.body);
  res.status(201).json({
    status: "success",
    message: "New user was created",
    payload: data,
  });
}
