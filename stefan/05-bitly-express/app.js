'use strict';

var http = require('http');
var express = require('express');
var redirections = require('./redirections.json');

var app = express();
app.use(express.logger());
app.use(express.static(__dirname + '/public'));

app.get('/:alias', function (req, res) {
  var redirectionUrl = redirections[req.params.alias];
//  console.log(req.params.alias + ' -> ' + redirectionUrl);
  if (redirectionUrl) {
    res.redirect(redirectionUrl);
  } else {
    res.send(404);
  }
});

app.listen(3000);
