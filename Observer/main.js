var Task = require('./task');

var task1 = new Task({
    name: 'create a demo for constructors',
    user: 'Pavel'
});

task1.save();