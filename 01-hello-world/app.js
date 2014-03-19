setTimeout(function () {
  console.log('world!');
}, 2 * 1000);

var i = 0;
setInterval(function () {
  console.log('Tick ' + i);
  i++;
}, 0.1 * 1000);

console.log('Hello');
