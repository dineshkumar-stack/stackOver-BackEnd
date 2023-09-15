const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
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



module.exports = mongoose.model('Note', noteSchema);