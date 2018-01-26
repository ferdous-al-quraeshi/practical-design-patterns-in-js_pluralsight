var repo = {
    /* Building the pattern out a little bit
        - start by adding an actual repo of tasks
            - an empty 'tasks' object
            - an empty 'commands' array 
    */
    tasks: {},
    commands: [],
    get: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'New task from db'
        };
    },
    save: function (task) {
        /* save every 'task' under a 'task id' back into our repo */
        repo.tasks[task.id] = task;
        console.log('Saving ' + task.name + ' to the db');
    }
};

/* Encapsulating the calling of any function from the 'repo' object as an individual entity */
repo.execute = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);
    
    /* drop a 'push' (the name of the command and whatever it is we passed in) into the 'commands' array */
    repo.commands.push({
        name: name,
        obj: args[0]
    });

    if(repo[name]) {
        return repo[name].apply(repo, args);
    }
    return false;
};
/* Finally passing the 'save' method as parameter and the object on which the method is being called on */
repo.execute('save', {
    id: 1,
    name: 'Task 1',
    completed: false
});

/* building the scenerio a little bit more...
    - instead on one, we're gonna call 'execute' four times
    - for more tasks with different id's
*/
repo.execute('save', {
    id: 2,
    name: 'Task 2',
    completed: false
});
repo.execute('save', {
    id: 3,
    name: 'Task 3',
    completed: false
});
repo.execute('save', {
    id: 4,
    name: 'Task 4',
    completed: false
});

console.log(repo.tasks);