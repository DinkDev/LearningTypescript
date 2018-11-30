(function() {
  ' use strict';

  var obj = {
    a: {
      b: {
        c: 'hello'
      }
    }
  };

  var c = 'this is important';

  // with (obj.a.b) {
  //   console.log(c); // <--- which c is this?
  // }

  // better way - is an IFFE
  
  (function(newVar) {
    console.log(newVar.c);
  }(obj.a.b));

}());