'use strict';

var http = require('http');

var connect = require('connect');

var logger = require('./logger');

var app = connect();

app.use(logger);

app.use(function (req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});

app.use(function (req, res) {
  res.write('Hello from Connect-enabled web app!');
  res.end();
});

var server = http.createServer(app);

server.listen(3000);
