var repo = {
  get: function(id) {
    console.log('Getting task ' + id);
    return {
      name: 'new task from db ' + id
    }
  },

  save: function(task) {
    console.log('Saving ' + task.name + ' to the db');
  }
};

// for command - just add a new method onto repo...
repo.execute = function(name) {

  var args = Array.prototype.slice.call(arguments, 1);  // get all args after the first (name) which we already have
  var args2 = [].slice.call(arguments, 1);  // works the same

  if (repo[name]) {
    return repo[name].apply(repo, args);  // apply used here because it takes an array of arguments, call() takes enumerated arguments
  }
  return false;
};

repo.execute('save', {
  id: 1,
  name: 'Task 1',
  completed: false
});
