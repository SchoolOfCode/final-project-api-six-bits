import { createPost } from "../db/scripts/posts/populateTable.js";
import { getAllPosts, getUserPosts } from "../db/scripts/posts/readTable.js";

export async function readPosts(req, res) {
  const data = await getAllPosts();
  res.status(200).json({
    status: "success",
    message: "Read all posts",
    payload: data,
  });
}

export async function insertPost(req, res) {
  const data = await createPost(req.body);
  res.status(201).json({
    status: "success",
    message: "New post was created",
    payload: data,
  });
}

export async function readUserPosts(req, res) {
  const data = await getUserPosts(req.params.id);

  res.status(200).json({
    status: "success",
    message: "All user's posts",
    payload: data,
  });
}
