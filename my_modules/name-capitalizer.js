/**
 * Created by Clark on 12/6/2014.
 */

//-- Capitalize a single name
var oneAtATime = function (name) {
    var firstLetter = name.charAt(0).toUpperCase();
    var restOfIt = name.substring(1, name.length);
    return firstLetter + restOfIt;
};

//-- Capitalize each name
var fullNameMaker = function (name) {
    var names = name.toString().split(" ");
    var fullName = "";
    for (var i = 0; i < names.length; i++) {
        if (i !== names.length - 1) fullName += oneAtATime(names[i]) + " ";
        else fullName += oneAtATime(names[i]);
    }
    return fullName;
};

//-- The export is a function
module.exports = function (name) {
    //-- If the name contains a space
    if (name.indexOf(" ") > 0) {
        return fullNameMaker(name);
    } else {
        return oneAtATime(name);
    }//end if-else
    //return oneAtATime(name);
};