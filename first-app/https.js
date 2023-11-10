const http = require('http');
const { Socket } = require('net');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello world");
        res.end();
    }
})


/*
const server = http.createServer();

server.on('connection',(socket)=>{
    console.log("New Connection");
})
*/


server.listen(3030);
console.log(`server is running on port 3030`);