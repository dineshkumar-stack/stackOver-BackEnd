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
    view: { type: Number, default: 0 }, // Add a default view count of 0
    vote: { type: Number, default: 0 }, // Add a default view count of 0
});

const Comments = mongoose.model('Comments', noteSchema);

module.exports = Comments;
