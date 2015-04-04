angular.module("baroidApp").controller("BaroidPullbackController",
    ["$scope", "BaroidPullbackNumericInputs",
        function ($scope, BaroidPullbackNumericInputs) {

            $scope.numericInputs = BaroidPullbackNumericInputs;

            $scope.testModels = [];

            $scope.$watchCollection("testModels", function (newValue, oldValue) {
                console.log(JSON.stringify($scope.testModels) + " " + newValue);
            })

        }]);