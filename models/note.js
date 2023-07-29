const mongoose = require('mongoose');


const url = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);

mongoose.connect(url)
    .then(result => {
        console.log('*******connected to MongoDB********');
    })
    .catch((error) => {
        console.log('Error connecting MongoDB', error.message);
    });

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


//cleanup__
noteSchema.set('toJSON', {
    transform: (document, returnObject) => {
        returnObject.id = returnObject._id.toString()
        delete returnObject._id
        delete returnObject.__v
    }
});

module.exports = mongoose.model('Note', noteSchema);