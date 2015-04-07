angular.module("baroidApp").controller("BaroidPullbackController",
    ["$scope", "BaroidPullbackNumericInputs", "BaroidSoilTypes",
        function ($scope, BaroidPullbackNumericInputs, BaroidSoilTypes) {

            $scope.numericInputs = BaroidPullbackNumericInputs;

            $scope.testModels = [];

            $scope.$watchCollection("testModels", function (newValue, oldValue) {
                console.log(JSON.stringify($scope.testModels) + " " + newValue);
            });

            $scope.soilTypes = BaroidSoilTypes;

            $scope.soil = "";

        }]);