const express = require('express');
const app = express();

const note = [

    {
        id: 1,
        content: "Stack Clone!",
        important: true,
    },
    {
        id: 2,
        content: "YouTube Clone",
        important: false,
    }

];

//end points
app.get('/',(req, res)=>{
    res.send('Hello!');
})

app.get('/api/notes', (req, res)=>{
    res.json(note);
})

const PORT = 3005;
app.listen(PORT);

console.log(`****************Server Running on Port ${PORT}******************`);