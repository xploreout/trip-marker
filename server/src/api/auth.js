const router = require('express').Router();
const User = require('../models/User')

const authSchema = require('../helper/authSchema');


router.post('/register', async (req, res) => {
  const {error} = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({email: req.body.email});

  if (emailExist) return res.status(400).send('Email already exists')
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  try {
    const savedUser = await user.save();
    res.send(savedUser)
  } catch (error) {
    res.status(400).send(error);
  }

})

router.post('/login', (req,res) => {
  res.send('Login...')
})

module.exports = router