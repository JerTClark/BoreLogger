/**
 * Created by Clark on 12/6/2014.
 */

//-- Modules
var http = require("http");
var express = require("express");
var errorHandler = require("errorhandler");
namespace = require("express-namespace");
resource = require("express-resource");

//-- The Express app
var app = new express();

//-- My routes module (pass app as param)
require("./my_modules/routes.js")(app);

//-- Set a static resource on this filesystem that this app can use
app.use(express.static("./public"));

//-- Setting the view engine to Jade
app.set("view engine", "jade");

//-- Where to find the views
app.set("views", "./views");

//-- TODO Remove in production
if(app.get("env")==="development") {
    app.use(errorHandler());
}//end if

//-- The server
http.createServer(app).listen(3113, function(){
    console.log("Jeremy\'s Node.js-Express server started");
});//-- Could also use code below