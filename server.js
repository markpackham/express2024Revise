import express from "express";
import path from "path";
// With Windows permissions cross-env needs to be installed to use the .env
// https://www.npmjs.com/package/cross-env
const port = process.env.PORT || 8888;

import posts from "./routes/posts.js";

const app = express();

// Setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(express.json());
// Handle form data
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/posts", posts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
