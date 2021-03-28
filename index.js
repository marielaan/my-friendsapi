const http = require('http');

const port = parseInt(process.env.PORT) || 3054
const server = http.createServer((request, response) => {
   
    switch(request.url){
        case'/':
        response.writeHead(200, {'Content-Type':'application/json'});
        response.end(JSON.stringify('Estoy corriendo desde Mariela'));
        break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('No encontrado')
    }
});

server.listen(3054, () => {
    console.log(`Servidor operativo en puerto ${port} y dirección localhos`); 
});

server.on('error', error => {
    console.log(error);
})