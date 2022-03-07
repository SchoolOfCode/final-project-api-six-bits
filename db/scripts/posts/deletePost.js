import query from "../../connection.js";

export async function deletePost({ post_id }) {
  // const result = await query(
  //   `DELETE FROM posts USING users WHERE posts.user_id = users.user_id AND users.auth_id = ($1) AND posts.title = ($2) AND posts.quantity = ($3) AND posts.description = ($4) AND posts.location = ($5) AND posts.price = ($6) AND posts.date = ($7);`,
  //   [auth_id, title, quantity, description, location, price, date]
  // );

  const result = await query(`DELETE FROM posts WHERE post_id = ($1)`, [
    post_id,
  ]);
  return result.rows;
}
