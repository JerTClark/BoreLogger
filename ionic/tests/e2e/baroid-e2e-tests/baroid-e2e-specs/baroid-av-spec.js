xdescribe("Baroid Annular Velocity calculator", function () {

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
        BaroidHomeState = require(up.one + pageObjects.homeState),
        BaroidAVState = require(up.one + pageObjects.avState),
        AVMockData = require(up.one + mockData.avMockData),
        AVExpectedResults = require(up.one + mockData.avExpectedResults);

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        baroidHomeState = new BaroidHomeState(),
        baroidAVState = new BaroidAVState(),
        avMockData = new AVMockData(),
        avExpectedResults = new AVExpectedResults();

    beforeEach(function () {
        baroidHomeState.goToAVState();
    });

    it("should pass a simple test", function () {
        expect(baroidAVState.test).toEqual(5);
    });

    it("should display the correct title in the ion-nav-bar", function () {
        expect(baroidHomeState.ionNavBar.getText()).toEqual("Options\nAnnular velocity");
    });

    it("should have all its members defined", function () {
        expect(baroidAVState.drillBitDiameterInput).toBeDefined();
        expect(baroidAVState.drillPipeDiameterInput).toBeDefined();
        expect(baroidAVState.pumpOutputInput).toBeDefined();
        expect(baroidAVState.adviceNoteTitle).toBeDefined();
        expect(baroidAVState.adviceNoteResult).toBeDefined();
        expect(baroidAVState.warningNoteTitle).toBeDefined();
        expect(baroidAVState.warningNoteResult).toBeDefined();
        expect(baroidAVState.ruleOfThumbTitle).toBeDefined();
        expect(baroidAVState.ruleOfThumbResult).toBeDefined();
    });

    it("should accurately calculate both annular velocity and the corresponding notes", function () {
        baroidAVState.drillBitDiameterInput.sendKeys(avMockData["drillBitDiameter"]);
        baroidAVState.drillPipeDiameterInput.sendKeys(avMockData["drillPipeDiameter"]);
        baroidAVState.pumpOutputInput.sendKeys(avMockData["pumpOutput"]);
        browserHelper.scroll(baroidAVState.adviceNoteResult);
        expect(baroidAVState.adviceNoteResult.getText()).toEqual(avExpectedResults["adviceNoteResult"]);
        browserHelper.scroll(baroidAVState.warningNoteResult);
        expect(baroidAVState.warningNoteResult.getText()).toEqual(avExpectedResults["warningNoteResult"]);
        browserHelper.scroll(baroidAVState.ruleOfThumbResult);
        expect(baroidAVState.ruleOfThumbResult.getText()).toEqual(avExpectedResults["ruleOfThumb"]);
    });
});