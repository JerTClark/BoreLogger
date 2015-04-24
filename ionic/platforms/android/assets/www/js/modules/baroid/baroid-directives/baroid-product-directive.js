angular.module("baroidApp").directive("baroidProduct", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
        return {
            restrict: "E",
            scope: {
                "productName": "@",
                "productOverview": "@",
                "productTemplate": "@",
                "productDataSheet":"@"
            },
            templateUrl:baroidHTMLFiles.baroidProducts,
            controller: function ($scope) {
                /**
                 * Opens/downloads the product data sheet pdf from Baroid
                 * @param productDataSheet the URL of the data sheet for this product
                 */
                $scope.dataSheet = function (productDataSheet) {
                    console.info("Opening " + productDataSheet);
                    window.open(productDataSheet, '_system', 'location=yes');
                };
                /**
                 * Expands the product description
                 * @param $event
                 */
                $scope.showDescription = function ($event) {
                    angular.element($event.target).siblings(".baroid-product-description").slideToggle();
                }
            }
        }
    }]);