var Task = require('./task');

var auditingService = function() {
  var message = 'Auditing ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  };
};

var loggingService = function() {
  var message = 'Logging ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  };
};

var notificationService = function() {
  var message = 'Notifying ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  };
};


// mediator implementation
var mediator = (function() {
  //var channels = {}; // <--- wasn't really used, empty object defined in returned object below

  var subscribe = function(channel, context, func) {
    if (!this.channels[channel]) {
      this.channels[channel] = [];
    }
    this.channels[channel].push({
      context: context,
      func: func
    });
  };

  var publish = function(channel) {
    if (!this.channels[channel]) {
      return false;
    }

    // vararg processing in JS
    // coerce arguments to an array and throw away the first one
    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < this.channels[channel].length; i++) {
      var sub = this.channels[channel][i];
      sub.func.apply(sub.context, args);
    }
  };

  return {
    channels: {},
    publish: publish,
    subscribe: subscribe
  };

}());



// run it
var task1 = new Task({ name: 'create a demo for mediators', user: 'Jon' });

var audit = new auditingService();
var log = new loggingService();
var notify = new notificationService();


mediator.subscribe('complete', audit, audit.update);
mediator.subscribe('complete', log, log.update);
mediator.subscribe('complete', notify, notify.update);


console.log(mediator);

task1.complete = function() {
  mediator.publish('complete', this);
  Task.prototype.complete.call(this);
}


task1.complete();
