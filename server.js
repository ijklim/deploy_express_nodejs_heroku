var express = require('express');

var app = express();

app.get('/', (request, response) => {
  response.send('Hello World');
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log('server started '+ port);