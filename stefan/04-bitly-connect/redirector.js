'use strict';

var redirections = require('./redirections.json');

var redirector = function (req, res) {
  var shortUrl = req.url.substring(1);
  var redirectionUrl = redirections[shortUrl];
  console.log(shortUrl + ' -> ' + redirectionUrl);
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
}

module.exports = redirector;
