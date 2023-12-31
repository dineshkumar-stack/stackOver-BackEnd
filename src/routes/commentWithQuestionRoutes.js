const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/comment', CommentController.getComment);
router.get('/comment/:id', verifyToken, CommentController.getCommentQuestion);
router.put('/comment/:id', verifyToken, CommentController.submitComment);

module.exports = router;