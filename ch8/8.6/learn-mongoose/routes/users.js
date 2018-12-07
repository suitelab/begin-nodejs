var express = require('express');
var User = require('../schemas/user');
var router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await new User({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married,
    });
    user.save();
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
