import { deletePost } from "../db/scripts/posts/deletePost.js";
import { createPost } from "../db/scripts/posts/populateTable.js";
import { getAllPosts, getUserPosts } from "../db/scripts/posts/readTable.js";
import asyncHandler from "express-async-handler";

export async function readPosts(req, res) {
  const data = await getAllPosts();
  res.status(200).json({
    status: "success",
    message: "Read all posts",
    payload: data,
  });
}

export const insertPost = asyncHandler(async (req, res) => {
  const { auth_id, title, quantity, description, location, price, date } =
    req.body;
  if (
    !auth_id ||
    !title ||
    quantity === undefined ||
    !description ||
    !location ||
    price === undefined ||
    !date
  ) {
    throw new Error("Input fields are missing.");
  }
  const data = await createPost(req.body);
  res.status(201).json({
    status: "success",
    message: "New post was created",
    payload: data,
  });
});

export async function readUserPosts(req, res) {
  const data = await getUserPosts(req.params.id);
  res.status(200).json({
    status: "success",
    message: "All user's posts",
    payload: data,
  });
}
export async function removePost(req, res) {
  const data = await deletePost(+req.params.id);
  res.status(200).json({
    status: "success",
    message: "Post deleted",
    payload: data,
  });
}
