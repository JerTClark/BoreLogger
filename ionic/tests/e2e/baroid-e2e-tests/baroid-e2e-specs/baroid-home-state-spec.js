/**
 * Pretty much testing a landing screen that has (at time of writing)
 * four different buttons.
 */
xdescribe("BaroidState", function () {

    /*Easier resource management in event of refactoring*/
    var ReferenceJS = require("./../ref.js"),
        Reference = new ReferenceJS(),
        pageObjects = Reference.pageObjects,
        utils = Reference.utils,
        mockData = Reference.mockData,
        Nav = require("../../" + utils.folder + "/nav.js"),
        up = new Nav();

    /*Constructors*/
    var BrowserHelper = require(up.two + utils.browserHelper),
        BaroidHomeState = require(up.one + pageObjects.homeState);

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        baroidHomeState = new BaroidHomeState();

    beforeEach(function () {
        baroidHomeState.get();
    });

    xit("should pass the test", function () {
        expect(baroidHomeState.test).toEqual(4);
    });

    it("should have the right title: Calculators", function () {
        expect(baroidHomeState.ionNavBar.getText()).toEqual("Calculators");
    });

    xit("should have a title card with the correct strings", function () {

    });

    it("should have the appropriate buttons", function () {
        expect(baroidHomeState.cubicFPMButton).toBeDefined();
        expect(baroidHomeState.annularVelocityButton).toBeDefined();
        expect(baroidHomeState.hddPullbackButton).toBeDefined();
        expect(baroidHomeState.chartsButton).toBeDefined();
    });

    it("should navigate to the correct state based on button clicks", function () {
        baroidHomeState.hddPullbackButton.click();
        expect(baroidHomeState.ionNavBar.getText()).toEqual("Options\nPullback recommendations");
    });

});