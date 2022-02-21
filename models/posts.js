import query from "../db/connection.js";
import { getAllPosts } from "../db/scripts/posts/readTable.js";

export async function readPosts(req, res) {
  const data = await getAllPosts();
  res.status(200).json({
    status: "success",
    payload: data,
  });
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
  const result = await query(
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
