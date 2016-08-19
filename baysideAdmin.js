var fs = require('fs'),
        self = this
        dir = './static',
        dir2 = './static/css'

// create these directories.  
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
}

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

createCss = function () {
    return `
        h1 { color: red }
    `
}

createIndex = function () {
    return `
        <html>
            <head>
                <title>Sample Bayside App</title>
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <link rel="stylesheet" href="{root}/static/css/main.css" />
            </head>
            <body>
                <h1>Your Bayside App is Running!</h1>
            </body>
        </html>
    `
}


fs.writeFile("./" + process.argv[2] + ".js", createBaseProject(), function(err) {
    if(err) {
        return console.log(err);
    }
});

fs.writeFile("./static/css/main.css", createCss(), function(err) {
    if(err) {
        return console.log(err);
    }
});

fs.writeFile("./index.html", createIndex(), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Your Bayside App Was Created!")
});