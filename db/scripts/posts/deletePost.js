import query from "../../connection.js";

export async function deletePost(post_id) {
  const result = await query(
    `DELETE FROM posts WHERE post_id = ($1) RETURNING *`,
    [post_id]
  );
  return result.rows;
}
