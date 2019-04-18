const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  createdAt: { type: Date },
  modifiedAt: { type: Date },
});

mongoose.model('User', userSchema);
module.exports = mongoose.model('User');
