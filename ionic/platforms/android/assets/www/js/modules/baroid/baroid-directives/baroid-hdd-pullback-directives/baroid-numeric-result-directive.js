angular.module("baroidApp").directive("baroidNumericResult", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope:{
            idPre:"@",
            resultTitle:"@",
            resultModel:"="
        },
        templateUrl:baroidHTMLFiles.baroidNumericResult,
        link: function (scope, element, attributes) {}
    }
}]);