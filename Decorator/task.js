/* the "original" "Task (object) constructor" */
var Task = function (name) {
    this.name = name;
    this.completed = false;
};

/* prototypal inheritance from the good old "Task object" */
Task.prototype.complete = function () {
    console.log("Completing task: " + this.name);
    this.completed = true;
};
/* prototypal inheritance from the good old "Task object" */
Task.prototype.save = function () {
    console.log("Saving task: " + this.name);
}

/* instantiate a new "Legacy Task" */
var legacyTask = new Task('Legacy Task');
legacyTask.complete();
legacyTask.save();

/* instantiate a new "Urgent Task" */
var urgentTask = new Task('Urgent Task');
/* setting new properties and methods with dot (.) notation */
urgentTask.priority = 2;
urgentTask.notify = function () {
    console.log("Notify important people");
};

urgentTask.complete();
// urgentTask.notify(); /* get rid of this and call this with the save() method altogether */
urgentTask.save = function () {
    this.notify();
    Task.prototype.save.call(this);
};
urgentTask.save();