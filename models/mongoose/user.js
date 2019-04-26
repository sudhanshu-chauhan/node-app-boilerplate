const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date },
  modifiedAt: { type: Date },
});

userSchema.pre('save', function (next) {
  const currentUser = this;
  // hash plain text password before saving user
  bcrypt.hash(currentUser.password, saltRounds)
    .then((hash) => {
      currentUser.password = hash;
      next();
    })
    .catch(error => next(error));
});

mongoose.model('User', userSchema);
module.exports = mongoose.model('User');
