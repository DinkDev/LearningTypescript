var obj = {
  val: 'Hi there',
  printVal: function() {
    console.log(this);
    console.log(this.val);
  }
};

var obj2 = {
  val: 'Whats up'
};

// var print = obj.printVal;
// print();  // <--- 'this' is the global scope, but val is undefined (but it throws if 'use strict';)


var print = obj.printVal.bind(obj2);  // print() is not same as obj2.printVal()
print();


obj2.printVal = obj.printVal; // <--- this works, this is obj2 instance

obj.printVal();
obj2.printVal();  // <--- this gets assigned left side of the period