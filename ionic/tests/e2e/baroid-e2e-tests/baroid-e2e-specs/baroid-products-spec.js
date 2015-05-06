/**/
describe("", function () {

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
        BaroidHomeState = require(up.one + pageObjects.homeState),
        baroidHomeState = new BaroidHomeState();

    beforeEach(function () {
        baroidHomeState.goToProductsState();
    });

    it("should display the correct title in the ion-nav-bar", function () {
        expect(baroidHomeState.ionNavBar.getText()).toEqual("Options\nProducts");
    });

});