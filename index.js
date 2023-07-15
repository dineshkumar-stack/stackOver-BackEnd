const http = require('http');

const note = [

    {
        id: 1,
        content: "Stack Clone",
        important: true,
    },
    {
        id: 2,
        content: "YouTube Clone",
        important: false,
    }

];


const app = http.createServer((request, response) => {
    response.writeHead(200, { 'content-Type': 'application/json' });
    response.end(JSON.stringify(note));

});

const PORT = 3005;
app.listen(PORT);

console.log(`****************Server Running on Port ${PORT}******************`);