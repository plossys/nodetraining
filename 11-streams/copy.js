

var fs = require('fs'),
    path = require('path'),
    zlib = require('zlib');

var readStream = fs.createReadStream(path.join(__dirname, 'foo.txt'));
var compressStream = zlib.createGzip();
var writeStream = fs.createWriteStream(path.join(__dirname, 'bar.txt'));

writeStream.on('finish', function () {
  console.log('Fertig!');
});

// readStream.pipe(writeStream);

readStream.pipe(compressStream).pipe(writeStream);

// readStream.on('data', function (data) {
//   writeStream.write(data);
// });

// readStream.on('end', function () {
//   writeStream.end();
// });
