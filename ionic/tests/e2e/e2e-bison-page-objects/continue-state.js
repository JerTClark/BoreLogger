/**
 * Constructor for the "continue" state page object
 * Presents the user with a list of logs with which they can resume
 * interaction (or convert, depending on Home state selection)
 */
module.exports = function () {
    return {
        test: 1 + 2,
        continueSelectElem: element(by.id("continue-select")),
        continueSearchInput: element(by.id("continue-search-input")),
        /*Use BrowserHelper swipeleft([continue-item-N]) to uncover the buttons*/
        continueSampleDeleteButton: element(by.id("continue-delete-button-0")),
        continueSampleSelectButton: element(by.id("continue-select-button-0")),
        continuePDFDownloadButton: element(by.id("pdfDownload"))
    }
};