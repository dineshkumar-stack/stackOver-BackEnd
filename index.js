require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());
var bcrypt = require('bcryptjs');

////////////////////////WWWWWWWWWWWWWWWWWWWWWW////////////
// const Note = mongoose.model('Note', noteSchema, 'notes');
//Create model
const Note = require('./models/note')
const User = require('./models/userModels')

const userRouter = require('./routers/user.js')


app.use("/user", userRouter)



//end points
app.get('/', (req, res) => {
    res.send('Hello!');
})

//Fetch all the resource in the note collection
app.get('/api/notes', (req, res) => {
    Note.find({}, {})
        .then((notes) => {
            res.json(notes);
        })

})

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`*****Server Running on Port ${PORT}*****`);
});


//Create a new date
app.post('/api/notes', (req, res) => {
    //prepare on obj to DB
    const note = new Note(req.body);
    //storing the new obj DB
    note.save()
        .then(result => {
            res.status(201).json({ message: '$$$$Note Create done$$$$' })
        })
});

//fetching a data resource,
app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    Note.findById(id)
        .then((note) => {

            if (!note) {
                return res.status(404).json({ error: 'Note Not Found' });
            }

            res.json(note)
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error on connection' })
        })
})


//Delecting Data
app.delete('/api/notes/:id', (req, res) => {
    //get ID data
    const id = req.params.id

    Note.findByIdAndDelete(id)
        .then((deleteNote) => {

            if (!deleteNote) {
                return res.status(404).json({ error: 'Note not found' })
            }
            res.status(204).json({ message: 'Notes delected successfully' })
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' })
        })

})

//Put Request// replaces
app.put('/api/notes/:id', (req, res) => {
    //get ID data
    const id = req.params.id
    const noteToPut = req.body;

    Note.findByIdAndUpdate(id, noteToPut)
        .then((updatedNote) => {

            if (!updatedNote) {
                return res.status(404).json({ error: 'Please check replace not done properly' })
            }
            res.json(updatedNote);
        })
        .catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })

})

///////////////////


app.get('/api/users', (req, res) => {
    User.find({}, {})
        .then((users) => {
            res.json(users);
        })

})

//Create a new date
app.post('/api/users', (req, res) => {
    //prepare on obj to DB
    const user = new User(req.body);
    //storing the new obj DB
    user.save()
        .then(result => {
            res.status(201).json({ message: '$$$$User Create done$$$$' })
        })
});

//fetching a data resource,
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((user) => {

            if (!user) {
                return res.status(404).json({ error: 'User Not Found' });
            }

            res.json(user)
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error on connection' })
        })
})


//Delecting Data
app.delete('/api/users/:id', (req, res) => {
    //get ID data
    const id = req.params.id

    User.findByIdAndDelete(id)
        .then((deleteUser) => {

            if (!deleteUser) {
                return res.status(404).json({ error: 'User not found' })
            }
            res.status(204).json({ message: 'Users delected successfully' })
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' })
        })

})

//Put Request// replaces
app.put('/api/users/:id', (req, res) => {
    //get ID data
    const id = req.params.id
    const userToPut = req.body;

    User.findByIdAndUpdate(id, userToPut)
        .then((updatedUser) => {

            if (!updatedUser) {
                return res.status(404).json({ error: 'Please check replace not done properly' })
            }
            res.json(updatedUser);
        })
        .catch((error) => {
            res.status(500).json({ error: "Internal server error" })
        })

})
