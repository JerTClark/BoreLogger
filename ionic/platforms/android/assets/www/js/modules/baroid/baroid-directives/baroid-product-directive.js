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
            templateUrl:baroidHTMLFiles.baroidProducts
        }
    }]);