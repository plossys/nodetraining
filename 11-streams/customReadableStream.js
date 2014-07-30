

var stream = require('stream'),
    util = require('util');

var Readable = stream.Readable;


var RandomStream = function (min, max, count) {
  Readable.call(this, {
    objectMode: true
  });

  this.min = min;
  this.max = max;
  this.count = 15;
};

util.inherits(RandomStream, Readable);

RandomStream.prototype._read = function (size) {
  if (this.count === 0) {
    this.push(null);
    return;
  }

  var randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  this.count--;

  // this.push(new Buffer([ randomNumber ]));
  this.push(randomNumber);
};


var randomNumbers = new RandomStream(10, 20, 15);
randomNumbers.on('data', function (data) {
  console.log(data);
});
randomNumbers.on('end', function () {
  console.log('######');
});
