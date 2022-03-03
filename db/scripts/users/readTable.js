import query from "../../connection.js";

export async function getAllUsers() {
  const result = await query(`SELECT * FROM users;`);
  return result.rows;
}

export async function getUser(auth_id) {
  const result = await query(`SELECT * FROM users WHERE auth_id = $(1);`, [
    auth_id,
  ]);
  return result.rows;
}
