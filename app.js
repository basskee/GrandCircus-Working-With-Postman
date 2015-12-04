var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('App dot Get is Working!')
})


app.post('/post', function (req, res) {
  res.send('App dot Post is Working!')
})

var server=app.listen(8080, function () {
	var host= server.address().address;
	var port= server.address().port;

	console.log('listening at http://%s:%s', host, port);

});

