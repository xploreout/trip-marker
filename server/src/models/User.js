
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')


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

UserSchema.pre('save', async function(next){
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt)

    this.password = hashedPassword;
    next();
  }
  catch (error){
    next(error)
  }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
