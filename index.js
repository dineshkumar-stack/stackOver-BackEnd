const http = require('http');

const app = http.createServer((request, response) => {
    response.writeHead(200, { 'content-Type': 'text/plain' });
    response.end("Hello");

});

const PORT = 3005;
app.listen(PORT);

console.log(`****************server on running on port ${PORT}******************`);