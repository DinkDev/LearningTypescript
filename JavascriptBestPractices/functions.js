myFunc();

function myFunc() {
  console.log('myFunc called');
}


myExpr(); // <--- undefined

var myExpr = function() {
  console.log('myExpr called');
}