'use strict';

var calculator = require('./logic/calculator');

var config = require('./configuration.json');

var app = {
  run: function () {
    var sum = calculator.add(23, 42);
    console.log(sum);
  }
};

app.run();

console.log('Port: ' + config.port);
