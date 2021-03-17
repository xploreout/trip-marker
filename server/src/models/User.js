
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    min: 6,
    max: 15,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    min: 3,
    max: 15,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true
  },
  blogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }]
})

UserSchema.pre('save', async function(next){
  try {
    if(!this.isModified('password')) 
      return next();

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
