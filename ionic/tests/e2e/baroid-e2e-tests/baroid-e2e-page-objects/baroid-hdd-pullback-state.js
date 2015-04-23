/**
 * Page object for pullback state
 */
/*Easier resource management in event of refactoring*/
var ReferenceJS = require("./../ref.js"),
    Reference = new ReferenceJS(),
    pageObjects = Reference.pageObjects,
    utils = Reference.utils,
    mockData = Reference.mockData,
    Nav = require("../../" + utils.folder + "/nav.js"),
    up = new Nav();
var BrowserHelper = require(up.two + utils.browserHelper),
    browserHelper = new BrowserHelper(),
    HDDPullbackMockData = require(up.one + mockData.hddPullbackMockData),
    hddPullbackMockData = new HDDPullbackMockData();

module.exports = function () {
    return {
        test: 3 + 2,
        /*Inputs*/
        "soilTypeSelector":element(by.id("soilType")),
        "boreLengthInput":element(by.id("length0")),
        "diameterInput":element(by.id("diameter1")),
        "drillpipeInput":element(by.id("drillpipe0")),
        "pumpRatingInput":element(by.id("pump1")),
        /*Numeric outputs*/
        "estFunnelViscosityCard":element(by.id("estFunnelViscosity")),
        "estFunnelViscosityTitle":element(by.id("estFunnelViscosity-title")),
        "estFunnelViscosityResult":element(by.id("estFunnelViscosity-result")),
        "estFluidVolumeCard":element(by.id("estFluidVolume")),
        "estFluidVolumeTitle":element(by.id("estFluidVolume-title")),
        "estFluidVolumeResult":element(by.id("estFluidVolume-result")),
        "actualPumpOutputCard":element(by.id("actualPumpOutput")),
        "actualPumpOutputTitle":element(by.id("actualPumpOutput-title")),
        "actualPumpOutputResult":element(by.id("actualPumpOutput-result")),
        "recommendedPullbackSpeedCard":element(by.id("recommendedPullbackSpeed")),
        "recommendedPullbackSpeedTitle":element(by.id("recommendedPullbackSpeed-title")),
        "recommendedPullbackSpeedResult":element(by.id("recommendedPullbackSpeed-result")),
        /*Recommendations*/
        "baseRecommendationCard":element(by.id("baseRecommendation")),
        "baseRecommendationTitle":element(by.id("baseRecommendation-title")),
        "baseRecommendationResult":element(by.id("baseRecommendation-result")),
        "additiveRecommendationCard":element(by.id("additiveRecommendation")),
        "additiveRecommendationTitle":element(by.id("additiveRecommendation-title")),
        "additiveRecommendationResult":element(by.id("additiveRecommendation-result")),
        "specialRecommendationCard":element(by.id("specialRecommendation")),
        "specialRecommendationTitle":element(by.id("specialRecommendation-title")),
        "specialRecommendationResult":element(by.id("specialRecommendation-result")),
        "noteCard":element(by.id("notesRecommend")),
        "noteTitle":element(by.id("notesRecommend-title")),
        "noteResult":element(by.id("notesRecommend-result")),
        "contingencyNoteCard":element(by.id("contingencyNote")),
        "contingencyNoteTitle":element(by.id("contingencyNote-title")),
        "contingencyNoteResult":element(by.id("contingencyNote-result")),
        "enterMockData": function () {
            browserHelper.selectOptionByIndex(this.soilTypeSelector, hddPullbackMockData["soilType"]);
            this.boreLengthInput.sendKeys(hddPullbackMockData["boreLength"]);
            this.diameterInput.sendKeys(hddPullbackMockData["diameter"]);
            this.drillpipeInput.sendKeys(hddPullbackMockData["drillpipe"]);
            this.pumpRatingInput.sendKeys(hddPullbackMockData["pumpRating"]);
        }
    }
};