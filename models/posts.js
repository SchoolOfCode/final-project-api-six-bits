import db from "../db/connection.js";

export async function getAllPosts() {
  const result = await db.query(`SELECT * FROM posts;`);
  return result.rows;
}

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
  const result = await db.query(
    `INSERT INTO posts (title, full_name, description, location, phone_number, email, free, price, date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
  return result;
}
