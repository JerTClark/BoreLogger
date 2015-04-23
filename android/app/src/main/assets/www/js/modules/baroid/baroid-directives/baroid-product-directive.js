angular.module("baroidApp").directive("baroidProduct", ["baroidHTMLFiles", "$timeout",
    function (baroidHTMLFiles, $timeout) {
        return {
            restrict: "E",
            scope: {
                "productName": "@",
                "productOverview": "@",
                "productTemplate": "@",
                "productDataSheet":"@"
            },
            templateUrl:baroidHTMLFiles.baroidProducts,
            //controller: function (scope, element) {
            //
            //    $timeout(function () {
            //        $('.ex-link').click(function () {
            //            var url = $(this).attr('href');
            //            window.open(encodeURI(url), '_system', 'location=yes');
            //            return false;
            //        })
            //    })
            //},
            link: function (scope, element, attribute) {
                var angElem = angular.element(".data-url");
                angElem.click(function () {
                    window.open(encodeURI(angElem.attr("productDataSheet")), '_system', 'location=yes');
                    return false;
                });
            }
        }
    }]);