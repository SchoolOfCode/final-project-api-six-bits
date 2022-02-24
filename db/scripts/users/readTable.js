import query from "../../connection.js";

export async function getAllUsers() {
  const result = await query(`SELECT * FROM users;`);
  return result.rows;
}

export async function getUser({ email }) {
  const result = await query(`SELECT * FROM users WHERE email = ($1)`, [email]);
  return result.rows;
}
