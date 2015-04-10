/**
 * BaroidPullbackController unit test
 */
describe("BaroidPullbackController, BaroidPullbackInputs, BaroidSoilTypes, " +
    "BaroidEstimatedFunnelViscosity, BaroidEstimatedFluidVolumeCalculator, " +
    "BaroidActualPumpOutputCalculator, BaroidRecommendedPullbackCalculator " +
    "and BaroidPullbackValuesFactory",
    function () {

        var $rootScope, $scope, $timeout, $state, BaroidPullbackController,
            BaroidPullbackInputs, BaroidSoilTypes, BaroidEstimatedFunnelViscosity,
            BaroidEstimatedFluidVolumeCalculator, BaroidActualPumpOutputCalculator,
            BaroidRecommendedPullbackCalculator, BaroidPullbackValuesFactory;

        beforeEach(module('baroidApp'));

        beforeEach(function () {
            inject(function ($injector) {
                $rootScope = $injector.get("$rootScope");
                $scope = $rootScope.$new();
                $timeout = $injector.get("$timeout");
                $state = $injector.get("$state");
                BaroidPullbackInputs = $injector.get("BaroidPullbackInputs");
                BaroidSoilTypes = $injector.get("BaroidSoilTypes");
                BaroidEstimatedFunnelViscosity = $injector.get("BaroidEstimatedFunnelViscosity");
                BaroidEstimatedFluidVolumeCalculator = $injector.get("BaroidEstimatedFluidVolumeCalculator");
                BaroidActualPumpOutputCalculator = $injector.get("BaroidActualPumpOutputCalculator");
                BaroidRecommendedPullbackCalculator = $injector.get("BaroidRecommendedPullbackCalculator");
                BaroidPullbackValuesFactory = $injector.get("BaroidPullbackValuesFactory");

                BaroidPullbackController =
                    $injector.get("$controller")("BaroidPullbackController", {
                        $scope: $scope,
                        $timeout: $timeout,
                        $state: $state,
                        BaroidPullbackInputs: BaroidPullbackInputs,
                        BaroidSoilTypes: BaroidSoilTypes,
                        BaroidEstimatedFunnelViscosity: BaroidEstimatedFunnelViscosity,
                        BaroidEstimatedFluidVolumeCalculator: BaroidEstimatedFluidVolumeCalculator,
                        BaroidActualPumpOutputCalculator: BaroidActualPumpOutputCalculator,
                        BaroidRecommendedPullbackCalculator: BaroidRecommendedPullbackCalculator,
                        BaroidPullbackValuesFactory: BaroidPullbackValuesFactory
                    });

            });
            /*end inject()*/

        });
        /*end beforeEach*/

        /**
         * BaroidPullbackInputs
         */
        describe("BaroidPullbackInputs", function () {

            it("should be defined", function () {
                expect(BaroidPullbackInputs).toBeDefined();
            });

            it("should represent two rows with two items each", function () {
                expect(BaroidPullbackInputs["RowOne"].length).toEqual(2);
                expect(BaroidPullbackInputs["RowTwo"].length).toEqual(2);
            });

            it("should ...", function () {

            });

        });
        /*end BaroidPullbackInputs*/

        /**
         * BaroidSoilTypes
         */
        describe("BaroidSoilTypes", function () {

            it("should be defined", function () {
                expect(BaroidSoilTypes).toBeDefined();
            });

            it("should have the correct numeric value associated with each type of soil", function () {
                expect(BaroidSoilTypes[0]["type"]).toEqual("Gravel/Cobble");
                expect(BaroidSoilTypes[0]["value"]).toEqual(1);
                expect(BaroidSoilTypes[1]["type"]).toEqual("Sand/Gravel");
                expect(BaroidSoilTypes[1]["value"]).toEqual(2);
                expect(BaroidSoilTypes[2]["type"]).toEqual("CoarseSand");
                expect(BaroidSoilTypes[2]["value"]).toEqual(3);
                expect(BaroidSoilTypes[3]["type"]).toEqual("Fine/MediumSand");
                expect(BaroidSoilTypes[3]["value"]).toEqual(4);
                expect(BaroidSoilTypes[4]["type"]).toEqual("Sandy/Clay");
                expect(BaroidSoilTypes[4]["value"]).toEqual(5);
                expect(BaroidSoilTypes[5]["type"]).toEqual("Clay");
                expect(BaroidSoilTypes[5]["value"]).toEqual(6);
                expect(BaroidSoilTypes[6]["type"]).toEqual("Rock");
                expect(BaroidSoilTypes[6]["value"]).toEqual(7);
            });


        });
        /*end BaroidSoilTypes*/

        describe("BaroidEstimatedFluidVolumeCalculator", function () {

            it("should be defined", function () {
                expect(BaroidEstimatedFluidVolumeCalculator).toBeDefined();
            });

            it("should calculate the estimated fluid volume in gallons", function () {

            });

        });

        describe("BaroidActualPumpOutputCalculator", function () {

            it("should be defined", function () {
                expect(BaroidActualPumpOutputCalculator).toBeDefined();
            });

            it("should ...", function () {

            });

        });
        /*end BaroidActualPumpOutputCalculator*/

        describe("BaroidRecommendedPullbackCalculator", function () {

            it("should be defined", function () {
                expect(BaroidRecommendedPullbackCalculator).toBeDefined();
            });

            it("should ...", function () {

            });

        });
        /*end BaroidRecommendedPullbackCalculator*/

        describe("BaroidPullbackValuesFactory", function () {

            it("should be defined", function () {
                expect(BaroidPullbackValuesFactory).toBeDefined();
            });

            it("should ...", function () {

            });

        });
        /*end BaroidPullbackValuesFactory*/


        /**
         * BaroidPullbackController $scope tests begin here
         */
        describe("BaroidPullbackController $scope", function () {

            it("should be defined", function () {
                expect($scope).toBeDefined();
            });

            it("should have the appropriate properties", function () {
                expect($scope.rowOne).toBeDefined();
                expect($scope.rowTwo).toBeDefined();
                expect($scope.soilTypes).toBeDefined();
                expect($scope.input).toBeDefined();
                expect($scope.estimatedFunnelViscosity).toBeDefined();
                expect($scope.estimatedFluidVolume).toBeDefined();
                expect($scope.actualPumpOutput).toBeDefined();
                expect($scope.recommendedPullbackSpeed).toBeDefined();
            });

            describe("$scope.rowOne", function () {

                it("should deep equal BaroidPullbackInputs.RowOne", function () {
                    expect($scope.rowOne === BaroidPullbackInputs.RowOne).toBeTruthy();
                });

            });

            describe("$scope.rowTwo", function () {

                it("should deep equal BaroidPullbackInputs.RowTwo", function () {
                    expect($scope.rowTwo === BaroidPullbackInputs.RowTwo).toBeTruthy();
                });

            });

            describe("$scope.soilTypes", function () {

                it("should deep equal BaroidSoilTypes", function () {
                    expect($scope.soilTypes === BaroidSoilTypes).toBeTruthy();
                });
            });

            describe("#scope.input", function () {

                beforeEach(function () {

                });

                it("should record user input", function () {

                });

            });

        });
        /*end BaroidPullbackController $scope*/

    });
/*end BaroidPullbackController*/