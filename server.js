import express from "express";
import path from "path";
// With Windows permissions cross-env needs to be installed to use the .env
// https://www.npmjs.com/package/cross-env
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";

const port = process.env.PORT || 8888;

const app = express();

// Setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(express.json());
// Handle form data
app.use(express.urlencoded({ extended: false }));

// Logger middleware
// Use logger on all requests
// shows things like GET http://localhost:8899/api/posts?limit=2
app.use(logger);

// Routes
app.use("/api/posts", posts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
