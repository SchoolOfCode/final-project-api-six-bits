export function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode ? res.statusCode : 500;
  //   console.error(err.stack);
  res.status(500).json({ message: err.message });
}
