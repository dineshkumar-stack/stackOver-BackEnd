const express = require('express');
const router = express.Router();
const userController = require('../controllers/questionController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/question', verifyToken, userController.getUserQuestion);
router.post('/question', verifyToken, userController.submitQuestion);
router.put('/userquestion/:id', verifyToken, userController.userQuestionSubmit);
router.get('/userquestion/:id', verifyToken, userController.getUserQuestionSubmit);


module.exports = router;