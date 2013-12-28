var express = require('express'),
	app = express(),
	port = 3000;
 
app.listen(port);

app.get('/', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
});


console.log('Listening on port ', port);
