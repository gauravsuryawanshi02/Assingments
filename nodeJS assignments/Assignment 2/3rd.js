const express = require('express');
const process = require('process');
const app = express()

app.get('/home', function(req, res) {
  res.end('Hello World!')
})

app.listen(process.argv[2]);
console.log(process.argv[2]);