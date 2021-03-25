const router = require('express').Router();
const isVerified = require('../middleware/verifyToken');
const User = require('../models/User');

router.get('/', isVerified, async (req, res) => {
  const user = await User.findById(req.user);
  // res.send(req.user);
  res.send(user);
});

module.exports = router;
