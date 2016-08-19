var fs = require('fs'),
        self = this;


createBaseProject = function () {
    return `
        var bayside = require('bayside')

        // custom user variables
        var config = {
            root: __dirname,
            port: 3000
        }

        var app = new bayside(config);
    `
}

fs.writeFile("./" + process.argv[2] + ".js", createBaseProject(), function(err) {

    if(err) {
        return console.log(err);
    }

    console.log("A Sample Bayside App Was Created!");
});