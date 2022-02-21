import query from "../../connection.js";

export async function createPost({
  title,
  full_name,
  description,
  location,
  phone_number,
  email,
  free,
  price,
  date,
}) {
  const result = await query(
    `INSERT INTO posts (title, full_name, description, location, phone_number, email, free, price, date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;`,
    [
      title,
      full_name,
      description,
      location,
      phone_number,
      email,
      free,
      price,
      date,
    ]
  );
  return result.rows;
}
