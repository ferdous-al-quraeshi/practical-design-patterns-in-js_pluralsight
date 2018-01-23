var Repo = require('./taskRepository')();

var Task = function(data) {
    this.name = data.name;
    this.copmpleted = false;
};

Task.prototype.complete = function () {
    console.log('completing task: '+ this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
}

module.exports = Task;