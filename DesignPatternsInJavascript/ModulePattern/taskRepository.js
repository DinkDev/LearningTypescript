var repo = function() {

  // So, all my connection work can be done in this method to get it ready for
  // using the methods in the returned API
  var db = {};

  // But - the 'revealing module pattern' is better!

  // return {
  //   get: function(id) {
  //     console.log('Getting task ' + id)
  //     return {
  //       name: 'new task from db'
  //     };
  //   },
  //   save: function(task) {
  //     console.log('Saving ' + task.name + ' to the db');
  //   }
  // };

  // Revealing module pattern:
  var get = function(id) {
    console.log('Getting task ' + id)
    return {
      name: 'new task from db'
    };
  };

  var save = function(task) {
    console.log('Saving ' + task.name + ' to the db');
  };

  return {
    get: get,
    save: save
  };
}

module.exports = repo();


