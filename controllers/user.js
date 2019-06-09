const bcrypt = require('bcrypt');
const UserModel = require('../models/mongoose/user');


class UserController {
  static get(request, response) {
    try {
      if (request.params.id === undefined) {
        UserModel.find({}, (error, users) => {
          if (error) {
            response.status(500).send('server error while fetching users');
          }
          response.status(200).send(users);
        });
      }
    } catch (error) {
      response.status(500).send('server error');
    }
  }

  static post(request, response) {
    try {
      const createQuery = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
        createdAt: Date.now(),
        modifiedAt: Date.now(),
      };
      UserModel.create(createQuery, (error, user) => {
        if (error) {
          return response.status(500).send('server error while creating user.');
        }
        return response.status(200).send(user);
      });
    } catch (error) {
      response.status(500).send('server error');
    }
  }

  static login(request, response) {
    try {
      const loginParams = {
        email: request.body.email,
        password: request.body.password,
      };

      UserModel.findOne({ email: loginParams.email }).then((user) => {
        bcrypt.compare(loginParams.password, user.password).then((res) => {
          if (res) {
            const generateJWT = user.generateJWT(loginParams.email);
            generateJWT.then((tokenResponse) => {
              response.status(200).send(tokenResponse);
            })
              .catch((error) => {
                response.status(500).send('server error');
              });
          } else {
            response.status(401).send('wrong credentials!');
          }
        })
          .catch(() => {
            response.status(500).send('server error');
          });
      });
    } catch (error) {
      response.status(500).send('server error');
    }
  }
}

module.exports = UserController;
