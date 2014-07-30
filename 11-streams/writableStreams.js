


var fs = require('fs'),
    path = require('path');

var writeStream = fs.createWriteStream(path.join(__dirname, 'foo.txt'), 'utf8');

writeStream.write('Hallo');
writeStream.write('Welt!');
writeStream.end();
