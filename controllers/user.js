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
}

module.exports = UserController;
