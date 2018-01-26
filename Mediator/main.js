var Task = require('./task');

/* Creating all 3 services:
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

/*  The "Mediator" pattern started here...
    - initial setup
    - gonna be an IIFE
    - using "revealing module pattern"
    - gonna be a 'pub-sub' model
*/
var mediator = (function () {
    var channels = {};
    var subscribe = function (channel, context, func) {
        /* create a channel if doesn't exist */
        if(!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }
        /* push the context and a callback (func) onto an array by that channel */
        mediator.channels[channel].push({
            context: context,
            func: func
        });
    };
    /* hey 'channel', go! */
    var publish = function (channel) {
        /* make sure the channel exists */
        if(!this.channels[channel]) {
            return false;
        }
        /* when I publish a channel, I'm also gonna send the whole bunch of other 'arguments' with it */
        var args = Array.prototype.slice.call(arguments, 1);
        /* calling the 'func' callback on each subscription and applying with the relative cotext and arguments */
        for(var i = 0; i < mediator.channels[channel].length; i++) {
            var sub = mediator.channels[channel][i];    /* each subscription */
            sub.func.apply(sub.context, args);   /* args = gonna be everything else that was passed in  */
        }
    };
    return {
        channels: {},       /* returning the channel to gain access again later */
        subscribe: subscribe,
        publish: publish
    };
})();

var task1 = new Task({
    name: 'create a demo for Mediators',
    user: 'Pavel'
});

/* creating instances for all three services */
var logging = new loggingService();
var notifying = new notificationService();
var auditing = new auditingService();

/* All 3 of our services are gonna be subscribed and ready to go (publish) via the 'complete' channel*/
mediator.subscribe('complete', logging, logging.update);
mediator.subscribe('complete', notifying, notifying.update);
mediator.subscribe('complete', auditing, auditing.update);

/* decorating the 'task1' for publishing to the 'complete' channel
    - overriding the original function with a new function
*/
task1.complete = function () {
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
};
task1.complete();   /* replacing the original 'save' method */