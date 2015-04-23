/**
 * Quick references to file paths for easy refactoring
 */
module.exports = function () {
    return {
        "port":"8100",
        "target":"http://localhost:8100/#/",
        "pageObjects": {
            "folder":"baroid-e2e-page-objects",
            "homeState":"baroid-e2e-page-objects/baroid-home-state.js",
            "hddPullbackState":"baroid-e2e-page-objects/baroid-hdd-pullback-state.js"
        },
        "mockData": {
            "folder":"baroid-e2e-mock-data",
            "hddPullbackMockData":"baroid-e2e-mock-data/baroid-hdd-pullback-mock-data.js",
            "validNumericPullbackResults":"baroid-e2e-mock-data/baroid-hdd-pullback-exp-results.js"
        },
        "utils":{
            "folder":"e2e-utils",
            "browserHelper":"e2e-utils/browser-helper.js"
        }
    }
};