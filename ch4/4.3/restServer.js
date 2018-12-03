const http = require('http');
const fs = require('fs');

const users = {};

http.createServer((req, res)=>{
    if (req.method === 'GET'){
        if(req.url === '/'){
            return fs.readFile('./restFront.html', (err, data)=>{
                
            })
        }
    }
})