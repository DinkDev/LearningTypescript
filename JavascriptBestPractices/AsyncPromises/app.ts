
//import {Promise} from 'es6-promise'

// Improved callbacks using PromiseJS
// 2) add argument 'num'
function asyncMethod(message, num) {
  return new Promise(function(fulfill, reject) {
    setTimeout(function() {
      console.log(message + ' ' + num);
      fulfill(num + 1);   // <--- this returns (num + 1)
     }, 500);
  });
}

// 1) add async/await
async function main() {
  var one = await asyncMethod('Open DB Connection', 0);
  var two = await asyncMethod('Find User', one);
  var three = await asyncMethod('Validate User', two);
  var four = await asyncMethod('Do stuff', three);

}

main();