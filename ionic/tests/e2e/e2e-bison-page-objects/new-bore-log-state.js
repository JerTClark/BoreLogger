/**
 * New bore log state is recycled for several features:
 * By querying $stateParams["id"], it detects that a user selection was made
 * via Continue state (someone is resuming either a log or a journal).
 * By calling bisonService.getType() and testing it's return value, it determines
 * if a user is converting a log or creating a PDF.
 * If none of the above cases are true, the user is attempting to continue
 * working on a Bore Log or a Bore Journal. Which of the two is determined by
 * testing bisonService.getType()'s return value.
 * @dependencies BrowserHelper, NewBoreLogState, MockGenInfoBoreLog
 */
var BrowserHelper = require("../e2e-utils/browser-helper.js"),
    LocatesModal = require("./locates-modal.js");
var browserHelper = new BrowserHelper(),
    locatesModal = new LocatesModal(),
    mock = require("../e2e-mock-data/mock-gen-info-bore-log"),
    locates = require("../e2e-mock-data/mock-locates.js"),
    mockBoreLogs = require("../e2e-mock-data/mock-multi-bore-log.js");

module.exports = function () {
    return {
        test: 1 + 2,
        get: function () {
            browser.get("http://localhost:8100/#/new-bore-log");
        },
        ionNavBar: element(by.id("bison-nav-bar")),
        backButton: element(by.cssContainingText(".back-button", "")),
        allElements: element.all(by.repeater("field in boreLogModel")),
        customerCategory: element(by.cssContainingText(".bison-category", "Customer")),
        conduitCategory: element(by.cssContainingText(".bison-category", "Conduit")),
        locationCategory: element(by.cssContainingText(".bison-category", "Location")),
        lengthOfBoreCategory: element(by.cssContainingText(".bison-category", "Length of bore")),
        dateCategory: element(by.cssContainingText(".bison-category", "Date")),
        drillPipeCategory: element(by.cssContainingText(".bison-category", "Drill pipe")),
        /*Category descriptions*/
        customerCategoryDescription: element(by.cssContainingText(".bison-description", "the company for whom the work is performed")),
        conduitCategoryDescription: element(by.cssContainingText(".bison-description", "product (for ex., (1) 12\" Plastic)")),
        locationCategoryDescription: element(by.cssContainingText(".bison-description", "place most readily associated with the job site")),
        lengthOfBoreCategoryDescription: element(by.cssContainingText(".bison-description", "footage drilled (no comma, just the number)")),
        dateCategoryDescription: element(by.cssContainingText(".bison-description", "start or end of the job")),
        drillPipeCategoryDescription: element(by.cssContainingText(".bison-description", "length of drill pipe used")),
        /*Buttons*/
        topButton: element(by.buttonText("Save & Add locates")),
        bottomButton: element(by.buttonText("Save & Quit")),
        editLocatesButton: element(by.buttonText("Edit locates")),
        /*Inputs*/
        customerInput: element(by.id("0-input")),
        conduitInput: element(by.id("1-input")),
        locationInput: element(by.id("2-input")),
        lengthOfBoreInput: element(by.id("3-input")),
        dateInput: element(by.id("4-input")),
        /*Toggle*/
        //drillPipeToggle: element(by.id("drillPipeToggle")),
        drillPipeToggle: element(by.css(".toggle-assertive")),
        /*Text changed by toggle*/
        drillPipeToggleText: element(by.binding("drillPipeLength")),
        fillOutNewBoreLogForm: function () {
            /*Fill out the form*/
            browserHelper.scroll(this.customerInput);
            this.customerInput.sendKeys(mock.customer);
            this.conduitInput.sendKeys(mock.conduit);
            this.locationInput.sendKeys(mock.location);
            this.lengthOfBoreInput.sendKeys(mock.lengthOfBore);
            this.dateInput.sendKeys(mock.date);
        },
        fillOutNewBoreJournalForm: function () {
            /*Fill out the form*/
            browserHelper.scroll(this.customerInput);
            this.customerInput.sendKeys(mock.customer);
            this.locationInput.sendKeys(mock.location);
        },
        goToLocatesModalBoreLog: function () {
            browserHelper.scroll(this.topButton);
            this.topButton.click();
        },
        goToLocatesModalBoreJournal: function () {
            browserHelper.scroll(this.topButton);
            this.topButton.click();
        },
        saveAndQuitPopup: {
            cancelButton: element(by.buttonText("Cancel")),
            okButton: element(by.buttonText("OK")),
            saveButton: element(by.buttonText("Save"))
        },
        saveAndQuit: function () {
            locatesModal.closeButton.click();
            this.bottomButton.click();
            this.saveAndQuitPopup.saveButton.click();
        },
        enterMockLocates: function () {
            for (var locate in locates) {
                if (locates.hasOwnProperty(locate)) {
                    if (locates[locate]["feet"]) {
                        locatesModal.feetInput.sendKeys(locates[locate]["feet"]);
                    }
                    if (locates[locate]["inches"]) {
                        locatesModal.inchesInput.sendKeys(locates[locate]["inches"]);
                    }
                    if (locates[locate]["crossing"]) {
                        locatesModal.bottomButton.click();
                        locatesModal.popupInput.sendKeys(locates[locate]["crossing"]);
                        locatesModal.popupEnterButton.click();
                    } else {
                        locatesModal.topButton.click();
                    }
                }
            }
        },
        showLocatesList: function () {
            browserHelper.scroll(locatesModal.showLocatesButton);
            locatesModal.showLocatesButton.click();
        },
        verifyMockBoreLogGenInfo: function () {
            browserHelper.scroll(this.customerInput);
            expect(this.customerInput.getAttribute("value")).toEqual(mock.customer);
            browserHelper.scroll(this.conduitInput);
            expect(this.conduitInput.getAttribute("value")).toEqual(mock.conduit);
            browserHelper.scroll(this.locationInput);
            expect(this.locationInput.getAttribute("value")).toEqual(mock.location);
            browserHelper.scroll(this.locationCategory);
            expect(this.lengthOfBoreInput.getAttribute("value")).toEqual(mock.lengthOfBore);
            browserHelper.scroll(this.dateInput);
            expect(this.dateInput.getAttribute("value")).toEqual("2004-04-27");
        },
        verifyMockBoreJournalGenInfo: function () {
            browserHelper.scroll(this.customerInput);
            expect(this.customerInput.getAttribute("value")).toEqual(mock.customer);
            browserHelper.scroll(this.locationInput);
            expect(this.locationInput.getAttribute("value")).toEqual(mock.location);
        },
        enterMultipleBoreLogs: function () {
            /*Be sure to go to New Bore Log state prior to executing*/
            var HomeState = require("./home-state.js");
            var homeState = new HomeState(),
                self = this;
            mockBoreLogs.forEach(function (boreLogObject) {
                browserHelper.scroll(self.customerInput);
                self.customerInput.sendKeys(boreLogObject["customer"]);
                browserHelper.scroll(self.conduitInput);
                self.conduitInput.sendKeys(boreLogObject["conduit"]);
                browserHelper.scroll(self.locationInput);
                self.locationInput.sendKeys(boreLogObject["location"]);
                browserHelper.scroll(self.lengthOfBoreInput);
                self.lengthOfBoreInput.sendKeys(boreLogObject["length"]);
                browserHelper.scroll(self.dateInput);
                self.dateInput.sendKeys(boreLogObject["date"]);
                self.goToLocatesModalBoreLog();
                self.enterMockLocates();
                self.saveAndQuit();
                browserHelper.scroll(homeState.createBoreLogButton);
                homeState.createBoreLogButton.click();
            })
        },
        enterMultipleBoreJournals: function () {
            /*Be sure to go to New Bore Journal state prior to executing*/
            var HomeState = require("./home-state.js");
            var homeState = new HomeState(),
                self = this;
            mockBoreLogs.forEach(function (boreLogObject) {
                browserHelper.scroll(self.customerInput);
                self.customerInput.sendKeys(boreLogObject["customer"]);
                browserHelper.scroll(self.locationInput);
                self.locationInput.sendKeys(boreLogObject["location"]);
                self.goToLocatesModalBoreLog();
                self.enterMockLocates();
                self.saveAndQuit();
                browserHelper.scroll(homeState.createBoreJournalButton);
                homeState.createBoreJournalButton.click();
            })
        }
    }
};