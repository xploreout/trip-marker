const router = require('express').Router();
const User = require('../models/User')

const authSchema = require('./authSchema');


router.post('/register', async (req, res) => {
  try {
    const result = await authSchema.validateAsync(req.body);
    
    const emailExist = await User.findOne({email: result.email});
    if (emailExist) return res.status(400).send('Email already exists');

    const user = new User(result);
    const savedUser =  await user.save();
    res.send(savedUser)
  } catch (error){ 
    if(error.isJoi === true) 
      return res.status(422).send(error.details[0].message)
    res.status(400).send(error);
  }
})

router.post('/login', async (req,res) => {
  const {error} = await authLogin.validateAsync(req.body)
res.send(error)
  //if (error) return res.status(400).send(error.details[0].message);

  try {
    res.send('login')
  } catch (error) {
    res.status(400).send(error)
  }
  // const user = await User.findOne({email: req.body.email});
  // if (!user) return res.status(400).send('Email or password is incorrect');

  // const validUser = await bcrypt.compare(user.password, req.body.password);

  // if (!validUser) return res.send('Invalid login')

  // res.send('Login')

})

module.exports = router