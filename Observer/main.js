var Task = require('./task');

/*
    Creating all 3 "observers" (services):
      - Logging
      - Notification
      - Auditing
*/
var loggingService = function () {
    var message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task: ' + task.name);
    }
};
var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task: ' + task.name);
    }
};
var auditingService = function () {
    var message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task: ' + task.name);
    }
};

/*
    Creating our "ObserverList" for "Task" subject
*/
var ObserverList = function () {
    this.observers = [];
};
/*
    Now we've to add all the methods to the list
     - add()
     - get()
*/
ObserverList.prototype.add = function (obj) {
    return this.observers.push(obj);
};
ObserverList.prototype.get = function (index) {
    if( 0 <= index < this.observers.length){
        return this.observers[index];
    }
};

var task1 = new Task({
    name: 'create a demo for constructors',
    user: 'Pavel'
});
/*
    creating instances for all three "observers"
*/
var logging = new loggingService();
var notification = new notificationService();
var auditing = new auditingService();

task1.save();