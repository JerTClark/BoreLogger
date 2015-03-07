xdescribe("Home (Options) State", function () {
    var PRE = "./e2e-bison-page-objects/";
    /*Constructors*/
    var BrowserHelper = require("./e2e-utils/browser-helper.js"),
        HomeState = require(PRE + "home-state.js"),
        NewBoreLogState = require(PRE + "new-bore-log-state.js");

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        homeState = new HomeState(),
        newBoreLogState = new NewBoreLogState();

    beforeEach(function () {
        homeState.get();
    });

    it("should begin having the title \"Options\"", function () {
        expect(homeState.ionNavBar.getText()).toEqual("Options");
    });

    it("should help me understand how \"by.repeater\" works", function () {
        expect(homeState.allOptions.getText()).toEqual(["Bore Log\nCreate\nContinue",
            "Bore Journal\nCreate\nContinue", "", ""]);//Some not in view
        browserHelper.scroll(homeState.createPdfButton);
        expect(homeState.refreshAllOptions().getText()).toEqual(["",
            "Bore Journal\nCreate\nContinue\nConvert",
            "Create PDF\nCreate", ""]);//Will change if file options are shown
    });

    it("should expose the count() function", function () {
        expect(homeState.allOptions.count()).toEqual(4);
    });

    it("should take you to General info and back to Options", function () {
        homeState.createBoreLogButton.click();
        expect(newBoreLogState.ionNavBar.getText()).toEqual("Options\nGeneral info");
        newBoreLogState.backButton.click();//Matches more than one element
        expect(homeState.ionNavBar.getText()).toEqual("Options");
        homeState.createBoreJournalButton.click();
        expect(newBoreLogState.ionNavBar.getText()).toEqual("Options\nGeneral info");
        newBoreLogState.backButton.click();//Matches more than one element
        expect(homeState.ionNavBar.getText()).toEqual("Options");
    });

    it("should take you to \"Continue\" state showing \"Continue\" or \"Convert\" in the view-title", function () {
        homeState.continueBoreLogButton.click();
        expect(homeState.ionNavBar.getText()).toEqual("Options\nContinue log");
        newBoreLogState.backButton.click();//Matches more than one element
        homeState.continueBoreJournalButton.click();
        expect(homeState.ionNavBar.getText()).toEqual("Options\nContinue journal");
        newBoreLogState.backButton.click();//Matches more than one element
        browserHelper.scroll(homeState.convertBoreLogButton);
        homeState.convertBoreLogButton.click();
        expect(homeState.ionNavBar.getText()).toEqual("Options\nConvert journal");
        newBoreLogState.backButton.click();//Matches more than one element
        browserHelper.scroll(homeState.createPdfButton);
        homeState.createPdfButton.click();
        expect(homeState.ionNavBar.getText()).toEqual("Options\nConvert log");
    });

    it("should have descriptions for each category", function () {
        homeState.boreLogCategory.click();
        homeState.boreJournalCategory.click();
        var desc1 = element(by.cssContainingText(".bison-description", "Record a completed bore"));
        var desc2 = element(by.cssContainingText(".bison-description", "Record an ongoing bore"));
        expect(desc1.getText()).toEqual("Record a completed bore");
        expect(desc2.getText()).toEqual("Record an ongoing bore");
        browserHelper.scroll(homeState.pdfCategory);
        var desc3 = element(by.cssContainingText(".bison-description", "A billable report"));
        homeState.pdfCategory.click();
        expect(desc3.getText()).toEqual("A billable report");
    });

});