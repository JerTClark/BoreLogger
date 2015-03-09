/**
 * Constructor for a helper utility
 * @scroll Scroll to element specified by a Protractor element - i.e., element(by.id("myElem")
 * @swipeLeft Translate ionItem that has ionOption buttons; Removes invisible class to enable interaction
 * @returns {{scroll: Function, swipeLeft: Function}}
 */
module.exports = function () {
    return {
        scroll: function () {
            var webElement = arguments[0].getWebElement();
            browser.executeScript(function () {
                arguments[0].scrollIntoView();
            }, webElement);
        },
        /**
         * @arguments[0] {String} Use an element's id attribute
         */
        swipeLeft: function () {
            var elemID = arguments[0];
            if(elemID) {
                browser.executeScript(function () {
                    angular.element(arguments[0]).parent().css("-webkit-transform", "translate3d(-139px, 0px, 0px)");
                    angular.element(".item-options").removeClass("invisible");
                }, elemID);
            }
        },
        /**
         * @argument[0] {ElementFinder} Use a page object's element or an element(locator)
         */
        waitForElement: function () {
            var element = arguments[0];
            if(element) {
                browser.driver.wait(protractor.until.elementIsVisible(element));
            }
        }
    }
};