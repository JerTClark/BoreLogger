angular.module("baroidApp").controller("BaroidAnnularVelocityController",
    ["$scope", "$timeout",
        "BaroidAnnularVelocityValuesFactory", "BaroidAnnularVelocityInputs",
        "BaroidAnnularVelocityCalculator", "BaroidPopupService", "baroidHTMLFiles",
        function ($scope, $timeout, BaroidAnnularVelocityValuesFactory, BaroidAnnularVelocityInputs,
                  BaroidAnnularVelocityCalculator, BaroidPopupService, baroidHTMLFiles) {
            /**
             * <b>BaroidAnnularVelocityController $scope property</b>
             * <i>Maps out the input elements for the view</i>
             * @type {array}
             * @description An array of objects, each representing <b>a directive</b> in the view
             *
             */
            $scope.inputElements = BaroidAnnularVelocityInputs["Inputs"];
            /**
             * <b>BaroidAnnularVelocityController $scope property</b>
             *
             * <i>Holds all user input via ngModel directives on each</i>
             * @property {number} input.drillbitDiameter -in inches,
             * @property {number} input.drillpipeDiameter -in inches,
             * @property {number} input.pumpOutput -in gpm
             */
            $scope.input = {
                "drillBitDiameter": "",
                "drillPipeDiameter": "",
                "pumpOutput": ""
            };
            /**
             * <b>BaroidAnnularVelocityController $scope property</b>
             *
             * <i>Contains all calculations based on given user input</i>
             * @type {Object}
             * Properties are derived from <b>BaroidAnnularVelocityValuesFactory</b>
             */
            $scope.values = BaroidAnnularVelocityValuesFactory;
            /**
             * Called each time the user interacts with an input
             */
            $scope.$watchCollection("input", function (newValue, oldValue) {
                if ($scope.input["drillBitDiameter"] && $scope.input["drillPipeDiameter"] && $scope.input["pumpOutput"]) {
                    console.info("%cShould now calculate $scope.annularVelocity", "color: green;font-weight:bold");
                    $scope.values["annularVelocity"] =
                        BaroidAnnularVelocityCalculator.calculateAV(
                            $scope.input["drillBitDiameter"],
                            $scope.input["drillPipeDiameter"],
                            $scope.input["pumpOutput"]);

                    console.info("%cShould now calculate $scope.advice", "color: green;font-weight:bold");
                    $scope.values["advice"] =
                        BaroidAnnularVelocityCalculator.calculateAdvice(
                            $scope.values["annularVelocity"],
                            $scope.input["drillBitDiameter"],
                            $scope.input["drillPipeDiameter"]);

                    console.info("%cShould now calculate $scope.warning", "color: green;font-weight:bold");
                    $scope.values["warning"] =
                        BaroidAnnularVelocityCalculator.calculateWarning(
                            $scope.input["drillBitDiameter"],
                            $scope.input["drillPipeDiameter"],
                            $scope.input["pumpOutput"],
                            $scope.values["annularVelocity"]);

                    console.info("%cShould now calculate $scope.ruleOfThumb", "color: green;font-weight:bold");
                    $scope.values["ruleOfThumb"] =
                        BaroidAnnularVelocityCalculator.getRuleOfThumb($scope.values["warning"]);
                }//end if
                else {
                    console.warn("Reset annularVelocity to zero");
                    $scope.values["annularVelocity"] = 0;
                    console.warn("Reset advice to empty string");
                    $scope.values["advice"] = "";
                    console.warn("Reset warning to empty string");
                    $scope.values["warning"] = "";
                    console.warn("Reset rule of thumb to empty string");
                    $scope.values["ruleOfThumb"] = "";
                }
            });

            $scope.logToConsole = function() {
                BaroidPopupService.show();
            };
            /**
             * Show the help popups
             * @param stringName the kind of popup to show
             */
            $scope.showPopup = function (stringName) {
                var config = {
                    "templateUrl":"",
                    "title":"",
                    "scope":$scope
                };
                var cssClass = "popup-medium";
                switch(stringName) {
                    case "input":
                        config["title"] = "Input";
                        config["templateUrl"] = baroidHTMLFiles.avInputPopup;
                        cssClass = "popup-medium";
                        break;
                    case "calculations":
                        config["title"] = "Calculations";
                        config["templateUrl"] = baroidHTMLFiles.avCalculationsPopup;
                        cssClass = "popup-xxsmall";
                        break;
                    case "notes":
                        config["title"] = "Notes";
                        config["templateUrl"] = baroidHTMLFiles.avNotesPopup;
                        cssClass = "popup-small";
                        break;
                }
                BaroidPopupService.show(config);

                $timeout(function () {
                    angular.element("div.popup").addClass(cssClass);
                },50);
            };
            /**
             * Close the current popup
             */
            $scope.close = function () {
                BaroidPopupService.closeCurrent();
            }

        }]);