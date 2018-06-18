'use strict';

// cargamos librería http
const http = require('http');

var a = 5;

// definir un servidor
const server = http.createServer(function(request, response) {
  console.log(a);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Wake up, <b>Neo</b>...');
  var a = 7;
});

// arrancar el servidor
server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');
