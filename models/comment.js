// models/comment.js

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Comment', commentSchema);
