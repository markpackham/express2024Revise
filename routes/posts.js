import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getPost,
  getPosts,
} from "../controllers/postController.js";
const router = express.Router();

// const logger = (req, res, next) => {
//   // Example of output
//   // GET http://localhost:8899/api/posts?limit=2
//   console.log(
//     `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
//   );
//   next();
// };

// Get all posts
// http://localhost:8899/api/posts
// Limit
// http://localhost:8899/api/posts?limit=2
// router.get("/", logger, (req, res) => {
router.get("/", getPosts);

// Get single post
// http://localhost:8899/api/posts/1
router.get("/:id", getPost);

// Create new post
router.post("/", createPost);

// Update / Put post
router.put("/:id", editPost);

// Delete post
router.delete("/:id", deletePost);

// Common JS way of doing it
//module.exports = router;
export default router;
