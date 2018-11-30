(function(){
  'use strict'; // <--- function form of 'use strict'

  var myString = 'something to print';

  function printIt(message) {
    stringtoprint = message;  // <--- gets auto declared at global scope without 'use strict'
    console.log(stringtoprint);
  }

  printIt(myString);
  console.log(stringtoprint);

})();