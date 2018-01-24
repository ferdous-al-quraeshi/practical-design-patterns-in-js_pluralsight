var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log("Completing task: " + task.name);
        },
        setCompleteDate: function (task) {
            task.setCompleteDate = new Date();
            console.log(task.name + " is completed on " + task.setCompleteDate);
        },
        notifyCompletion: function (task, user) {
            console.log("Notifying " + task.user + " of the completion of " + task.name);
        },
        save: function (task) {
            console.log("Saving task: " + task.name);
        }
    };
}();    /* calling the "TaskService" => recall the Module Pattern */


/* creating a "wrapper" on top of the "TaskService" */

/* newing up a task: "MyTask" */
var myTask = new Task({
    name: 'My Task',
    priority: 'High',
    project: 'Cources',
    user: 'Ferdous',
    completed: false
});
// console.log(myTask);

/* calling the methods individually (one-by-one) as typical in API calls */
/* Facade pattern will be in action in the next commit to simplify things thus hiding complexities */
TaskService.complete(myTask);
if(myTask.completed == true) {
    TaskService.setCompleteDate(myTask);
    TaskService.notifyCompletion(myTask);
    TaskService.save(myTask);
}
