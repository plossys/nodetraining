var externalBark = function () {
  console.log('Wau wau! ' + this.name);
};

var alice = {
  name: 'Alice',
  bark: externalBark
};

var muffin = {
  name: 'Muffin',
  bark: externalBark
};

var ella = {
  name: 'Ella'
};

// #1 Method invocation: this === Objekt

alice.bark();
muffin.bark();


// #2 Function invocation: this === globaler Kontext (im Browser: window)

externalBark();


// #3 Call invocation: this = 1. Parameter von Call

externalBark.call(ella/*, p1, p2, p3, p4 */);
externalBark.apply(ella/*, [ p1, p2, p3, p4] */);



