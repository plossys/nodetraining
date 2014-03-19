'use strict';

var x = 23;

var foo = function () {
  console.log(x);
  var x = 42;
  console.log(x);
};

console.log(x);
foo();
console.log(x);

// 23, undefined, 42, 23
