// found at: https://pearpages.com/javascript/patterns/2016/04/05/javascript-most-common-patterns.html

var Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
};

Task.prototype.complete = function () {
  console.log('completing task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log('saving task: ' + this.name);
};

module.exports = Task;
