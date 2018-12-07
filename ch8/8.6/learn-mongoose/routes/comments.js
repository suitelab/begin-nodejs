var express = require('express');
var Comment = require('../schemas/comment');
var router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const comments = await Comment.find({ commenter: req.params.id }).populate('commenter');
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const comment = await new Comment({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    comment.save();
    let result = await Comment.populate(comment, { path: 'commenter'});
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const result = await Comment.update({ _id: req.params.id }, { comment: req.body.comment });
        res.json(result);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.delete('/:id', async (req, res, next)=> {
    try {
        const result = await Comment.remove({ _id: req.params.id });
        res.json(result);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
