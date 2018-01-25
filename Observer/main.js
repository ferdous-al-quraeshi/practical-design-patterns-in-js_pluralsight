var Task = require('./task');

/* Creating all 3 "observers" (services):
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

/* Creating our "ObserverList" for "Task" subject */
var ObserverList = function () {
    this.observers = [];
};
/* Now we've to add all the (helper) methods to the list
     - add()
     - get()
     - count()      // added later to serve "ObservableTask.prototype.notify()"; see => line:92 
     - removeAt()   // added later to implement "removeObserver" functionality; see => line:56
     - indexOf()    // added later to implement "removeObserver" functionality; see => line:59
*/
ObserverList.prototype.add = function (obj) {
    return this.observers.push(obj);
};
ObserverList.prototype.get = function (index) {
    if( 0 <= index < this.observers.length){
        return this.observers[index];
    }
};
ObserverList.prototype.count = function () {
    return this.observers.length;
};

/*  Adding 'removeObserver' functionality to the observers
    - allows an 'observer' to no longer being notified when changes that are being made
    - two things:
        1. the ability to remove 'at a spot' (aka index)
        2. where that index is: we've to be able to find our 'observer' into our ObserverList
*/
ObserverList.prototype.removeAt = function (index) {
    this.observers.splice(index, 1);
};
ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;
    while (i < this.observers.length) {
        if(this.observers === obj) {
            return i;
        }
        i++;
    }
    return -1;
}


/* We're gonna make our "original" "Task" object into an "ObservableTask" as a wrapper around it
    - because, we don't wanna mess with it ;)
*/
var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};

/* Now we're gonna add some (helper) methods to deal with our "observers"
     - addObserver() [ allow the observers to add themselves to the "ObservableTask" ]
     - notify() [ after getting each observer and then calling each with its context ]
     - save()   [ whenever a 'task' is saved, this "overriding method" will be called to 'notify' each 'observer' ]
     - removeObserver() [ allow the observers to remove themselves from the "ObservableTask" ]
*/
ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
};
ObservableTask.prototype.notify = function (context) { /* the context is gonn be, in this case, 'task': see lins:10, 16 & 22 */
    /* gonna loop over the array
        - to 'get' what each observer has passed in
        - and then execute it with the 'context'  */
    var observerCount = this.observers.count();
    for(var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
};
ObservableTask.prototype.save = function () {
    Task.prototype.save.call(this);
    /* call 'notify(this)' after (or might before) save
        - the 'this' context ensures that that's gonna be 'my-this', NOT 'other-this' context
    */
    this.notify(this);
}
ObservableTask.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}

var task1 = new ObservableTask({    /* 'new Task()' is replaced with 'new ObservableTask()' */
    name: 'create a demo for Observers',
    user: 'Pavel'
});
/* creating instances for all three "observers" */
var logging = new loggingService();
var notifying = new notificationService();
var auditing = new auditingService();

/* Now we've to register our 'services' on our 'task'
    - just 'pass in' (NOT execute) whatever we observed
    - ( the 'update' method in our case scenerio => see line: 10, 16 & 22 )
*/
task1.addObserver(logging.update);
task1.addObserver(notifying.update);
task1.addObserver(auditing.update);

task1.save();

task1.removeObserver(auditing);     /* this removes the 'auditing' service from our 'ObserverList' and updated with the remaining service(s) */
task1.save();   /* this triggers with the available service calls */