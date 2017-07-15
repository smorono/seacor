/*eslint-env node*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
 // res.send(index.html);
  res.sendFile('index.html', {root: __dirname 
  })
});

app.listen(3000, function () {
  console.log('Llistening on port 3000!');
});
