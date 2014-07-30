

var stream = require('stream'),
    util = require('util');

var Duplex = stream.Duplex;


var MyStream = function () {
  Duplex.call(this);
};

util.inherits(Logger, Duplex);

MyStream.prototype._read = function (size) {
  // ...
};

MyStream.prototype._write = function (chunk, encoding, callback) {
  // ...
};
