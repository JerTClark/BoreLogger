describe("Continuing a Bore Log", function () {
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

    it("should display and entry added to the database and allow a user to resume interaction with it", function () {
        newBoreLogState.fillOutNewBoreLogForm();
        newBoreLogState.goToLocatesModalBoreLog();
        newBoreLogState.enterMockLocates();
        newBoreLogState.showLocatesList();
        newBoreLogState.saveAndQuit();
        browserHelper.scroll(homeState.continueBoreLogButton);
        homeState.continueBoreLogButton.click();
        continueBoreLogState.swipeLeftItem0();
        continueBoreLogState.selectButton0.click();
        expect(homeState.ionNavBar.getText()).toEqual("Continue log\nGeneral info");
        newBoreLogState.verifyMockBoreLogGenInfo();
        newBoreLogState.goToLocatesModalBoreLog();
        newBoreLogState.showLocatesList();
        verifier.verify();
    });

    xit("should have a select element that reorders the database entries", function () {

    });

    xit("should reveal saved database entries", function () {

    });
});