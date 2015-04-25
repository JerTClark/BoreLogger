angular.module("baroidApp").directive("BaroidHelpToggle",
    ["baroidHTMLFiles", function (baroidHTMLFiles) {
        return {
            restrict: "E",
            scope: {
                "toggleName":"@",
                "baroidHelp":"@"
            },
            templateUrl: baroidHTMLFiles.baroidHelp,
            controller: function ($scope) {
            },
            link: function (scope, elem, attrs) {
            }
        }
    }]);