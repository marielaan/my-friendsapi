const http = require('http');

const server = http.createServer((request, response) => {
   
    switch(request.url){
        case'/':
        response.writeHead(200, {'Content-Type':'application/json'});
        response.end(JSON.stringify('Hola Mundo'));
        break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('No encontrado')
    }
});

server.listen(3000, () => {
    console.log('Servidor operativo en puerto 3000 y direccion localhost');
});