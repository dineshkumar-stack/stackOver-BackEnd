const express = require('express');
const router = express.Router();
const userController = require('../controllers/questionController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/question', verifyToken, userController.getUserComments);
router.post('/question', verifyToken, userController.submitComments);
router.post('/userquestion', verifyToken, userController.userQuestionSubmit);

module.exports = router;