import express from "express";
import path from "path";

import { fileURLToPath } from "url";

// With Windows permissions cross-env needs to be installed to use the .env
// https://www.npmjs.com/package/cross-env
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const port = process.env.PORT || 8888;

const app = express();

// Setup static folder
// Old way using Common Js
//app.use(express.static(path.join(__dirname, "public")));

// Modern way to handle static folder
// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

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

// Routes that do not exist
app.use(notFound);

// Error handler (put below routes to avoid conflicts)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
