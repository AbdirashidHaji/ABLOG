const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Get comments for a post
router.get('/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add comment (protected)
router.post('/', async (req, res) => {
  const { postId, userId, text } = req.body;
  
  try {
    const comment = new Comment({ postId, userId, text });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;