/**
 * Constructor for the "continue" state page object
 * Presents the user with a list of logs with which they can resume
 * interaction (or convert, depending on Home state selection)
 */
module.exports = function () {
    return {
        test: 1 + 2,
        ionNavBar: element(by.id("bison-nav-bar")),
        records: element.all(by.repeater("record in bisonRecords")),
        select: element(by.id("continue-select")),
        searchInput: element(by.id("continue-search-input")),
        confirmCancel: element(by.buttonText("Cancel")),
        confirmOK: element(by.buttonText("OK")),
        /*Use BrowserHelper swipeleft([continue-item-N]) to uncover the buttons*/
        deleteButton0: element(by.id("continue-delete-button-0")),
        selectButton0: element(by.id("continue-select-button-0")),
        clickDeleteButton: function (index) {
            var deleteButton = "continue-delete-button-" + index;
        },
        pdfDownloadButton: element(by.id("pdfDownload")),
        getCurrentCount: function () {
            var count = this.records.count().then(function (num) {
                return num;
            });
            return count;
        }
    }
};