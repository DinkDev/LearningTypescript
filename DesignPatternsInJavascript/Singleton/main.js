var taskHandler = require('./taskHandler');
var myRepo = require('./nodeRepo');

myRepo.save('from main');
myRepo.save('from main');
myRepo.save('from main');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
