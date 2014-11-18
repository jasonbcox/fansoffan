// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 66.172.33.127
server.listen(9000);

// Put a friendly message on the terminal
console.log("Server running at http://66.172.33.127:9000/");
