'use strict';

var http = require('http');
var redirections = {
  '/g' : 'http://www.google.de',
  '/h' : 'http://www.heise.de'
}

var server = http.createServer(function (req, res) {
  var redirectionUrl = redirections[req.url]
  console.log(req.url + ' -> ' + redirectionUrl)
  if (redirectionUrl) {
    res.writeHead(302, {
      'location': redirectionUrl
    });
  } else {
    res.writeHead(404, {
      'content-type': 'text/html'
    });
    res.write('Sorry, short URL not found')
  }
  res.end();
});

server.listen(3000, function () {
  console.log('Node.js server listening on port 3000')
});
