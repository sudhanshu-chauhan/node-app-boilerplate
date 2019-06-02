const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date },
  modifiedAt: { type: Date },
})
  .pre('save', function (next) {
    const currentUser = this;
    // hash plain text password before saving user
    bcrypt.hash(currentUser.password, saltRounds)
      .then((hash) => {
        currentUser.password = hash;
        next();
      })
      .catch(error => next(error));
  });

userSchema.methods.validatePassword = function (password) {
  bcrypt.compare(password, this.password, (err, result) => {
    if (err) {
      console.log(err);
      return false;
    }
    console.log(result);
    return result;
  });
};

userSchema.methods.generateJWT = function (email) {
  const tokenPayload = { email };
  jwt.sign(tokenPayload,
    'XXXX', // secret to be loaded from environment
    (error, token) => {
      if (error) {
        return { error };
      }
      return token;
    });
};

mongoose.model('User', userSchema);
module.exports = mongoose.model('User');
