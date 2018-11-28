var myRepo = require('./nodeRepo');

var taskHandler = function() {
  return {
    save: function() {
      myRepo.save('Saving from taskHandler');
    }
  };
};

module.exports = taskHandler();
