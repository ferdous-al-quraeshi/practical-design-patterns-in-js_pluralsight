// Module Pattern
// Node (module) implementation
var Task = require('./task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
var task2 = new Task({name: 'Create a demo for Modules'});
var task3 = new Task({name: 'Create a demo for Singletons'});
var task4 = new Task({name: 'Create a demo for Prototypes'});

task1.complete();
task2.save();
task3.save();
task4.save();