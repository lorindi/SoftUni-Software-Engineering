const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server is called');
    
    console.log(req.method);
    console.log(req.headers.host);
    console.log(req.url);

    res.writeHead(201, {
        'Content-Type': 'text/html'
    });
    res.write('<h1>Hello from NodeJS Server! Updated version</h1>');
    res.end();
});

server.listen(5000);
console.log('Server is running on port 5000...');