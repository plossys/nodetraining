#!/usr/bin/env node

'use strict';

var fs = require('fs');

var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

// console.log(program);
// https://github.com/isaacs/read

fs.readFile('/etc/passwd', { encoding: 'utf8' }, function (err, data) {
  console.log(data);
});
