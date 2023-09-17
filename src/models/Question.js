const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    questionuser: String,
    title: String,
    content: String,
    comments: String,
    tag: String,
    important: Boolean,
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;