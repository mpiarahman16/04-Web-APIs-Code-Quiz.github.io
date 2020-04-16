const http= require ('http');

const port = 7000;

function handlerequest(request, response) {
    response.end("Path requested: +request.url");

}
const server = http.createServer(handlerequest);

server.listen(PORT, function() {
    console.log ("Server listening on: http://localhost:" + PORT);
}