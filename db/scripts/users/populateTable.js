import query from "../../connection.js";

export async function createUser({
  auth_id,
  first_name,
  last_name,
  phone_number,
  user_created,
}) {
  const result = await query(
    `INSERT INTO users (auth_id, first_name, last_name, phone_number, email, user_created) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`,
    [auth_id, first_name, last_name, phone_number, email, user_created]
  );
  return result.rows;
}
