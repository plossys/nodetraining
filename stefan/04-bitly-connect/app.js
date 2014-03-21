'use strict';

var http = require('http');
var connect = require('connect');


var app = connect();

var reqlogger = require('./reqlogger');
var redirector = require('./redirector');

app.use(reqlogger({ level: 'INFO'}));
app.use(redirector);

var server = http.createServer(app);

server.listen(3000, function () {
  console.log('Node.js server listening on port 3000')
});
