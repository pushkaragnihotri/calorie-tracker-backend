const jwt = require('jsonwebtoken');
const config = require('../../config');

async function authenticate(req, res, next) {
  try {
    const decoded = jwt.verify(req.headers.authorization, config.jwtSecret);
    res.locals.userDetails = decoded;

    if (res.locals.userDetails.role != 'Admin') {
      return res.error('Authentication failed!', null, null, 401);
    }
  } catch (error) {
    return res.error('Authorization failed!', null, null, 401);
  }
  next();
}

module.exports = authenticate;
