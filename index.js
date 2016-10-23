var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Express Middleware for serving static files
app.use('/index.html', express.static(path.join(__dirname, '/index.html')));
app.use('/app', express.static(path.join(__dirname, '/app')));
app.use('/api', express.static(path.join(__dirname, '/api')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

//start the server
app.listen(8082, function () {
  console.log('Example app listening on port 8082!');
});
