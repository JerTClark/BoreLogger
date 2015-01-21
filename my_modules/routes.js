/**
 * Created by Clark on 12/6/2014.
 */
var nameCaps = require("./name-capitalizer.js");

module.exports = function(app){

    var title;
    var header;
    var customString;

    //-- Home (index)
    app.get("/", function(req, res){
        title = "Bison, Inc.";
        header = "Welcome to Home!";
        customString = "I hope this all pays off!";
        res.render("index", {title:title, headerOne: header, message: customString});
    });

    //-- Production routes in the Borelogger namespace
    app.namespace("/borelogger", function(){

        app.get("/", function(req,res){
            res.render("options");
        });

        app.post("/log", function(req, res){

        });

        app.post("/journal", function(req, res){

        });

    });
};