/**
 * Quick references to file paths for easy refactoring
 */
module.exports = function () {
    return {
        "port":"8100",
        "target":"http://localhost:8100/#/",
        "pageObjects": {
            "continueState":"e2e-bison-page-objects/continue-state.js",
            "editLocates":"e2e-bison-page-objects/edit-locates-modal.js",
            "homeState":"e2e-bison-page-objects/home-state.js",
            "locatesModal":"e2e-bison-page-objects/locates-modal.js",
            "mockLocatesListItem":"e2e-bison-page-objects/mock-locates-list-items.js",
            "newBoreLogState":"e2e-bison-page-objects/new-bore-log-state.js",
            "settingsState":"e2e-bison-page-objects/settings-state.js"
        },
        "mockData": {
            "mockGenInfoBoreJournal":"e2e-mock-data/mock-gen-info-bore-journal.js",
            "mockGenInfoBoreLog":"e2e-mock-data/mock-gen-info-bore-log.js",
            "mockLocates":"e2e-mock-data/mock-locates.js",
            "mockLocatesVerifier":"e2e-mock-data/mock-locates-verifier.js",
            "mockLocatesVerify":"e2e-mock-data/mock-locates-verify.js",
            "mockMultiBoreLog":"e2e-mock-data/mock-multi-bore-log.js"
        },
        "utils":{
            "folder":"e2e-utils",
            "browserHelper":"e2e-utils/browser-helper.js"
        }
    }
};