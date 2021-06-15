const express = require('express');
const bodyParser = require('body-parser');


const app = express();


var items = [{ id: 1, product: 'Apple' }, { id: 2, product: 'Banana' }, { id: 3, product: 'Mango' }, { id: 4, product: 'Watermelon' }];


app.use(bodyParser.urlencoded({ extended: false }));


app.get('/items', (req, res) => {
  if (items) {
    res.send(items);
  } else {
    res.send('List is empty. Please add items in the list');
  }
});


app.post('/items', (req, res) => {
  var item = req.body;
  items.push(item);
  res.send('Item added successfully in the list');
});


app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);
  if (item) {
    res.send(item);
  } else {
    res.send('Item is not available in the list');
  }
});


app.patch('/items/:id', (req, res) => {
  var item = items.findIndex(item => item.id == req.params.id);
  if (items[item]) {
    items[item].product = req.body.product;
    res.send('Item is updated in the list');
    
  }
  else {
    res.send('Item is not available in the list');
  }
});


app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  var item = items.find(item => item.id == itemId);
  if (item) {
    items.splice(items.indexOf(item), 1);
    res.json(items);
  }
  else {
    res.send('not available');
  }
});


app.listen(3000, console.log("Listening to port 3000."));