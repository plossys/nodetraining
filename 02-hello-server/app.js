var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('Hello from Node.js!<br />');
  res.write(req.method + ' ' + req.url);
  res.end();
});

server.listen(3000, function () {
  console.log('Node.js server listening on port 3000')
});
