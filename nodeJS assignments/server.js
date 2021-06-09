var http = require('http');

http.createServer(function (req, res) {
    console.log("req server: " +req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
  }).listen(3000,'127.0.0.1');

  console.log('listning to port 3000');



