/**
 * A faster way to verify the mock-locates.js data once it's been entered into
 * a Locates Modal test
 * @Usage verifier = new MockLocatesVerifier(); verifier.verify()
 * @type {function(): module.exports|exports}
 */
var ReferenceJS = require("../ref.js"),
    Reference = new ReferenceJS(),
    pageObjects = Reference.pageObjects,
    utils = Reference.utils,
    mockData = Reference.mockData,
    Nav = require("../../" + utils.folder + "/nav.js"),
    up = new Nav();

var BrowserHelper = require(up.two + utils.browserHelper),
    MockLocateListItems = require(up.one + pageObjects.mockLocatesListItem);
var browserHelper = new BrowserHelper(),
    mockLocatesListItems = new MockLocateListItems(),
    verifyLocates = require(up.zero + "mock-locates-verify.js");

module.exports = function () {
    return {
        verify: function () {
            browserHelper.scroll(mockLocatesListItems.locateListItem0);
            expect(mockLocatesListItems.locateListItem0.getText()).toEqual(verifyLocates[0]);
            browserHelper.scroll(mockLocatesListItems.locateListItem1);
            expect(mockLocatesListItems.locateListItem1.getText()).toEqual(verifyLocates[1]);
            browserHelper.scroll(mockLocatesListItems.locateListItem2);
            expect(mockLocatesListItems.locateListItem2.getText()).toEqual(verifyLocates[2]);
            browserHelper.scroll(mockLocatesListItems.locateListItem3);
            expect(mockLocatesListItems.locateListItem3.getText()).toEqual(verifyLocates[3]);
            browserHelper.scroll(mockLocatesListItems.locateListItem4);
            expect(mockLocatesListItems.locateListItem4.getText()).toEqual(verifyLocates[4]);
        }
    }
};