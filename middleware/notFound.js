const notFound = (req, res, next) => {
  const error = new Error("Oh no! Not found!");
  error.status = 404;
  next(error);
};

export default notFound;
