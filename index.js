// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);

var a = 5;

const fce = function (a) {
  a = a + 5;
  return a;
};

const obj = {
  name: 'pekarek',
  role: 'borec',
};

a = fce(a);

console.log('acko je: ' + a);
