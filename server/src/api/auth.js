const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const private = require('../middleware/verifyToken');

const { authSchema, authLogin } = require('../helper/authSchema');

router.post('/register', async (req, res) => {
  try {
    const validatedResult = await authSchema.validateAsync(req.body);
    console.log('validatedResult', validatedResult);
    const emailExist = await User.findOne({ email: validatedResult.email });
    if (emailExist)
      return res
        .status(400)
        .json({ message: { msgBody: 'Email arleady taken', msgError: true } });

    const usernameExist = await User.findOne({
      username: validatedResult.username,
    });
    if (usernameExist)
      return res.status(400).json({
        message: { msgBody: 'Username arleady taken', msgError: true },
      });

    const user = new User(validatedResult);
    const savedUser = await user.save();
    return res.status(201).json({
      message: { msgBody: 'Account successfully created', msgError: false },
    });
  } catch (error) {
    if (error.isJoi === true)
      return res.status(422).json({
        message: { msgBody: error.details[0].message, msgError: true },
      });
    res.status(400).send(error);
  }
});


router.post('/login', async (req, res) => {
  try {
    const validatedResult = await authLogin.validateAsync(req.body);
    const user = await User.findOne({ email: validatedResult.email });
    if (!user) return res.status(404).send('No user found');

    const validUser = await bcrypt.compare(req.body.password, user.password);
    if (!validUser) return res.send('Invalid login');

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET , {expiresIn: '5h'});
    return (
      res
        .header('auth-token', token)
        // .cookie('access_token', token, { httpOnly: true, sameSite: true })
        .status(200)
        .json({
          auth: true,
          email: req.body.email,
          token: token,
          result: validUser,
        })
    );
  } catch (error) {
    if (error.isJoi === true)
      return res.status(422).send(error.details[0].message);
    res.status(400).send(error);
  }
});

router.post('/logout', private, (req,res) => {
  return(
    res.setHeader('auth-token', null).json({ msg: 'Successfully logout'})
  )
});

module.exports = router;
