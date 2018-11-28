var repo = function() {

  var called = 0;
  var save = function(task) {
    called++;
    console.log('Saving ' + task + ' - called ' + called + ' times');
  };

  console.log('newing up a task repo');
  return {
    save: save
  };
};

//module.exports = repo();  // nodejs - this creates and caches the object returned
module.exports = new repo();  // nodejs - this creates and caches the object returned

// note - both work
