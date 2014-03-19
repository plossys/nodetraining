var http = require('http');

var redirects = {
  g: 'http://www.google.de',
  h: 'http://www.heise.de/newsticker'
};

var server = http.createServer(function (req, res) {
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

server.listen(3000, function () {
  console.log('Node.js server listening on port 3000');
});
