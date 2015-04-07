/**
 * Created by Clark on 12/6/2014.
 */

//-- Modules
var http = require("http");
var express = require("express");
var errorHandler = require("errorhandler");
//var methodOverride = require("express-method-override");
var namespace = require("express-namespace");

//-- The Express app
var app = new express();

//-- My routes module (pass app as param)
require("./js/routes/routes.js")(app);

//-- Stylus middleware
//app.use(require("stylus").middleware("./public"));

//-- Set a static resource on this filesystem that this app can use
app.use(express.static("./www/"));

//-- Setting the view engine to Jade
app.set("view engine", "jade");
//-- Where to find the views
app.set("views", "www/html");

//-- Method override
//app.use(methodOverride);

//-- TODO Remove in production
if(app.get("env")==="development") {
    app.use(errorHandler());
}//end if

//-- The server
var port = 3113;
http.createServer(app).listen(port, function(){
    console.log("Accepting connections on localhost:" + port);
});//-- Could also use code below