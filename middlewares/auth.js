const jwt = require('jsonwebtoken');


class AuthMiddleware {
  static isAuthenticated(req, res, next) {
    const token = req.header('Authorization');
    jwt.verify(token, 'somethingisnotright#', (err, decoded) => {
      if (err) {
        return res.status(401).send('not authorized');
      }
      return next();
    });
  }
}

module.exports = AuthMiddleware;
