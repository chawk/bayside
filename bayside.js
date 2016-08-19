function createApplication(config) {
    const http = require('http'),
    fs = require('fs'),
    port = config.port ? config.port : 3000,
    jsonBody = require("body/json"),
    self = this;

    // views
    self.views = {
        index: function (request, response) {
            self.template(request, response, './index.html')
        },
        page404: function (request, response) {
            response.writeHeader(404, {"Content-Type": "text/html"});  
            response.write("Page Not Found");  
            response.end();
        },
        page500: function (request, response, error) {
            response.writeHeader(500, {"Content-Type": "text/html"});  
            response.write("Server 500: " + error);  
            response.end();
        }
    }

    self.template = function(request, response, filename) {
        fs.readFile(filename, function (err, html) {
                if (err) {
                    self.views.page500(request, response, err);
                    return console.log('something bad happened', err);
                }

                response.writeHeader(200, {"Content-Type": "text/html"});  
                response.write(html);
                response.end();
            });
    }

    // urls 
    self.urls = { 
        '/': self.views.index
    }

    self.staticHandler = function (request, response) {
        fs.readFile((config.root + request.url), 'UTF-8', function (err, file) {

                if (err) {
                    self.views.page500(request, response, err);
                    return console.log('something bad happened', err);
                }

                var fileType = request.url.split('.').pop();
                switch (fileType) {
                    case "css":
                        response.writeHeader(200, {"Content-Type": "text/css"});
                        break;
                    case "gif":
                        response.writeHeader(200, {"Content-Type": "image/gif"});
                        break;
                    case "jpg":
                        response.writeHeader(200, {"Content-Type": "image/jpeg"});
                        break;
                    case "jpeg":
                        response.writeHeader(200, {"Content-Type": "image/jpeg"});
                        break;
                    case "js":
                        response.writeHeader(200, {"Content-Type": "text/javascript"});
                        break;
                    case "png":
                        response.writeHeader(200, {"Content-Type": "image/png"});
                        break;
                    default:
                        break;                  
                }
                
                response.write(file);
                response.end();
            });
    }

    // any server requests that post data should be sent here
    self.parseJson = function (request, response, callback) {
        jsonBody(request, response, function (err, body) {
            if (err) {
                console.log("error with parseJson function " + err);
            }
            
            callback(body);
        });
    }

    // standard json response
    self.returnJson = function (response, json) {
        json = JSON.stringify(json);
        response.writeHeader(200, {"Content-Type": "application/json"}); 
        response.write(json);
        response.end();
    }

    self.requestHandler = (request, response) => {
        if (request.url.includes("%7Broot%7D")) {
            request.url = request.url.replace("%7Broot%7D/", "");
            return self.staticHandler(request, response);
        }

        var url = self.urls[request.url];
        if (url) {
            return url(request, response)
        }

        return self.views.page404(request, response);
    }

    const server = http.createServer(self.requestHandler)

    // error handler
    server.listen(port, (err) => {  
    if (err) {
        self.views.page500(request, response, err);
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
    })
}

exports = module.exports = createApplication;