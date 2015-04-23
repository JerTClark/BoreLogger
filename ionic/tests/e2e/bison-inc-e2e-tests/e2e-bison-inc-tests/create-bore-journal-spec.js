xdescribe("Creating a New Bore Journal", function () {
    var PRE = "./e2e-bison-page-objects/";

    /*Easier refactoring of resources through these utils*/
    var ReferenceJS = require("./../ref.js"),
        Reference = new ReferenceJS(),
        pageObjects = Reference.pageObjects,
        utils = Reference.utils,
        mockData = Reference.mockData,
        Nav = require("../../" + utils.folder + "/nav.js"),
        up = new Nav();

    /*Constructors*/
    var BrowserHelper = require(up.one + utils.browserHelper),
        HomeState = require(up.zero + pageObjects["homeState"]),
        NewBoreJournalState = require(up.zero + pageObjects["newBoreLogState"]),
        LocatesModal = require(up.zero + pageObjects["locatesModal"]),
        MockLocateListItems = require(up.zero + pageObjects["mockLocatesListItem"]),
        MockLocatesVerifier = require(up.zero + mockData["mockLocatesVerifier"]);

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        homeState = new HomeState(),
        newBoreJournalState = new NewBoreJournalState(),
        locatesModal = new LocatesModal(),
        mockLocatesListItems = new MockLocateListItems(),
        mock = require(up.one + mockData["mockGenInfoBoreLog"]),
        locates = require(up.one + mockData["mockLocates"]),
        verifyLocates = require(up.one + mockData["mockLocatesVerify"]),
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