(function() {

  var app = angular.module('taskManager');

  var taskRepo = function() {

    var db = {};

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

  app.service('TaskRepository', taskRepo);

}());
