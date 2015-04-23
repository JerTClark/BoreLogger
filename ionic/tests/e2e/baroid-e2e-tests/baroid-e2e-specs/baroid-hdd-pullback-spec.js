describe("Baroid HDD Pullback calculator", function () {

    /*Easier resource management in event of refactoring*/
    var ReferenceJS = require("./../ref.js"),
        Reference = new ReferenceJS(),
        pageObjects = Reference.pageObjects,
        utils = Reference.utils,
        mockData = Reference.mockData,
        Nav = require("../../" + utils.folder + "/nav.js"),
        up = new Nav();

    /*Constructors*/
    var BrowserHelper = require(up.two + utils.browserHelper),
        BaroidHomeState = require(up.one + pageObjects.homeState),
        BaroidHDDPullbackState = require(up.one + pageObjects.hddPullbackState),
        HDDPullbackMockData = require(up.one + mockData.hddPullbackMockData),
        ValidNumericResults = require(up.one + mockData.validNumericPullbackResults);

    /*Page Instances*/
    var browserHelper = new BrowserHelper(),
        baroidHomeState = new BaroidHomeState(),
        baroidPullbackState = new BaroidHDDPullbackState(),
        pullbackMockData = new HDDPullbackMockData(),
        expectedResults = new ValidNumericResults();

    beforeEach(function () {
        baroidHomeState.goToHDDPullbackState();
    });

    xit("should pass a basic test", function () {
        expect(baroidPullbackState.test).toEqual(5);
    });

    xit("should pass a sanity check", function () {
        /*Inputs*/
        expect(baroidPullbackState.soilTypeSelector).toBeDefined();
        expect(baroidPullbackState.boreLengthInput).toBeDefined();
        expect(baroidPullbackState.diameterInput).toBeDefined();
        expect(baroidPullbackState.drillpipeInput).toBeDefined();
        expect(baroidPullbackState.pumpRatingInput).toBeDefined();
        /*Numeric results*/
        expect(baroidPullbackState.estFunnelViscosityCard).toBeDefined();
        expect(baroidPullbackState.estFunnelViscosityTitle).toBeDefined();
        expect(baroidPullbackState.estFunnelViscosityResult).toBeDefined();
        expect(baroidPullbackState.estFluidVolumeCard).toBeDefined();
        expect(baroidPullbackState.estFluidVolumeTitle).toBeDefined();
        expect(baroidPullbackState.estFluidVolumeResult).toBeDefined();
        expect(baroidPullbackState.actualPumpOutputCard).toBeDefined();
        expect(baroidPullbackState.actualPumpOutputTitle).toBeDefined();
        expect(baroidPullbackState.actualPumpOutputResult).toBeDefined();
        expect(baroidPullbackState.recommendedPullbackSpeedCard).toBeDefined();
        expect(baroidPullbackState.recommendedPullbackSpeedTitle).toBeDefined();
        expect(baroidPullbackState.recommendedPullbackSpeedResult).toBeDefined();
        /*Recommendations*/
        expect(baroidPullbackState.baseRecommendationCard).toBeDefined();
        expect(baroidPullbackState.baseRecommendationTitle).toBeDefined();
        expect(baroidPullbackState.baseRecommendationResult).toBeDefined();
        expect(baroidPullbackState.additiveRecommendationCard).toBeDefined();
        expect(baroidPullbackState.additiveRecommendationTitle).toBeDefined();
        expect(baroidPullbackState.additiveRecommendationResult).toBeDefined();
        expect(baroidPullbackState.specialRecommendationCard).toBeDefined();
        expect(baroidPullbackState.specialRecommendationTitle).toBeDefined();
        expect(baroidPullbackState.specialRecommendationResult).toBeDefined();
    });

    it("should accept input and calculate correct results", function () {
        baroidPullbackState.enterMockData();
        browserHelper.scroll(baroidPullbackState.estFunnelViscosityResult);
        expect(baroidPullbackState.estFunnelViscosityResult.getText()).toEqual(expectedResults["estFunnelViscosityResult"]);
        browserHelper.scroll(baroidPullbackState.estFluidVolumeResult);
        expect(baroidPullbackState.estFluidVolumeResult.getText()).toEqual(expectedResults["estFluidVolumeResult"]);
        browserHelper.scroll(baroidPullbackState.actualPumpOutputResult);
        expect(baroidPullbackState.actualPumpOutputResult.getText()).toEqual(expectedResults["actualPumpOutputResult"]);
        browserHelper.scroll(baroidPullbackState.recommendedPullbackSpeedResult);
        expect(baroidPullbackState.recommendedPullbackSpeedResult.getText()).toEqual(expectedResults["recommendedPullbackSpeedResult"]);
        browserHelper.scroll(baroidPullbackState.baseRecommendationResult);
        expect(baroidPullbackState.baseRecommendationResult.getText()).toEqual(expectedResults["baseRecommendationResult"]);
        browserHelper.scroll(baroidPullbackState.additiveRecommendationResult);
        expect(baroidPullbackState.additiveRecommendationResult.getText()).toEqual(expectedResults["additiveRecommendationResult"]);
        browserHelper.scroll(baroidPullbackState.specialRecommendationResult);
        expect(baroidPullbackState.specialRecommendationResult.getText()).toEqual(expectedResults["specialRecommendationResult"]);
        browserHelper.scroll(baroidPullbackState.noteResult);
        expect(baroidPullbackState.noteResult.getText()).toEqual(expectedResults["noteResult"]);
        browserHelper.scroll(baroidPullbackState.contingencyNoteResult);
        expect(baroidPullbackState.contingencyNoteResult.getText()).toEqual(expectedResults["contingencyNoteResult"]);
    });

});