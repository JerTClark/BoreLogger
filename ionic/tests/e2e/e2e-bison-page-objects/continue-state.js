/**
 * Constructor for the "continue" state page object
 * Presents the user with a list of logs with which they can resume
 * interaction (or convert, depending on Home state selection)
 */
module.exports = function () {
    return {
        test: 1 + 2,
        ionNavBar: element(by.id("bison-nav-bar")),
        select: element(by.id("continue-select")),
        searchInput: element(by.id("continue-search-input")),
        /*Use BrowserHelper swipeleft([continue-item-N]) to uncover the buttons*/
        deleteButton0: element(by.id("continue-delete-button-0")),
        selectButton0: element(by.id("continue-select-button-0")),
        pdfDownloadButton: element(by.id("pdfDownload")),
        swipeLeftItem0: function () {
            browser.executeScript(function () {
                angular.element("#continue-item-0").parent().css("-webkit-transform", "translate3d(-139px, 0px, 0px)");
                angular.element(".item-options").removeClass("invisible");
            });
        }
    }
};