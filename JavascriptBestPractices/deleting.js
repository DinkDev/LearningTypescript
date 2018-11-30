(function() {
  'use strict';
  var obj = { a: 100, b: 200, },
    myVar = 10;

  delete obj.a;
  delete myVar;   // <---- this doesn't do anythign without 'use strict', but crashed wit it

  console.log(obj);
  console.log(myVar);
})();