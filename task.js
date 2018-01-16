// Constructor Pattern
var Task = function (name) {
    this.name = name;
    this.completed = false;

    // Constructor Methods
    /*
    this.complete = function () {
        console.log("Completing task: "+this.name);
        this.completed = true;
    };
    this.save = function () {
        console.log("Saving task: "+this.name);
    };
    */
};

/*
// Constructor Object implementation
var task1 = new Task("Create a demo for Constructors");
var task2 = new Task("Create a demo for Modules");
var task3 = new Task("Create a demo for Singletons");
var task4 = new Task("Create a demo for Prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();
*/

// Prototype implementation
Task.prototype.complete = function () {
    console.log("Completing task: " + this.name);
    this.completed = true;
};
Task.prototype.save = function () {
    console.log("Saving task: " + this.name);
};
// Implemented as node module
module.exports = Task;