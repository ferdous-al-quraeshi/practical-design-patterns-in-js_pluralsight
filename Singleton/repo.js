var repo = function () {
    var called = 0;

    var save = function (task) {
        called++;
        console.log('Saving ' + task +
                    ' Called ' + called + (called<=1 ? ' time' : ' times'));
    };

    console.log('newing up task repo');
    return {
        save: save
    };
};

/* Multiple instances */
// module.exports = repo;

/* Singleton implementation with calling the repo function */
// module.exports = repo();

/* OR
 Singleton implementation with creating an instance of the repo function */
module.exports = new repo;