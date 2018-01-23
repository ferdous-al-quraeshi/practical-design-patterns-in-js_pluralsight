var repo = function () {
    var db = {};

    var get = function (id) {
        console.log('getting task: ' + id);
        return {
            name: 'new task from db'
        };
    };

    var save = function (task) {
        console.log('Saving ' + task.name + 'to the db');
    };

    console.log('newing up task repo');
    return {
        get: get,
        save: save
    };
};

module.exports = repo;