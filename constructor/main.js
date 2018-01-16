// Node (module) implementation
var Task = require('./task');

var task1 = new Task("Create a demo for Constructors");
var task2 = new Task("Create a demo for Modules");
var task3 = new Task("Create a demo for Singletons");
var task4 = new Task("Create a demo for Prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();