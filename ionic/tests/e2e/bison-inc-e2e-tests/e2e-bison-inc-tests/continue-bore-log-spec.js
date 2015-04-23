/**
 * Warning: this spec contains especially long running tests
 */
xdescribe("Continuing a Bore Log", function () {
    var ReferenceJS = require("./../ref.js"),
        Reference = new ReferenceJS(),
        pageObjects = Reference.pageObjects,
        utils = Reference.utils,
        mockData = Reference.mockData,
        Nav = require("../../" + utils.folder + "/nav.js"),
        up = new Nav();

    /*Constructors*/
    var BrowserHelper = require(up.two + utils["browserHelper"]),
        HomeState = require(up.one + pageObjects["homeState"]),
        ContinueBoreLogState = require(up.one + pageObjects["continueState"]),
        NewBoreLogState = require(up.one + pageObjects["newBoreLogState"]),
        MockLocatesVerifier = require(up.one + mockData["mockLocatesVerifier"]),
        mock = require(up.one + mockData["mockGenInfoBoreLog"]);

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        homeState = new HomeState(),
        continueBoreLogState = new ContinueBoreLogState(),
        newBoreLogState = new NewBoreLogState(),
        verifier = new MockLocatesVerifier();

    beforeEach(function () {
        homeState.get();
        homeState.createBoreLogButton.click();
    });

    it("should let user add, resume interaction with, and delete a record from indexedDB", function () {
        var currentCount = 0;
        continueBoreLogState.records.count().then(function (num) {
            currentCount = num;
        });
        newBoreLogState.fillOutNewBoreLogForm();
        newBoreLogState.goToLocatesModalBoreLog();
        newBoreLogState.enterMockLocates();
        newBoreLogState.showLocatesList();
        newBoreLogState.saveAndQuit();
        browserHelper.scroll(homeState.continueBoreLogButton);
        homeState.continueBoreLogButton.click();
        expect(continueBoreLogState.records.count()).toEqual(currentCount + 1);
        browserHelper.swipeLeft("#continue-item-0");
        browserHelper.waitForElement(continueBoreLogState.selectButton0);
        continueBoreLogState.selectButton0.click();
        expect(homeState.ionNavBar.getText()).toEqual("Continue log\nGeneral info");
        newBoreLogState.verifyMockBoreLogGenInfo();
        newBoreLogState.goToLocatesModalBoreLog();
        newBoreLogState.showLocatesList();
        verifier.verify();
        newBoreLogState.saveAndQuit();
        browserHelper.swipeLeft("#continue-item-0");
        browserHelper.waitForElement(continueBoreLogState.deleteButton0);
        continueBoreLogState.deleteButton0.click();
        browserHelper.waitForElement(continueBoreLogState.confirmOK);
        continueBoreLogState.confirmOK.click();
        if(currentCount === 0) {
            expect(continueBoreLogState.records.count()).toEqual(0);
        } else {
            expect(continueBoreLogState.records.count()).toEqual(currentCount - 1);
        }
    }, 500000);

    it("should persist each bore log as a separate database entry", function () {
        var currentCount = 0;
        continueBoreLogState.records.count().then(function (num) {
            currentCount = num;
        });
        newBoreLogState.enterMultipleBoreLogs();
        newBoreLogState.backButton.click();
        homeState.continueBoreLogButton.click();
        expect(continueBoreLogState.records.count()).toEqual(currentCount + 5);
    }, 500000);

});