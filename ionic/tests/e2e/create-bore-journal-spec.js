xdescribe("Creating a New Bore Journal", function () {
    var PRE = "./e2e-bison-page-objects/";
    /*Constructors*/
    var BrowserHelper = require("./e2e-utils/browser-helper.js"),
        HomeState = require(PRE + "home-state.js"),
        NewBoreJournalState = require(PRE + "new-bore-log-state.js"),
        LocatesModal = require(PRE + "locates-modal.js"),
        MockLocateListItems = require(PRE + "mock-locates-list-items.js"),
        MockLocatesVerifier = require("./e2e-mock-data/mock-locates-verifier.js");

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        homeState = new HomeState(),
        newBoreJournalState = new NewBoreJournalState(),
        locatesModal = new LocatesModal(),
        mockLocatesListItems = new MockLocateListItems(),
        mock = require("./e2e-mock-data/mock-gen-info-bore-log.js"),
        locates = require("./e2e-mock-data/mock-locates.js"),
        verifyLocates = require("./e2e-mock-data/mock-locates-verify.js"),
        mockLocatesVerifier = new MockLocatesVerifier();

    beforeEach(function () {
        homeState.get();
        homeState.createBoreJournalButton.click();
    });

    it("should have 2 visible categories each with 2 descriptions", function () {
        //expect(newBoreJournalState.allElements.count()).toEqual(2);

        newBoreJournalState.customerCategory.click();
        expect(newBoreJournalState.customerCategoryDescription.getText()).toEqual("the company for whom the work is performed");
        newBoreJournalState.customerCategory.click();

        newBoreJournalState.locationCategory.click();
        expect(newBoreJournalState.locationCategoryDescription.getText()).toEqual("place most readily associated with the job site");
        newBoreJournalState.locationCategory.click();
    });

    it("should display 2 input fields", function () {
        newBoreJournalState.fillOutNewBoreJournalForm();
        expect(newBoreJournalState.customerInput.getAttribute("value")).toEqual(mock.customer);
        expect(newBoreJournalState.locationInput.getAttribute("value")).toEqual(mock.location);
    });

    it("should have 1 button for adding locates that is disabled until all required fields are valid", function () {
        /*This is the button that should be disabled*/
        browserHelper.scroll(newBoreJournalState.topButton);
        expect(newBoreJournalState.topButton.getAttribute("disabled")).toEqual("true");
        /*Fill out the form*/
        newBoreJournalState.fillOutNewBoreJournalForm();
        browserHelper.scroll(newBoreJournalState.topButton);
        expect(newBoreJournalState.topButton.getAttribute("disabled")).toBeNull();
    });

    it("should allow you quit", function () {
        expect(newBoreJournalState.ionNavBar.getText()).toEqual("Options\nGeneral info");
        browserHelper.scroll(newBoreJournalState.bottomButton);
        newBoreJournalState.bottomButton.click();
        newBoreJournalState.saveAndQuitPopup.cancelButton.click();
        expect(newBoreJournalState.ionNavBar.getText()).toEqual("Options\nGeneral info");
        browserHelper.scroll(newBoreJournalState.bottomButton);
        newBoreJournalState.bottomButton.click();
        newBoreJournalState.saveAndQuitPopup.okButton.click();
        expect(homeState.ionNavBar.getText()).toEqual("Options");
    });

    it("should let you open the locates modal once the form is valid", function () {
        /*Fill out the form*/
        newBoreJournalState.fillOutNewBoreJournalForm();
        newBoreJournalState.goToLocatesModalBoreJournal();
        expect(locatesModal.locatesModalTitle.getText()).toEqual("Bore journal locates");
    });

    it("should let you enter locates, recording them accurately", function () {
        newBoreJournalState.fillOutNewBoreJournalForm();
        newBoreJournalState.goToLocatesModalBoreJournal();
        newBoreJournalState.enterMockLocates();
        newBoreJournalState.showLocatesList();
        mockLocatesVerifier.verify();
        newBoreJournalState.saveAndQuit();
    });

});