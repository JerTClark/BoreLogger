/**
 * Page object for annular velocity state
 */
/*Easier resource management in event of refactoring*/
var ReferenceJS = require("./../ref.js"),
    Reference = new ReferenceJS(),
    pageObjects = Reference.pageObjects,
    utils = Reference.utils,
    mockData = Reference.mockData,
    Nav = require("../../" + utils.folder + "/nav.js"),
    up = new Nav();

var BrowserHelper = require(up.two + utils.browserHelper),
    browserHelper = new BrowserHelper(),
    AVMockData = require(up.one + mockData.avMockData),
    avMockData = new AVMockData();

module.exports = function() {
    return {
        "test": 10/2,
        "drillBitDiameterInput": element(by.id("drillBitDiameter0")),
        "drillPipeDiameterInput":element(by.id("drillPipeDiameter1")),
        "pumpOutputInput":element(by.id("pumpOutput2")),
        "adviceNoteTitle":element(by.id("advice-title")),
        "adviceNoteResult":element(by.id("advice-result")),
        "warningNoteTitle":element(by.id("warning-title")),
        "warningNoteResult":element(by.id("warning-result")),
        "ruleOfThumbTitle":element(by.id("ruleOfThumb-title")),
        "ruleOfThumbResult":element(by.id("ruleOfThumb-result"))
    }
};