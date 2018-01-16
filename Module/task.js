// Module Pattern
var Repo = require('./taskRepository');

var Task = function (data) {
    this.name = data.name;
    this.completed = false;
};

// Prototype implementation
Task.prototype.complete = function () {
    console.log("Completing task: " + this.name);
    this.completed = true;
};
Task.prototype.save = function () {
    console.log("Saving task: " + this.name);
    Repo.save(this);
};

// Implemented as node module
module.exports = Task;