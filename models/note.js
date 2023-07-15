const mongoose = require('mongoose');


const url =
    `mongodb+srv://stardinesh4:Mankind@cluster0.u1r9krm.mongodb.net/StackOverDB?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

mongoose.connect(url)
    .then(result => {
        console.log('*******connected to MongoDB********');
    })
    .catch((error) => {
        console.log('Error connecting MongoDB', error.message);
    });

const noteSchema = new mongoose.Schema({
    content: String,
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
})