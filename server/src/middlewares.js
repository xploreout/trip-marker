const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`)
  res.status(404)
  //forward to error handler
  next(error); //usually next will pass to next middleware unless pass in 'error'
}

//general error handler
//error handler middleware !!!you MUST have 4 parameters
//eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode)
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'Bummer...': error.stack,
  })
}

module.exports = {
  notFound,
  errorHandler,
};