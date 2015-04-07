/**
 * BaroidPullbackController unit test
 */
describe("BaroidPullbackController, BaroidPullbackNumericInputs, and BaroidSoilTypes", function () {

    var $rootScope, $scope, $timeout, $state, BaroidPullbackController,
        BaroidPullbackNumericInputs, BaroidSoilTypes;

    beforeEach(module('baroidApp'));

    beforeEach(function () {
        inject(function ($injector) {
            $rootScope = $injector.get("$rootScope");
            $scope = $rootScope.$new();
            $timeout = $injector.get("$timeout");
            $state = $injector.get("$state");
            BaroidPullbackNumericInputs = $injector.get("BaroidPullbackNumericInputs");
            BaroidSoilTypes = $injector.get("BaroidSoilTypes");

            BaroidPullbackController =
                $injector.get("$controller")("BaroidPullbackController", {
                    $scope: $scope,
                    $timeout: $timeout,
                    $state: $state,
                    BaroidPullbackNumericInputs: BaroidPullbackNumericInputs,
                    BaroidSoilTypes: BaroidSoilTypes
                });

        });/*end inject()*/

    });/*end beforeEach*/

    /**
     * BaroidPullbackNumericInputs
     */
    describe("BaroidPullbackNumericInputs", function () {

        it("should be defined", function () {
            expect(BaroidPullbackNumericInputs).toBeDefined();
        });

        it("should have the correct value for each object's property", function () {

        });

    });/*end BaroidPullbackNumericInputs*/

    /**
     * BaroidSoilTypes
     */
    describe("BaroidSoilTypes", function () {

        it("should be defined", function () {
            expect(BaroidSoilTypes).toBeDefined();
        });

        it("should have the correct numeric value associated with each type of soil", function () {
            
        });
        

    });/*end BaroidSoilTypes*/

    /**
     * BaroidPullbackController $scope
     */
    describe("BaroidPullbackController $scope", function () {

        it("should be defined", function () {
            expect($scope).toBeDefined();
        });

        it("should have the appropriate properties", function () {
            expect($scope.numericInputs).toBeDefined();
            expect($scope.testModels).toBeDefined();
            expect($scope.soilTypes).toBeDefined();
            expect($scope.soil).toBeDefined();
        });

        /**
         * $scope.numericInputs
         */
        describe("$scope.numericInputs", function () {

            it("should deep equal BaroidPullbackNumericInputs", function () {
                expect($scope.numericInputs === BaroidPullbackNumericInputs).toBeTruthy();
            });

        });

        describe("$scope.testModels", function () {

            it("should...", function () {

            });

        });

        describe("$scope.soilTypes", function () {

            it("should deep equal BaroidSoilTypes", function () {
                expect($scope.soilTypes === BaroidSoilTypes).toBeTruthy();
            });
        });

        describe("$scope.soil", function () {

            it("should return a numeric value: number for a queried soil type: string", function () {

            });

        });

    });/*end BaroidPullbackController $scope*/

});/*end BaroidPullbackController*/