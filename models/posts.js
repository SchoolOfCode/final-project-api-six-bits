import db from "../db/connection.js";

export async function getAllPosts() {
  const result = await db.query(`SELECT * FROM posts;`);
  return result.rows;
}
