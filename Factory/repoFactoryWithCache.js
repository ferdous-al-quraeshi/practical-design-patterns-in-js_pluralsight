var repoFactory = function () {
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            if(this.taskRepo) {
                console.log('retrieving from cache');
                return this.taskRepo;
            } else {
                this.taskRepo = require('./taskRepository')();
                // config codes go here... before returning it
                return this.taskRepo;
            }
        }
        if (repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if (repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    };
};

module.exports = new repoFactory;