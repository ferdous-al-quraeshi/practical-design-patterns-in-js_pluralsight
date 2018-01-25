var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

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

/* Creating 10K random tasks via a for loop iteration */
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
*/
console.log("Tasks Count: " + tasks.getCount());    /* 10,000 */
console.log('Used Memory: ' + (afterMemory - initialMemory) / 1000000);   /* 2.924168 MB, 2.926624 MB, 2.95632 MB */
