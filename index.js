var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send('<h1>Hello world - hheu</h1>');
});

var listener = app.listen(3000);
console.log('Server listening on port ' + listener.address().port);