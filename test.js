const http = require('http');
const fs = require('fs');
const PORT = 5000;
const server = http.createServer((request, response) => {

    if(request.url == '/'){
    response.writeHead(200, {'Content-Type': "text/html"})
    fs.readFile('index.html', 'utf8', (err, data) => {
        if(err){
            console.error(err);
        }
        else {
            response.write(data);
            response.end();
        }
    });
    ;}
    if(request.url == "/main.css"){
        response.writeHead(200, {'Content-Type': "text/css"})
        fs.readFile('main.css', 'utf8', (err, data) => {
            if(err){
                console.error(err);
            }
            else {
                response.write(data);
                response.end();
            }
        });
    }


    
});



server.listen(PORT, () => {
    console.log('Server is listening');
})
