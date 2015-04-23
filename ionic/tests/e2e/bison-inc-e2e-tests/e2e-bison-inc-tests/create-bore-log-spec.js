xdescribe("Creating a New Bore Log", function () {

    /*Easier resource management in the event of refactoring*/
    var ReferenceJS = require("./../ref.js"),
        Reference = new ReferenceJS(),
        pageObjects = Reference.pageObjects,
        utils = Reference.utils,
        mockData = Reference.mockData,
        Nav = require("../../" + utils.folder + "/nav.js"),
        up = new Nav();

    /*Constructors*/
    var BrowserHelper = require(up.two + utils.browserHelper),
        HomeState = require(up.one + pageObjects.homeState),
        NewBoreLogState = require(up.one + pageObjects.newBoreLogState),
        LocatesModal = require(up.one + pageObjects.locatesModal),
        MockLocateListItems = require(up.one + pageObjects.mockLocatesListItem),
        mock = require(up.one + mockData.mockGenInfoBoreLog),
        locates = require(up.one + mockData.mockLocates),
        verifyLocates = require(up.one+ mockData.mockLocatesVerify),
        MockLocatesVerifier = require(up.one + mockData.mockLocatesVerifier);

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        homeState = new HomeState(),
        newBoreLogState = new NewBoreLogState(),
        locatesModal = new LocatesModal(),
        mockLocatesListItems = new MockLocateListItems(),
        mockLocatesVerifier = new MockLocatesVerifier();

    beforeEach(function () {
        homeState.get();
        homeState.createBoreLogButton.click();
    });

    /*This portion of the UI has been redesigned*/
    xit("should have 6 categories and 6 descriptions", function () {
        /**
         * Note: the value of 1 is representative of the drillPipeLength
         * Category (which is not to be included in the ngRepeat
         */
        var theDrillPipeCategory = 1;
        expect(newBoreLogState.allElements.count()).toEqual(6 - theDrillPipeCategory);

        newBoreLogState.customerCategory.click();
        expect(newBoreLogState.customerCategoryDescription.getText()).toEqual("the company for whom the work is performed");
        newBoreLogState.customerCategory.click();

        newBoreLogState.conduitCategory.click();
        expect(newBoreLogState.conduitCategoryDescription.getText()).toEqual("product (for ex., (1) 12\" Plastic)");
        newBoreLogState.conduitCategory.click();

        newBoreLogState.locationCategory.click();
        expect(newBoreLogState.locationCategoryDescription.getText()).toEqual("place most readily associated with the job site");
        newBoreLogState.locationCategory.click();

        browserHelper.scroll(newBoreLogState.lengthOfBoreCategory);
        newBoreLogState.lengthOfBoreCategory.click();
        expect(newBoreLogState.lengthOfBoreCategoryDescription.getText()).toEqual("footage drilled (no comma, just the number)");
        newBoreLogState.lengthOfBoreCategory.click();

        browserHelper.scroll(newBoreLogState.dateCategory);
        newBoreLogState.dateCategory.click();
        expect(newBoreLogState.dateCategoryDescription.getText()).toEqual("start or end of the job");
        newBoreLogState.dateCategory.click();

        browserHelper.scroll(newBoreLogState.drillPipeCategory);
        newBoreLogState.drillPipeCategory.click();
        expect(newBoreLogState.drillPipeCategoryDescription.getText()).toEqual("length of drill pipe used");
        newBoreLogState.drillPipeCategory.click();

    });

    it("should display 5 input fields and 1 toggle to the user for input", function () {
        newBoreLogState.fillOutNewBoreLogForm();
        browserHelper.scroll(newBoreLogState.drillPipeToggle);
        newBoreLogState.drillPipeToggle.click();

        expect(newBoreLogState.customerInput.getAttribute("value")).toEqual(mock.customer);
        expect(newBoreLogState.conduitInput.getAttribute("value")).toEqual(mock.conduit);
        expect(newBoreLogState.locationInput.getAttribute("value")).toEqual(mock.location);
        expect(newBoreLogState.lengthOfBoreInput.getAttribute("value")).toEqual(mock.lengthOfBore);
        expect(newBoreLogState.dateInput.getAttribute("value")).toEqual("2004-04-27");
        /*Date value format*/
        expect(newBoreLogState.drillPipeToggleText.getText()).toEqual("15\'");
    });

    it("should have 1 button for adding locates that is disabled until all required fields are valid", function () {
        /*This is the button that should be disabled*/
        browserHelper.scroll(newBoreLogState.topButton);
        expect(newBoreLogState.topButton.getAttribute("disabled")).toEqual("true");
        /*Fill out the form*/
        browserHelper.scroll(newBoreLogState.customerInput);
        newBoreLogState.fillOutNewBoreLogForm();
        browserHelper.scroll(newBoreLogState.topButton);
        expect(newBoreLogState.topButton.getAttribute("disabled")).toBeNull();
    });

    it("should allow you quit", function () {
        expect(newBoreLogState.ionNavBar.getText()).toEqual("Options\nGeneral info");
        browserHelper.scroll(newBoreLogState.bottomButton);
        newBoreLogState.bottomButton.click();
        newBoreLogState.saveAndQuitPopup.cancelButton.click();
        expect(newBoreLogState.ionNavBar.getText()).toEqual("Options\nGeneral info");
        newBoreLogState.bottomButton.click();
        newBoreLogState.saveAndQuitPopup.okButton.click();
        expect(homeState.ionNavBar.getText()).toEqual("Options");
    });

    it("should let you open the locates modal once the form is valid", function () {
        /*Fill out the form*/
        newBoreLogState.fillOutNewBoreLogForm();
        newBoreLogState.goToLocatesModalBoreLog();
        expect(locatesModal.locatesModalTitle.getText()).toEqual("Bore log locates");
    });

    it("should let you enter locates, recording them accurately", function () {
        newBoreLogState.fillOutNewBoreLogForm();
        newBoreLogState.goToLocatesModalBoreLog();
        newBoreLogState.enterMockLocates();
        newBoreLogState.showLocatesList();
        mockLocatesVerifier.verify();
        newBoreLogState.saveAndQuit();
    });
});