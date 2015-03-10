/**
 * A faster way to verify the mock-locates.js data once it's been entered into
 * a Locates Modal test
 * @Usage verifier = new MockLocatesVerifier(); verifier.verify()
 * @type {function(): module.exports|exports}
 */
var BrowserHelper = require("../e2e-utils/browser-helper.js"),
    MockLocateListItems = require("../e2e-bison-page-objects/mock-locates-list-items.js");
var browserHelper = new BrowserHelper(),
    mockLocatesListItems = new MockLocateListItems(),
    verifyLocates = require("../e2e-mock-data/mock-locates-verify.js");

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