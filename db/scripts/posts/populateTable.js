import query from "../../connection.js";

export async function createPost({
  auth_id,
  title,
  description,
  location,
  free,
  price,
  date,
}) {
  const foundUserID = await query(
    `SELECT users.user_id FROM users LEFT OUTER JOIN posts ON users.user_id = posts.user_id WHERE auth_id = ($1) LIMIT 1;
  `,
    [auth_id]
  );
  const user_id = foundUserID.rows[0].user_id;
  const result = await query(
    `INSERT INTO posts (user_id, title, description, location, free, price, date) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;`,
    [user_id, title, description, location, free, price, date]
  );
  return result.rows;
}
