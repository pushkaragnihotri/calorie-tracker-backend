function requestValidator(validationSchema) {
  return async function (req, res, next) {
    try {
      const validations = validationSchema.validate({ ...req.headers, ...req.body, ...req.query });
      if (validations.error) {
        const errMsg = validations.error.message;
        return res.error(errMsg, new Error(errMsg), 400, 400);
      }
      next();
    } catch (error) {
      res.error(error.message, error, 500);
    }
  };
}

module.exports = requestValidator;
