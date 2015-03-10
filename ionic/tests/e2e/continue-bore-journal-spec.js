describe("Continuing a Bore Journal", function () {
    var PRE = "./e2e-bison-page-objects/";

    /*Constructors*/
    var BrowserHelper = require("./e2e-utils/browser-helper.js"),
        HomeState = require(PRE + "home-state.js"),
        ContinueBoreJournalState = require(PRE + "continue-state.js"),
        NewBoreJournalState = require(PRE + "new-bore-log-state.js"),
        MockLocatesVerifier = require("./e2e-mock-data/mock-locates-verifier.js");

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        homeState = new HomeState(),
        continueBoreJournalState = new ContinueBoreJournalState(),
        newBoreJournalState = new NewBoreJournalState(),
        verifier = new MockLocatesVerifier(),
        mock = require("./e2e-mock-data/mock-gen-info-bore-log.js");

    beforeEach(function () {
        homeState.get();
        homeState.createBoreJournalButton.click();
    });

    xit("should let user add, resume interaction with, and delete a record from indexedDB", function () {
        var currentCount = 0;
        continueBoreJournalState.records.count().then(function (num) {
            currentCount = num;
        });
        newBoreJournalState.fillOutNewBoreJournalForm();
        newBoreJournalState.goToLocatesModalBoreJournal();
        newBoreJournalState.enterMockLocates();
        newBoreJournalState.showLocatesList();
        newBoreJournalState.saveAndQuit();
        browserHelper.scroll(homeState.continueBoreJournalButton);
        homeState.continueBoreJournalButton.click();
        expect(continueBoreJournalState.records.count()).toEqual(currentCount + 1);
        browserHelper.swipeLeft("#continue-item-0");
        browserHelper.waitForElement(continueBoreJournalState.selectButton0);
        continueBoreJournalState.selectButton0.click();
        expect(homeState.ionNavBar.getText()).toEqual("Continue journal\nGeneral info");
        newBoreJournalState.verifyMockBoreJournalGenInfo();
        newBoreJournalState.goToLocatesModalBoreJournal();
        newBoreJournalState.showLocatesList();
        verifier.verify();
        newBoreJournalState.saveAndQuit();
        browserHelper.swipeLeft("#continue-item-0");
        browserHelper.waitForElement(continueBoreJournalState.deleteButton0);
        continueBoreJournalState.deleteButton0.click();
        browserHelper.waitForElement(continueBoreJournalState.confirmOK);
        continueBoreJournalState.confirmOK.click();
        if(currentCount === 0) {
            expect(continueBoreJournalState.records.count()).toEqual(0);
        } else {
            expect(continueBoreJournalState.records.count()).toEqual(currentCount - 1);
        }
    });

    it("should persist each bore journal as a separate database entry", function () {
        var currentCount = 0;
        continueBoreJournalState.records.count().then(function (num) {
            currentCount = num;
        });
        newBoreJournalState.enterMultipleBoreJournals();
        newBoreJournalState.backButton.click();
        homeState.continueBoreJournalButton.click();
        expect(continueBoreJournalState.records.count()).toEqual(currentCount + 5);
    }, 100000);

});