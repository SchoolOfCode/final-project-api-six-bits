import query from "../../connection.js";

export async function deletePost({
  auth_id,
  title,
  description,
  location,
  free,
  price,
  date,
}) {
  const result = await query(
    `DELETE FROM posts USING users WHERE posts.user_id = users.user_id AND users.auth_id = ($1) AND posts.title = ($2) AND posts.description = ($3) AND posts.location = ($4) AND posts.free = ($5) AND posts.price = ($6) AND posts.date = ($7);`,
    [auth_id, title, description, location, free, price, date]
  );
}
