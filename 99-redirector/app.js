'use strict';

var http = require('http');

var express = require('express');

var logger = require('./logger');

var redirects = require('./redirects.json');

var app = express();

app.use(logger({ level: 'INFO' }));

app.get('/:alias', function (req, res) {
  var alias = req.params.alias;

  if (!redirects[alias]) {
    return res.send(404);
  }

  res.redirect(redirects[alias]);
});

var server = http.createServer(app);

server.listen(3000, function () {
  console.log('Node.js server listening on port 3000');
});
