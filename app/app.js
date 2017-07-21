/*eslint-env node*/

var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	console.log('get request');
	res.send(index.html);
 }); 


app.listen(8080, function () {
	console.log('Llistening on port 8080!');
});
