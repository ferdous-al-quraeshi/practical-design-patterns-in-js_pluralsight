var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};
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