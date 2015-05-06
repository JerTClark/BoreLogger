angular.module("baroidApp")
    .controller("BaroidConversionController",
    ["BaroidConversionSelections", "BaroidConversionSelectionsMetric",
        "BaroidConversionValues", "BaroidConversionValuesMetric",
        "BaroidPopupService", "baroidHTMLFiles", "$scope",
        "BaroidConverter",
        function (BaroidConversionSelections, BaroidConversionSelectionsMetric,
                  BaroidConversionValues, BaroidConversionValuesMetric,
                  BaroidPopupService, baroidHTMLFiles, $scope,
                  BaroidConverter) {

            $scope.setMode = function () {
                BaroidPopupService.alert({
                    "templateUrl": baroidHTMLFiles.conversionModePopup,
                    "title": "Conversions"
                });
            };

            /**
             * @description Used by the select element for Standard mode
             * @type {Array} An array of strings
             */
            $scope.selections = BaroidConversionSelections;
            /**
             * @description Used by the select element for Metric mode
             * @type {Array} An array of strings
             */
            $scope.selectionsMetric = BaroidConversionSelectionsMetric;
            /**
             * @description Records the user's selection of a category via the select element
             * @type {{value: string}}
             */
            $scope.category = {"value": ""};
            /**
             * Watches $scope.category for changes
             */
            $scope.$watchCollection("category", function (newObject, oldObject) {
                //console.info("New: " + newObject["value"] + " Old: " + oldObject["value"]);
                $scope.conversions = {};
                $scope.userInput = {"value":""}
            });

            /**
             * @description Organizes the input elements (directives) via the values service for Standard
             * @type {Object}
             */
            $scope.inputElements = BaroidConversionValues;
            /**
             * @description Organizes the input elements (directives) via the values service for Metric
             * @type {Object}
             */
            $scope.inputElementsMetric = BaroidConversionValuesMetric;
            /**
             * @description Track the user's input regardless of which unit of measurement is selected
             * @type {Object}
             */
            $scope.userInput = {"value":""};
            /**
             * @description Holds an object with object properties-- one such property for each converted value returned by
             * BaroidConverter
             * @type {Object}
             */
            $scope.conversions = {};
            /**
             * Watch the userInput object and respond to changes in value
             */
            $scope.$watchCollection("userInput", function (newValue, oldValue) {
                $scope.conversions = BaroidConverter.convert($scope.category["value"], $scope.userInput["value"]);
            });
        }]);