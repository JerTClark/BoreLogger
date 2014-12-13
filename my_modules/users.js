/**
 * Created by Clark on 12/8/2014.
 * To demonstrate resourceful routing
 */

exports.index = function(req, res){
    res.send("Index of users");
};

exports.new = function(req, res){
    res.send("Form for new user");
};

exports.create = function(req, res){
    res.send("Handle form and create new user");
};

exports.show = function(req, res){
    res.send("Show user " + req.params.user);
};

exports.edit = function(req, res){
    res.send("Form to edit user " + req.params.user);
};

exports.update = function(req, res){
    res.send("Handle form to edit user " + req.params.user);
};

exports.destroy = function(req, res){
    res.send("Delete user " + req.params.user);
};