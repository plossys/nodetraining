'use strict';

var http = require('http');

var connect = require('connect');

var logger = require('./logger');

var redirects = require('./redirects.json');

var app = connect();

app.use(logger({ level: 'INFO' }));

app.use(function (req, res) {
  var alias = req.url.substring(1);

  if (!redirects[alias]) {
    res.writeHead(404);
    res.end();
    return;
  }

  res.writeHead(302, {
    location: redirects[alias]
  });
  res.end();
});

var server = http.createServer(app);

server.listen(3000, function () {
  console.log('Node.js server listening on port 3000');
});
