require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());
const db = require("./src/config/db");

////////////////////////WWWWWWWWWWWWWWWWWWWWWW////////////
// const Note = mongoose.model('Note', noteSchema, 'notes');

//Create model
const authRoutes = require('./src/routes/authRoutes')
const questionRouter = require('./src/routes/questionRoutes')

app.use("/api",authRoutes);
app.use("/api", questionRouter)




// //end points
// app.get('/', (req, res) => {
//     res.send('Hello!');
// })

// //Fetch all the resource in the note collection
// app.get('/api/notes', (req, res) => {
//     Note.find({}, {})
//         .then((notes) => {
//             res.json(notes);
//         })

// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`*****Server Running on Port ${PORT}*****`);
});


//Create a new date
// app.post('/api/notes', (req, res) => {
//     //prepare on obj to DB
//     const note = new Note(req.body);
//     //storing the new obj DB
//     note.save()
//         .then(result => {
//             res.status(201).json({ message: '$$$$Note Create done$$$$' })
//         })
// });

// //fetching a data resource,
// app.get('/api/notes/:id', (req, res) => {
//     const id = req.params.id;
//     Note.findById(id)
//         .then((note) => {

//             if (!note) {
//                 return res.status(404).json({ error: 'Note Not Found' });
//             }

//             res.json(note)
//         })
//         .catch((error) => {
//             res.status(500).json({ error: 'Error on connection' })
//         })
// })


// //Delecting Data
// app.delete('/api/notes/:id', (req, res) => {
//     //get ID data
//     const id = req.params.id

//     Note.findByIdAndDelete(id)
//         .then((deleteNote) => {

//             if (!deleteNote) {
//                 return res.status(404).json({ error: 'Note not found' })
//             }
//             res.status(204).json({ message: 'Notes delected successfully' })
//         })
//         .catch((error) => {
//             res.status(500).json({ error: 'Internal server error' })
//         })

// })

// //Put Request// replaces
// app.put('/api/notes/:id', (req, res) => {
//     //get ID data
//     const id = req.params.id
//     const noteToPut = req.body;

//     Note.findByIdAndUpdate(id, noteToPut)
//         .then((updatedNote) => {

//             if (!updatedNote) {
//                 return res.status(404).json({ error: 'Please check replace not done properly' })
//             }
//             res.json(updatedNote);
//         })
//         .catch((error) => {
//             res.status(500).json({ error: "Internal server error" })
//         })

// })


