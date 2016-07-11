var express = require('express');
var app = express();

// var logger = require('./logger');
// app.use(logger);

app.use(express.static('public'));

var blocks = require('./routes/blocks');
app.use('/blocks', blocks);
//path redirect with permamnent moved status code
// app.get('/redirects', function(request, response) {
//   response.redirect(301, '/parts');
// });
//json file
// app.get('/', function(request, response){
//   response.sendFile(__dirname + '/public/index.html');
// });


app.listen(3000, function() {
  console.log('Listening on port 3000');
});
