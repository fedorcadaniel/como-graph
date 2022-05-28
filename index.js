const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if(request.url == '/') {
        fs.readFile('index.html', 'utf8', (err, data) => {
            if(err) {
                console.error(err);
            }
            //response.writeHead(200,{'Content-Type': 'text/plain'});
            response.write(data);
           
        });
        
    }
    response.end();   
});

/*
fs.readFile('main.css', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
    }
    console.log(data)
})
*/

server.listen(5000);

 console.log("Server started !");