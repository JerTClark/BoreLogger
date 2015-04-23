/**
 * This enables a quick reference to the ionItems that will populate in a page
 * object that uses mock-locates and mock-locates-verify
 * @type {{locateListItem0: protractor.ElementFinder, locateListItem1: protractor.ElementFinder, locateListItem2: protractor.ElementFinder, locateListItem3: protractor.ElementFinder, locateListItem4: protractor.ElementFinder}}
 */
module.exports = function () {
    return {
        /*Enough to work with mock-locates.js and mock-locates-verify.js*/
        locateListItem0: element(by.cssContainingText(".item-content", "Locate 1:")),
        locateListItem1: element(by.cssContainingText(".item-content", "Locate 2:")),
        locateListItem2: element(by.cssContainingText(".item-content", "Locate 3:")),
        locateListItem3: element(by.cssContainingText(".item-content", "Locate 4:")),
        locateListItem4: element(by.cssContainingText(".item-content", "Locate 5:"))
    }
};