'use strict';
// ES2015 / ES6 "class" implementation
class Task {
    constructor (name) {
        this.name = name;
        this.completed = false;
    };

    // Class Methods
    complete() {
        console.log("Completing task: "+this.name);
        this.completed = true;
    };
    save() {
        console.log("Saving task: "+this.name);
    };
};

var task1 = new Task("Create a demo for Constructors");
var task2 = new Task("Create a demo for Modules");
var task3 = new Task("Create a demo for Singletons");
var task4 = new Task("Create a demo for Prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();