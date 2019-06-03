const jwt = require('jsonwebtoken');
const config = require('../config/config');


class AuthMiddleware {
  static isAuthenticated(req, res, next) {
    const token = req.header('Authorization');
    jwt.verify(
      token,
      config.get('appSecret'),
      (err) => {
        if (err) {
          return res.status(401).send('not authorized');
        }
        return next();
      },
    );
  }
}

module.exports = AuthMiddleware;
