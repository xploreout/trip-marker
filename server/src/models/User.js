
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true,
  min: 6,
  max: 250

}
const UserSchema = new Schema({
  name: requiredString,
  email: {
    type: String,
    required: true
  },
  password: requiredString,
  date: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
