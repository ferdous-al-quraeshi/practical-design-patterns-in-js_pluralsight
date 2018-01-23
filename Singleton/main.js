var taskHandler = require('./taskHandler');
/* Multiple instances */
// var myrepo = require('./repo')();
/* Singleton */
var myrepo = require('./repo');

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();