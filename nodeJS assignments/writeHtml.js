var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
    console.log("req server: " +req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var readSt = fs.createReadStream('index.html', 'utf8');
    readSt.pipe(res);
    
  }).listen(3000,'localhost');

  console.log('listning to port 3000');





