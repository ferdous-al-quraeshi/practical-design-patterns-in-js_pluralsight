var Task = require('./task');
/* straightforward (without caching) */
// var repoFactory = require('./repoFactory');
/* with Caching facility */
// var repoFactory = require('./repoFactoryWithCache');
/* with Automatic module loading facility */
var repoFactory = require('./repoFactory2');

/*
// straightforward
// ---------------
var task1 = new Task({name: 'do-this'});
task1.complete();
task1.save();
*/

/*
// with Caching
// ------------
var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);
*/


// with Automatic module loading facility
var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);


task1.complete();
task1.save();