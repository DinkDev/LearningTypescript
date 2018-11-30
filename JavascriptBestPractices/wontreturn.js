function myModule()
{
  return {
    x: 3,
    y: 4
  };
}

var t = myModule();
console.log(t);

var x = 0;

if (1 == '1') {
  x++;
}

if (1 == true) {
  x++;
}

if (0 == false) {
  x++;
}

if (1 === '1') {
  x++;
}

console.log(x);
