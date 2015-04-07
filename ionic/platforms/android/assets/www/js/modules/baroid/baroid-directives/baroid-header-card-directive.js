angular.module("baroidApp").directive("baroidHeaderCard", function () {
    return {
        restrict:"E",
        scope:{
            title:"@",
            description:"@"
        },
        templateUrl:"html/baroid/template/baroid-header-card.html",
        link: function (scope, element, attributes) {}
    }
});