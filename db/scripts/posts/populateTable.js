import query from "../../connection.js";

export async function createPost({
  user_id,
  title,
  description,
  location,
  free,
  price,
  date,
}) {
  const result = await query(
    `INSERT INTO posts (user_id, title, description, location, free, price, date) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;`,
    [
      user_id,
      title,
      description,
      location,
      free,
      price,
      date,
    ]
  );
  return result.rows;
}
