var Task = function (data) {
    this.name = data.name;
    /* replacing the following four data by the "flyweight" factory
        this.priority = data.priority;
        this.project = data.project;
        this.user = data.user;
        this.completed = data.completed;
    */
    this.flyweight = FlyweightFactory.get(data.priority, data.project, data.user, data.completed);
};

/*
Let's create a Flyweight...
 - it's gonna be a "Flyweight" constructor- the "smaller memory footprint"
 - that will (later) replace the shared data taht are in the "original" Task object (see line: 3-9)
 - comprising a FlyweightFactory (module)
 - which will be an IIFE to serve realistically as a "Factory"
 - which gonna do two Thing
    1. create a "new" flyweight
    2. return a flyweight
    ... and we're gonna put a "counter" on it
*/
function Flyweight(priority, project, user, completed){
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
}
var FlyweightFactory = function () {
    var flyweights = {};

    /* the 'get' function will be responsible of getting our flyweights
        - will take and return all the shared "data" for us
        - check if that exists in the collection of "flyweights" or return a new one
    */
    var get = function (priority, project, user, completed) {
        if(!flyweights[priority + project + user + completed]) {
            flyweights[priority + project + user + completed] = new Flyweight(priority, project, user, completed)
        } else {
            return flyweights[priority + project + user + completed];
        }
    };
    /* the flyweight counter function */
    var getCount = function () {
        var count = 0;
        for (var f in flyweights) count++;
        return count;
    };

    return {
        get: get,
        getCount: getCount
    };
}();

/* the way of Creating "tasks" collecttion via "Revealing Module Pattern" */
function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    };
    var get = function (name) {
        return tasks[name];
    };
    var getCount = function () {
        return count;
    }
    return {
        add: add,
        get: get,
        getCount: getCount
    };
}

/* defining array of objects */
var tasks = new TaskCollection();
var projects = ['none', 'courses', 'research', 'charity'];
var priorities = ['high', 'medium', 'low'];
var users = ['Rasel', 'Pavel', 'Tawsif', 'Jitu', 'Nasir'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;   /* heapSize "before" operation */

/*
Creating 10K random tasks via a for loop iteration
 - you may try to increase the loop constraint and see the variation in results ;)
*/
for(var i = 0; i < 10000; i++) {
    tasks.add({
        name: 'task' + i,
        project: projects[Math.floor((Math.random() * 4))],
        priority: priorities[Math.floor((Math.random() * 3))],
        user: users[Math.floor((Math.random() * 5))],
        completed: completed[Math.floor((Math.random() * 2))]
    });
};

var afterMemory = process.memoryUsage().heapUsed;   /* heapSize "after" operation */

/*
logging the task & memory usage counts...
 - Tasks count (as defined in the loop constraint): 10,000
 - Used Memory resulted in these variants (in Megabites): 2.924168, 2.926624, 2.95632
 - Flyweights Count: 120 (only!) <= reduced from 10,000
*/
console.log("Tasks Count: " + tasks.getCount());    /* 10,000 */
console.log('Used Memory: ' + (afterMemory - initialMemory) / 1000000);   /* 2.924168 MB, 2.926624 MB, 2.95632 MB */

console.log("Flyweights Count: " + FlyweightFactory.getCount());    /* 120 (only) <= reduced from 10,000 */
