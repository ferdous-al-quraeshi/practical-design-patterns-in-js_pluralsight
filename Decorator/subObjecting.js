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


/*
- gonna create a "subObject" (aka "subClass" in a class-based architecture)
- that's gonna wrap "Task" in it's own "thing"
- so that I can create more that one of them
*/
var UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
};

/* creating a "different" (NOT equal) subObject out of "original" parent "Task" object
with the help of "Object.create()" method */
UrgentTask.prototype = Object.create(Task.prototype);
/* equality check */
if(UrgentTask.prototype === Task.prototype) {
    console.log('... are the same');
} else {
    console.log('... are different');
}

UrgentTask.prototype.notify = function () {
    console.log("Notifying important people");
};
UrgentTask.prototype.save = function () {
    this.notify();  /* referencing the "UrgentTask" subObject along with a method ('notify') of that object */
    console.log("Do special stuffs before saving");
    Task.prototype.save.call(this);  /* truly inheriting from the "original" Task object via "call()" method */
};

var ut1 = new UrgentTask('Urgent Task-1', 'high');
ut1.complete();
ut1.save();
console.log(ut1);