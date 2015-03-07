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
         * @param elementID The id of the element ("#continue-item-0")
         */
        swipeLeft: function (elementID) {
            var parent = this;
            parent.id = elementID;
            browser.executeScript(function (id) {
                angular.element(id).parent().css("-webkit-transform", "translate3d(-139px, 0px, 0px)");
                angular.element(".item-options").removeClass("invisible");
            });
        },
        setWindowSize: function () {
            browser.manage().window().setSize(1600,1000);
        },
        pause: function () {
            browser.pause();
        }
    }
};