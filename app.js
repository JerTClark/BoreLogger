/**
 * Created by Clark on 12/6/2014.
 */

//-- Modules
var http = require("http");
var express = require("express");
var errorHandler = require("errorhandler");
var formidable = require("formidable");
var fs_extra = require("fs-extra");
var methodOverride = require("express-method-override");
namespace = require("express-namespace");
resource = require("express-resource");

//-- The Express app
var app = new express();

//-- My routes module (pass app as param)
require("./backend/routes/routes.js")(app);

//-- Stylus middleware
app.use(require("stylus").middleware("./public"));

//-- Set a static resource on this filesystem that this app can use
app.use(express.static("./backend"));
app.use(express.static("./assets"));
app.use(express.static("./lib"));

//-- Setting the view engine to Jade
app.set("view engine", "jade");

//-- Where to find the views
app.set("views", "./backend/views");

//-- Method override
app.use(methodOverride);

//-- TODO Remove in production
if(app.get("env")==="development") {
    app.use(errorHandler());
}//end if

//-- The server
var port = 3113;
http.createServer(app).listen(port, function(){
    console.log("Node.js-Express server starting on the localhost:" + port);
    console.log("Bison, Inc. is now online and accepting connections.");
});//-- Could also use code below