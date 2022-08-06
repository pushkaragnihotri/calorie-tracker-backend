function onSuccess(message, response = null) {
  this.send({
    status: 'Success',
    statusCode: 200,
    message,
    response,
  });

  return this;
}

function onError(message, error = null, errorCode = null, statusCode = 500) {
  this.status(statusCode).send({
    status: 'Error',
    error,
    errorCode,
    message,
  });
  return this;
}

module.exports = (req, res, next) => {
  res.success = onSuccess;
  res.error = onError;
  next();
};
