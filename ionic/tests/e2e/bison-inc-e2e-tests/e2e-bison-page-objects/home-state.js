/**
 * Home state (aka Options screen)
 */
var ReferenceJS = require("../ref.js"),
    Reference = new ReferenceJS();

module.exports = function () {
    return {
        test: 1 + 2,
        get: function () {
            browser.get(Reference.target);
        },
        refreshAllOptions: function () {
            return element.all(by.repeater("category in optionCategories"));
        },
        /**
         * ionNavBar is universally accessible from any state.
         * Use home.ionNavBar to test the view-title values of each state.
         */
        ionNavBar: element(by.id("bison-nav-bar")),
        allOptions: element.all(by.repeater("category in optionCategories")),
        /*Categories*/
        boreLogCategory: element(by.cssContainingText(".bison-category", "Bore Log")),
        boreJournalCategory: element(by.cssContainingText(".bison-category", "Bore Journal")),
        pdfCategory: element(by.cssContainingText(".bison-category", "Create PDF")),
        browseCategory: element(by.cssContainingText(".bison-category", "Browse")),
        /*Category descriptions*/
        boreLogCategoryDescription: element(by.cssContainingText(".bison-description", "Record a completed bore")),
        boreJournalCategoryDescription: element(by.cssContainingText(".bison-description", "Record an ongoing bore")),
        pdfCategoryDescription: element(by.cssContainingText(".bison-description", "A billable report")),
        browseCategoryDescription: element(by.cssContainingText(".bison-description", "Choose from the file types below")),
        /*Buttons*/
        createBoreLogButton: element(by.id("button0")),
        continueBoreLogButton: element(by.id("button1")),
        createBoreJournalButton: element(by.id("button2")),
        continueBoreJournalButton: element(by.id("button3")),
        convertBoreLogButton: element(by.id("button4")),
        createPdfButton: element(by.id("button5")),
        browseLogs: element(by.id("button6")),
        browseJournals: element(by.id("button7")),
        browsePDFs: element(by.id("button8")),
        settingsButton: element(by.id("options-settings-button"))
    }
};