import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
  { id: 4, title: "Post Four" },
];

// Get all posts
// http://localhost:8899/api/posts
// Limit
// http://localhost:8899/api/posts?limit=2
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get single post
// http://localhost:8899/api/posts/1
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `That post was not found` });
  }
  res.status(200).json(post);
});

// Create new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ msg: `Please include a title` });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

// Common JS way of doing it
//module.exports = router;
export default router;
