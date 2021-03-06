const http = require('http');

let server = http.createServer(function (req, res) {
    res.end('Hola mundo')
})

server.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en ', process.env.PORT || 3000);
})