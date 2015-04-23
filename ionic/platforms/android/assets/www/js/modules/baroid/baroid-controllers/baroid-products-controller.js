angular.module("baroidApp").controller("BaroidProductsController",
    ["$scope", "BaroidProductsListing",
        function ($scope, BaroidProductsListing) {

            /**
             * The list of products and their data that Baroid has to offer
             * @type {Object}
             */
            $scope.products = BaroidProductsListing;

        }]);