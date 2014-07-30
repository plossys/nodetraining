

var fs = require('fs');

var readStream = fs.createReadStream('/etc/passwd');

readStream.setEncoding('utf8');

// // Flowing mode
// readStream.on('data', function (data) {
//   console.log(data);
// });

// Non-flowing mode
readStream.on('readable', function () {
  console.log(readStream.read());
});

// // Non-flowing mode > Flowing-mode
// readStream.pause();
// readStream.resume();

readStream.on('end', function () {
  console.log('#############');
});
