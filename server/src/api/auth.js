const router = require('express').Router();
const bcrypt = require('bcryptjs')
const User = require('../models/User');
const jwt = require('jsonwebtoken')

const {authSchema, authLogin} = require('../helper/authSchema');

router.post('/register', async (req, res) => {
  try {
    const validatedResult = await authSchema.validateAsync(req.body);
    
    const emailExist = await User.findOne({email: validatedResult.email});
    if (emailExist) return res.status(400).send('Email already exists');

    const user = new User(validatedResult);
    const savedUser =  await user.save();
    res.send(savedUser)
  } catch (error){ 
    if(error.isJoi === true) 
      return res.status(422).send(error.details[0].message)
    res.status(400).send(error);
  }
})

router.post('/login', async (req,res) => {
  try {
    const validatedResult = await authLogin.validateAsync(req.body)
    
    const user = await User.findOne({email: validatedResult.email })
 
    if (!user) return res.status(404).send('No user found');

    const validUser = await bcrypt.compare(req.body.password, user.password)
    if (!validUser) return res.send('Invalid login')

    const token=jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send('Login')
  } catch (error) {
    if(error.isJoi === true) 
      return res.status(422).send(error.details[0].message)
    res.status(400).send(error);
  }
})

module.exports = router