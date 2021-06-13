var http = require('http');
var fs = require('fs');


var streamRead = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

streamRead.on('data',chunk => {
    console.log(`chunk recieved`);
    console.log(chunk);

});