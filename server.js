const express = require("express");
const path = require("path");
// With Windows permissions cross-env needs to be installed to use the .env
// https://www.npmjs.com/package/cross-env
const port = process.env.PORT || 8888;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

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
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get single post
// http://localhost:8899/api/posts/1
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `That post was not found` });
  }
  res.status(200).json(post);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
