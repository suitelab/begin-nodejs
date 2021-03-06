var express = require('express');
var User = require('../models').User;
var router = express.Router();

// Convert Promise to async/await
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married,
    });
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
