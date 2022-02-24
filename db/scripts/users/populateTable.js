import query from "../../connection.js";

export async function createUser({
  first_name,
  last_name,
  phone_number,
  email,
  password,
  user_created,
}) {
  const result = await query(
    `INSERT INTO users (first_name, last_name, phone_number, email, password, user_created) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`,
    [first_name, last_name, phone_number, email, password, user_created]
  );
  return result.rows;
}
