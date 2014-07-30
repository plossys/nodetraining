

var stream = require('stream'),
    util = require('util');

var Transform = stream.Transform;


var ToUpperCase = function () {
  Transform.call(this, {
    decodeStrings: false
  });

  this.length = 0;
};

util.inherits(ToUpperCase, Transform);

ToUpperCase.prototype._transform = function (chunk, encoding, callback) {
  this.push(chunk.toUpperCase());
  this.length += chunk.length;
  callback();
};

ToUpperCase.prototype._flush = function () {
  this.emit('length', this.length);
};


var toUpperCase = new ToUpperCase();

toUpperCase.setEncoding('utf8');

toUpperCase.on('data', function (data) {
  console.log(data);
});

toUpperCase.on('length', function (length) {
  console.log(length);
});

toUpperCase.write('Hallo Welt!');
toUpperCase.end();
