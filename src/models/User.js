const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  question: [{
    questionuser: String,
    title: String,
    content: String,
    tag: String,
    timeStamp: {
      type: Date,
      default: Date.now,
    },
    usercomments: 
      {
        usercomment: String,
        comment: String,
        timeStamp: {
          type: Date,
          default: Date.now,
        },
      },
    view: Number,
    vote: Number
  }]
})

const User = mongoose.model("User", userSchema);

module.exports = User;
