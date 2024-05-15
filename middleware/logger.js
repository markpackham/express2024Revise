const logger = (req, res, next) => {
  // Example of output
  // GET http://localhost:8899/api/posts?limit=2
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

export default logger;
