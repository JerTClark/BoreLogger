/**
 * Created by Clark on 12/6/2014.
 */

module.exports = function(app){

    //-- Home (index)
    app.get("/", function(req, res){
        var title = "Bison, Inc.";
        res.render("index", {title:title});
    });

    //-- Production routes in the borelogger namespace
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