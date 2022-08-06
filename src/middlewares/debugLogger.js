const debug = require('debug')('calorie-tracker-backend:http');

function logger(req, res, next) {
  debug(`${req.method} ${req.url}`);
  next();
}

module.exports = logger;
