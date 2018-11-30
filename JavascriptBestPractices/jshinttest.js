var x = 1;
var y = '1';

if (x == y) {   // <--- by default, jshint does not flag this
  console.log('They equal');
}

// need to setuo eqeqeq option to .jshintrc - see: https://jshint.com/docs/options/ 