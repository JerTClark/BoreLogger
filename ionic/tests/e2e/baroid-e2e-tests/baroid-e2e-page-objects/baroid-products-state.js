/**/

/*Easier resource management in event of refactoring*/
var ReferenceJS = require("./../ref.js"),
    Reference = new ReferenceJS(),
    pageObjects = Reference.pageObjects,
    utils = Reference.utils,
    mockData = Reference.mockData,
    Nav = require("../../" + utils.folder + "/nav.js"),
    up = new Nav();

var BrowserHelper = require(up.two + utils.browserHelper),
    browserHelper = new BrowserHelper();

module.exports = function () {
    return {

    }
};