// const mongoose = require('mongoose');

// const url =
//     `mongodb+srv://stardinesh4:Mankind@cluster0.u1r9krm.mongodb.net/StackOverDB?retryWrites=true&w=majority`;

// mongoose.set('strictQuery', false);

// mongoose.connect(url)
//     .then(result => {
//         console.log('connected to MongoDB');
//     })
//     .catch((error) => {
//         console.log('Error connecting MongoDB', error.message);
//     });

// const noteSchema = new mongoose.Schema({
//     content: String,
//     important: Boolean,
//     timeStamp: {
//         type: Date,
//         default: Date.now
//     }
// });

//Create model

// const Note = mongoose.model('Note', noteSchema, 'notes');

//Store to DB
//Create object

// const note = new Note({
//     content: "I have doubt on CSS Styling",
//     important: false,
// })
//store confirm,

// note.save()
//     .then(result => {
//         console.log("Data stored");
//         mongoose.connection.close();
//     });

//GEt all datas,

// Note.find({}, {})
//     .then((notes) => {
//         notes.forEach((note) => {
//             console.log(note);
//         });
//         mongoose.connection.close();
//     })

