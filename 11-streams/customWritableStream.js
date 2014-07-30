

var stream = require('stream'),
    util = require('util');

var Writable = stream.Writable;


var Logger = function () {
  Writable.call(this, {
    // decodeStrings: false
    objectMode: true
  });
};

util.inherits(Logger, Writable);

Logger.prototype._write = function (chunk, encoding, callback) {
  console.log('LOG [' + chunk.level + '] ' + chunk.text);
  callback();
};



var logger = new Logger();
logger.write({ level: 'info', text: 'App initialized...' });
logger.write({ level: 'debug', text: 'Setting up something...' });
logger.end();
