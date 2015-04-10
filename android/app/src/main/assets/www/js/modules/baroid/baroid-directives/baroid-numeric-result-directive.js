angular.module("baroidApp").directive("baroidNumericResult", function () {
    return {
        restrict:"E",
        scope:{
            resultTitle:"@",
            resultModel:"="
        },
        templateUrl:"html/baroid/template/baroid-numeric-result.html",
        link: function (scope, element, attributes) {}
    }
});