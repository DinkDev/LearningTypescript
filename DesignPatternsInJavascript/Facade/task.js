
// taken from: https://embed.plnkr.co/plunk/ZEAbTU

// base task object - simple property bag
var Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
};

// messy service interface
var TaskService = function () {
  return {
    complete: function(task) {
      task.completed = true;
      console.log('completing task: ' + task.name);
    },
    setCompleteDate: function(task) {
      task.completedDate = new Date();
      console.log(task.name + ' completed on ' + task.completedDate);
    },
    notifyCompletion: function(task, user) {
      console.log('Notifying ' + user + ' of the completion of ' + task.name);
    },
    save: function(task) {
      console.log('saving Task: ' + task.name);
    }
  };
}();

var myTask = new Task({
  name: 'MyTask',
  priority: 1,
  project: 'Courses',
  user: 'Dale',
  completed: false
});

// using the raw service interface
TaskService.complete(myTask);
if (myTask.completed) {
  TaskService.setCompleteDate(myTask);
  TaskService.notifyCompletion(myTask, myTask.user);
  TaskService.save(myTask);
}

// now - let's add a facade to encapsulate this (create an object with a method to wrap up the complicated client side interface)
var TaskServiceWrapper = function() {
  var completeAndNotify = function(task) {
    if (task.completed) {
      TaskService.setCompleteDate(task);
      TaskService.notifyCompletion(task, task.user);
      TaskService.save(task);
    }
  };

  return {
    completeAndNotify: completeAndNotify
  };
}(); // <--- execute and generate the wrapper

console.log('now with the wrapper');
TaskServiceWrapper.completeAndNotify(myTask);
