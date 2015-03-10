/**
 * Constructor for the "settings" state page object
 */
module.exports = function () {
    return {
        test: 1+2,
        allElements: element.all(by.repeater("category in settingsCategories")),
        settingsClearLocalCacheButton: element(by.buttonText("Clear local cache")),
        settingsAboutThisAppButton: element(by.buttonText("About this app"))
    }
};