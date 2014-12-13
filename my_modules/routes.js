/**
 * Created by Clark on 12/6/2014.
 */
var nameCaps = require("./name-capitalizer.js");
var iniParser = require("iniparser");
var config = iniParser.parseSync("./config.ini");


module.exports = function(app){

    var title;
    var header;
    var customString;

    app.resource("users", require("./users.js"), null);

    app.get("/", function(req, res){
        title = "Root page";
        header = "Welcome to Home!";
        customString = "I hope this all pays off!";
        res.render("standard", {title:title, headerOne: header, message: customString});
    });

    //-- Demonstrating using a config.ini file and iniParser
    //-- Note the object passed after the jade file name
    app.get("/ini", function(req, res){
        res.render("from-ini", {title:config.title, headerOne:config.heading, message:config.message});
    });

    //-- Show whatever page number comes after "/page/" (ie /page/123)
    app.get("/page/:number", function(req, res){
        var obj = {
            tit:"Page",
            head:"Page Requested:",
            mess:"Page No. " + req.params.number
        };
        res.render("standardUpDir", {title:obj.tit, headerOne:obj.head, message:obj.mess});
    });

    //-- Show the client IP Address
    app.get("/my-ip/", function(req, res){
        title = "IP";
        header = "My IP Address";
        customString = req.ip;
        res.render("standardUpDir", {title:title, headerOne:header, message:customString});
    });

    //-- Show a "Hello :name" message for "/name/:name"
    app.get("/name/:name", function(req, res){
        var name = req.params.name;
        customString = "It\'s great to meet you, " + nameCaps(name) + "!";
        title = "Hello!";
        header = "Hi!";
        res.render("standardUpDir", {title:title, headerOne:header, message:customString});
    });

    app.get("/includes", function(req, res) {
        res.render("includes");
    });

    app.get("/inherit", function(req, res){
        res.render("content");
    });

    //-- Production routes in the Borelogger namespace
    app.namespace("/borelogger", function(){

        app.get("/", function(req,res){
            res.render("options");
        });

    });
};