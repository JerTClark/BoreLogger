/**
 * BaroidOptionsController unit test
 */
describe("BaroidOptionsController", function () {

    var $rootScope, $scope, $timeout, $state, BaroidOptionsController,
        BaroidOptionCategories;

    beforeEach(module('baroidApp'));

    beforeEach(function () {
        inject(function ($injector) {
            $rootScope = $injector.get("$rootScope");
            $scope = $rootScope.$new();
            $timeout = $injector.get("$timeout");
            $state = $injector.get("$state");
            BaroidOptionCategories = $injector.get("BaroidOptionCategories");
            
            BaroidOptionsController =
                $injector.get("$controller")("BaroidOptionsController", {
                    $scope: $scope,
                    $timeout: $timeout,
                    $state: $state,
                    BaroidOptionCategories: BaroidOptionCategories
                });

        });/*end inject()*/

    });/*end beforeEach*/

    /**
     * BaroidOptionCategories
     */
    describe("BaroidOptionCategories", function () {

        it("should be defined", function () {
            expect(BaroidOptionCategories).toBeDefined();
        });

        it("should have the right values for each property", function () {

        });

    });/*end BaroidOptionCategories*/

    /**
     * BaroidOptionsController $scope
     */
    describe("BaroidOptionsController $scope", function () {

        it("should be defined", function () {
            expect($scope).toBeDefined();
        });

        it("should have these properties", function () {
            expect($scope.optionCategories).toBeDefined();
            expect($scope.buttonClicked).toBeDefined();
        });

        /**
         * $scope.optionCategories
         */
        describe("$scope.optionCategories", function () {


        });
        
        describe("$scope.buttonClicked", function () {

            beforeEach(function () {
                spyOn($scope, "buttonClicked").and.callThrough();
            });

            it("should receive the click of each button", function () {

            });

            it("should handle the click of the correct button", function () {

            });

        });

    });/*end BaroidOptionsController $scope*/

});/*end BaroidOptionsController*/