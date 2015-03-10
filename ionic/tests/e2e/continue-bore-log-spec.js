xdescribe("Continuing a Bore Log", function () {
    var PRE = "./e2e-bison-page-objects/";

    /*Constructors*/
    var BrowserHelper = require("./e2e-utils/browser-helper.js"),
        HomeState = require(PRE + "home-state.js"),
        ContinueBoreLogState = require(PRE + "continue-state.js"),
        NewBoreLogState = require(PRE + "new-bore-log-state.js"),
        MockLocatesVerifier = require("./e2e-mock-data/mock-locates-verifier.js");

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        homeState = new HomeState(),
        continueBoreLogState = new ContinueBoreLogState(),
        newBoreLogState = new NewBoreLogState(),
        verifier = new MockLocatesVerifier(),
        mock = require("./e2e-mock-data/mock-gen-info-bore-log.js");

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
    });

    it("should persist each bore log as a separate database entry", function () {
        var currentCount = 0;
        continueBoreLogState.records.count().then(function (num) {
            currentCount = num;
        });
        newBoreLogState.enterMultipleBoreLogs();
        newBoreLogState.backButton.click();
        homeState.continueBoreLogButton.click();
        expect(continueBoreLogState.records.count()).toEqual(currentCount + 5);
    }, 100000);

});