var a = 0;

if (1 == '1') {
  a++;
}

if (1 == true) {
  a++;
}

if (0 == false) {
  a++;
}

if (1 === '1') {
  a++;
}

console.log(a);

var x;
//var x = 0;  // <---- lask of definition causes the if (x) reference to crash!

// if (x) { // <---- problems is x === 0!!!
//   console.log('x exists');
// }
// else {
//   console.log('x exists');
// }

if (typeof x !== 'undefined') {   // <---   this is the proper way to check if x is defined
  console.log('x exists');
}
else {
  console.log('x exists');
}