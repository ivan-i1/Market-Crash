// // Require the stuff we need
// var express = require("express");
// var http = require("http");

// // Build the app
// var app = express();

// // Add some middleware
// app.use(function(request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Hello world!\n");
// });

// // Start it up!
// http.createServer(app).listen(8000);
// var express = require("express");
// var http = require("http");
// var app = express();

// // Logging middleware
// app.use(function(request, response, next) {
//   console.log("In comes a " + request.method + " to " + request.url);
//   next();
// });

// // Send "hello world"
// app.use(function(request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Hello world!\n");
// });

// http.createServer(app).listen(8000);
var express = require("express");
var logger = require("morgan");
var http = require("http");
var app = express();

app.use(logger());

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("*", function(request, response) {
  response.end("404!");
});

app.post("post/", function(req, res){

	console.log(req);
	response.end("POST successfull");
});

http.createServer(app).listen(8000);