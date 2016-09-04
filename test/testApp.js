const expect= require("chai").expect;
const request= require('request');

const Bayside = require('../bayside');

// custom user variables
const config = {
    root: __dirname,
    port: 8080,
    templates: '.'
}

const app = new Bayside(config);

// views
app.views.index = function (request, response) {
    app.returnJson(response, {
		page: "Index"
	});
}

// urls
app.urls['/'] = {
	method: "get",
	controller: 'index'
};

app.urls['/api'] = {
	method: "get",
	controller(request, response) {
		app.returnJson(response, {
			hello: "World"
		});
	}
};



describe('Testing JSON routes', function() {

	// Testing the index route (/)
	describe('index route', function() {

		const url= `http://127.0.0.1:${config.port}/`;

		it('should respond with json {"page":"Index"}', function() {
			request(url, function(err, res, body) {
				if(err) throw err;

				expect(body).to.equal('{"page":"Index"}');
			});
		});
	});

	// Testing the api route (/api)
	describe('api route', function() {

		const url= `http://127.0.0.1:${config.port}/api`;

		it('should respond with json {"hello":"World"}', function() {
			request(url, function(err, res, body) {
				if(err) throw err;

				expect(body).to.equal('{"hello":"World"}');
			});
		});
	});

});