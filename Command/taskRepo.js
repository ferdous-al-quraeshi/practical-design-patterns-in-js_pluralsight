var repo = {
    get: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'New task from db'
        };
    },
    save: function (task) {
        console.log('Saving ' + task.name + ' to the db');
    }
};

/* Encapsulating the calling of any function from the 'repo' object as an individual entity */
repo.execute = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);
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