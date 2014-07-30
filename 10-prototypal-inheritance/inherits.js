

var util = require('util');


var Animal = function () {};
Animal.prototype.breathe = function () {};

var Dog = function () {};
Dog.prototype.bark = function () {};

util.inherits(Dog, Animal);

var dog = new Dog();
dog.breathe();
