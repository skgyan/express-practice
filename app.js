var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

app.param('name', function(request, response, next){
  var name = request.params.name;
  var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
  request.blockName = block;
  next();
});

app.get('/blocks', function(request, response) {
  //response.send('Hello World...');
  // var blocks = ['Fixed', 'Movable', 'Rotating'];
  var blocks = {
    'Fixed': 'Fastened securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
  };
  response.json(Object.keys(blocks));

});

app.get('/blocks/:name', function(request, response) {
  //response.send('Hello World...');
  // var blocks = ['Fixed', 'Movable', 'Rotating'];
  var blocks = {
    'Fixed': 'Fastened securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
  };

  // if (request.query.limit > 0) {
  //   response.json(blocks.slice(0, request.query.limit));
  // } else {
  //   response.json(blocks);
  // }
  var description = blocks[request.blockName];
  if (!description) {
    response.status(404).json('No description found for ' + request.params.name);
  } else {
    response.json(description);
  }
});
//path redirect with permamnent moved status code
app.get('/redirects', function(request, response) {
  response.redirect(301, '/parts');
});
//json file
app.get('/comments', function(request, response){
  response.sendFile(__dirname + '/public/comments.json');
})

// app.get('/', function(request, response){
//   response.sendFile(__dirname + '/public/index.html');
// });
app.use(express.static('public'));
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
