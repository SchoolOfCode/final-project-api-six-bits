import query from "../../connection.js";

export async function getAllPosts() {
  const result = await query(`SELECT * FROM posts FULL JOIN users ON posts.user_id = users.user_id WHERE auth_id = ($1)`,
  [auth_id]);
  
  return result.rows;
}

export async function getUserPosts(auth_id) {
  const data = await query(
    `SELECT * FROM users FULL JOIN posts ON users.user_id = posts.user_id WHERE auth_id = ($1)`,
    [auth_id]
  );

  return data.rows;
}