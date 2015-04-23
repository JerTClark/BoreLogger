angular.module("baroidApp").directive("baroidHeaderCard", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope:{
            title:"@",
            description:"@"
        },
        templateUrl:baroidHTMLFiles.headerCard,
        link: function (scope, element, attributes) {}
    }
}]);