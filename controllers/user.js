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
}

module.exports = UserController;
