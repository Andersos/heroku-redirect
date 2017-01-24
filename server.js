const http = require('http');

http.createServer((request, response) => {
    response.writeHead(301, { Location: process.env.NEW_URL });
    response.end();
}).listen(process.env.PORT);
