var repo = {

  // simulate tasks stored on repository
  tasks: {},

  // record state of objects and commands executed on them
  // this could be used to rollback changes, etc.
  commands: [],
  get: function(id) {
    console.log('Getting task ' + id);
    return {
      name: 'new task from db ' + id
    }
  },

  save: function(task) {
    repo.tasks[task.id] = task;
    console.log('Saving ' + task.name + ' to the db');
  },

  // add ability to replay execution (maybe retries or error recovery)
  replay: function() {
    for (var i = 0; i < repo.commands.length; i++){
      var command = repo.commands[i];

      repo.executeNoLog(command.name, command.obj);
    }
  }
};

// for command - just add a new method onto repo...
repo.executeNoLog = function(name) {

  var args = Array.prototype.slice.call(arguments, 1);  // get all args after the first (name) which we already have
  if (repo[name]) {
    return repo[name].apply(repo, args);  // apply used here because it takes an array of arguments, call() takes enumerated arguments
  }
  return false;
};


repo.execute = function(name) {

  var args = Array.prototype.slice.call(arguments, 1);  // get all args after the first (name) which we already have
  //var args2 = [].slice.call(arguments, 1);  // works the same

  repo.commands.push({  // this push to a commands list allows possible undo!!!  Args is object state prior to applying!!!
    name: name,
    obj: args[0]  // varags is command name and an (optional) object of parameters, so this is just the parameters object
  });

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

repo.execute('save', {
  id: 2,
  name: 'Task 2',
  completed: false
});

repo.execute('save', {
  id: 3,
  name: 'Task 3',
  completed: false
});

repo.execute('save', {
  id: 4,
  name: 'Task 4',
  completed: false
});

console.log(repo.tasks);

repo.tasks = {};  // oops, the task log was damaged

console.log(repo.tasks);

repo.replay();

console.log(repo.tasks);
