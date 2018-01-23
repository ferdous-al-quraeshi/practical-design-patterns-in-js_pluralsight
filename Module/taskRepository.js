// Module Pattern
// this module is responsible for doing all of our database calls
var repo = function () {
    // Here I can create a variable and instantiate my db connections and do all my db work here
    var db = {};

    return {
        // just returning a seriese of methods
        get: function (id) {
            console.log('Getting task: ' + id);
            return {
                name: 'New task from db',
            }
        },
        save: function (task) {
            console.log('Saving ' + task.name + ' to the db');
        }
    };
// =================================================================================

/*
    // Starting "Revealing Module Pattern" implementation...
    // Declaring all my methods right away
    var get = function (id) {
        console.log('Getting task: ' + id);
        return {
            name: 'New task from db',
        };
    };
    var save = function (task) {
        console.log('Saving ' + task.name + ' to the db');
    }

    // And later just return those method like as follow...
    // Thus, I can go to the return statement and see what methods are available on this module
    return {
        get: get,
        save: save
    };
*/

};

module.exports = repo();