'use strict';

var http = require('http'),
    path = require('path');

var express = require('express');

var logger = require('./infrastructure/logger');

var redirects = require('./redirects');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger({ level: 'INFO' }));

app.get('/', function (req, res) {
  redirects.getAll(function (err, result) {
    res.render('index', {
      redirects: result
    });
  });
});

app.get('/:alias', function (req, res) {
  var alias = req.params.alias;

  redirects.getBy(alias, function (err, url) {
    if (err) {
      return res.send(404);
    }
    res.redirect(url);
  });
});

var server = http.createServer(app);

server.listen(3000, function () {
  console.log('Node.js server listening on port 3000');
});
