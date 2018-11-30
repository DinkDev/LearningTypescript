var obj = function() {
  var _this = this;   // <--- use and reference through _this, a best practice
  this.hello = 'hello';

  _this.greet = function() {
    console.log(_this.hello);
  };

  this.delayGreeting = function() {
    setTimeout(this.greet, 1000); // <--- object is out of scope before the callback executes
  };

  _this.betterDelayGreeting = function() {
    // setTimeout(this.greet.bind(this), 1000);  // <--- the context of this is all saved with the callback here
    setTimeout(_this.greet, 1000);
  };
};

var greeter = new obj();  // <--- 4th way that 'this' is used

greeter.greet();

greeter.delayGreeting();  // <--- this generates 'undefined'

greeter.betterDelayGreeting();  // <--- works as expected
