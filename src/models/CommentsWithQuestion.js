const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    questionuser: String,
    title: String,
    content: String,
    tag: String,
    timeStamp: {
        type: Date,
        default: Date.now,
    },
    usercomments: [
        {
            usercomment: String,
            comment: String,
            timeStamp: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    view: Number,
    vote: Number
});

const Comments = mongoose.model('Comments', noteSchema);

module.exports = Comments;
