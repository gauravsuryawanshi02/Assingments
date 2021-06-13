const fs = require("fs");

const writeStream = fs.createWriteStream("readme.txt");
writeStream.write("Hey!ho,let's go.. ");
console.log('the file was saved');
writeStream.end();