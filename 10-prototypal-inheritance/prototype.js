

var Animal = function (numberOfLegs) {
  this.legs = numberOfLegs;
  this.initialize();
};

Animal.prototype.breathe = function () {
  console.log('In, and out, and in, and out, ...');
};

var animal = new Animal(8);



var Movable = function () {};
Movable.prototype.move = function () {};

var movable = new Movable();



var Dog = function (name, color) {
  Animal.call(this, 4);

  this.name = name;
  this.color = color;
};

Dog.prototype = animal;

Dog.prototype.puppies = [];

Dog.prototype.favoriteFood = 'Frolic';

Dog.prototype.bark = function () {
  console.log('Wau wau! ' + this.name);
};

var ella = new Dog('Ella', 'dark-sable');
ella.bark();
console.log(ella.favoriteFood); // => 'Frolic'

ella.favoriteFood = 'Hills';
// delete ella.favoriteFood;

ella.puppies = [];
ella.puppies.push('Amy');




var alice = {
  name: 'Alice',
  color: 'tricolour',
  bark: function () {
    console.log('Wau wau! ' + this.name);
  }
};

var muffin = {
  name: 'Muffin',
  color: 'blue-merle',
  bark: function () {
    console.log('Wau wau! ' + this.name);
  }
};

alice.bark();
muffin.bark();


