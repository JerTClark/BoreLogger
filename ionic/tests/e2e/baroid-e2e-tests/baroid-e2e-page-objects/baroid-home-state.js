/**
 * Page object for baroidApp's "baroid" state
 */
var ReferenceJS = require("../ref.js"),
    Reference = new ReferenceJS();

module.exports = function () {
    return {
        test: 2 + 2,
        get: function () {
            browser.get(Reference.target);
        },
        goToHDDPullbackState: function () {
            this.get();
            this.hddPullbackButton.click();
        },
        "ionNavBar":element(by.id("baroid-nav-bar")),
        "cubicFPMButton":element(by.buttonText("Cubic FPM")),
        "annularVelocityButton":element(by.buttonText("Annular Velocity")),
        "hddPullbackButton":element(by.buttonText("HDD Pullback")),
        "chartsButton":element(by.buttonText("Charts"))
    }
};