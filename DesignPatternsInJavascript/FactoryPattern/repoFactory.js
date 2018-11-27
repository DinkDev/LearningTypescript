var repoFactory = function() {

  this.getRepo = function(repoType) {

    switch (repoType) {

      case 'task':
        // note: should cache these function pointers in this object
        // lazy load
        var taskRepo = require('./taskRepository');

        // note: config code could be in here

        return taskRepo();

      case 'user':
        var userRepo = require('./userRepository');
        return userRepo();

      case 'project':
        var projectRepo = require('./projectRepository');
        return projectRepo();
    }
  };
};

module.exports = new repoFactory();
