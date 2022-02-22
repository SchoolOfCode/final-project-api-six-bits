import query from "../../connection.js";

export async function createUser({
  first_name,
  last_name,
  phone_number,
  email,
  user_created,
}) {
  const result = await query(
    `INSERT INTO posts (first_name, last_name, phone_number, email, user_created) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
    [
      first_name,
      last_name,
      phone_number,
      email,
      user_created,
    ]
  );
  return result.rows;
}
