angular.module("baroidApp").controller("BaroidPullbackController",
    ["$scope", "BaroidPullbackInputs", "BaroidSoilTypes", "BaroidEstimatedFunnelViscosity",
        "BaroidEstimatedFluidVolumeCalculator", "BaroidActualPumpOutputCalculator",
        "BaroidRecommendedPullbackCalculator", "BaroidPullbackValuesFactory",
        "BaroidRecommendedFluidFormationService", "BaroidAdditiveRFFService",
        "BaroidSpecialRFFService", "BaroidHDDPullbackNoteService", "BaroidContingencyNoteService",
        "BaroidPopupService", "baroidHTMLFiles", "$cordovaToast", "$timeout",
        function ($scope, BaroidPullbackInputs, BaroidSoilTypes, BaroidEstimatedFunnelViscosity,
                  BaroidEstimatedFluidVolumeCalculator, BaroidActualPumpOutputCalculator,
                  BaroidRecommendedPullbackCalculator, BaroidPullbackValuesFactory,
                  BaroidRecommendedFluidFormationService, BaroidAdditiveRFFService,
                  BaroidSpecialRFFService, BaroidHDDPullbackNoteService, BaroidContingencyNoteService,
                  BaroidPopupService, baroidHTMLFiles, $cordovaToast, $timeout) {

            /**
             * Each $scope.row* object represents a two-column row of inputs in the view
             * @type {Array}
             */
            $scope.rowOne = BaroidPullbackInputs.RowOne;
            /**
             * Each $scope.row* object represents a two-column row of inputs in the view
             * @type {Array}
             */
            $scope.rowTwo = BaroidPullbackInputs.RowTwo;

            /**
             * Soil types are objects with a string "type" property and a number "value" property
             * @type {BaroidSoilTypes|Object} type: string soil description; value: numeric value for calculations
             */
            $scope.soilTypes = BaroidSoilTypes;

            /**
             * Object that holds all user input via ngModel directives on each
             * @type {{length: string, diameter: string, drillpipe: string, pump: string, soil: Object}}
             */
            $scope.input = {
                "length":"",
                "diameter":"",
                "drillpipe":"",
                "pump":"",
                "soil":{"type":"","value":0}
            };

            /**
             * Contains all calculations based on given user input
             * @type {BaroidPullbackValuesFactory|*}
             */
            $scope.values = BaroidPullbackValuesFactory;
            /**
             * Displayed when there are not recommendations yet calculated
             * @type {string}
             */
            //$scope.exampleNoteText = "Recommendations will appear here";

            /**
             * NOTE: Will trigger with each input modification
             */
            $scope.$watchCollection("input", function (newValue, oldValue) {
                /*Calculate Estimated Funnel Viscosity*/
                if($scope.input["soil"]["value"] && $scope.input["diameter"] && $scope.input["drillpipe"]) {
                    console.info("%cShould now calculate $scope.estimatedFunnelViscosity", "color: green;font-weight:bold");

                    /*Conditional: If the soil type is clay*/
                    if($scope.input["soil"]["value"] === 6) {
                        /*Must have diameter and length to calculate for clay soil type*/
                        if($scope.input["diameter"] && $scope.input["length"]) {
                            $scope.values.estimatedFunnelViscosity =
                                BaroidEstimatedFunnelViscosity[$scope.input["soil"]["value"]]($scope.input["diameter"], $scope.input["length"]);
                        }
                        else {
                            $cordovaToast.show("Enter both diameter and length to show Estimated Funnel Viscosity", "long", "bottom");
                            $scope.values.estimatedFunnelViscosity = 0;
                        }
                    }/*end if-else*/

                    /*For all other soil types*/
                    else {
                        $scope.values.estimatedFunnelViscosity = BaroidEstimatedFunnelViscosity[$scope.input["soil"]["value"]];
                    }
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting estimatedFunnelViscosity to zero", "color:orange;font-weight:bold");
                    $scope.values.estimatedFunnelViscosity = 0;
                }/*End calculation of $scope.estimatedFunnelViscosity*/

                /*Calculate Estimated Fluid Volume*/
                if($scope.input["soil"]["value"]&&$scope.input["diameter"]&&$scope.input["length"]) {
                    console.info("%cShould now calculate $scope.estimatedFluidVolume", "color: green;font-weight:bold");
                    $scope.values.estimatedFluidVolume = BaroidEstimatedFluidVolumeCalculator.calculate($scope.input["soil"]["value"]
                        ,$scope.input["diameter"],$scope.input["length"]);

                    console.info("%cShould now be able to calculate baseRecommendation", "color: green;font-weight:bold")
                    $scope.values.baseRecommendation =
                        BaroidRecommendedFluidFormationService.calculateBaseRecommendation(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                    console.info("%cShould now be able to calculate additiveRecommendation", "color: green;font-weight:bold")
                    $scope.values.additiveRecommendation =
                        BaroidAdditiveRFFService.calculateAdditiveRecommendation(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                    console.info("%cShould now be able to calculate specialRecommendation", "color: green;font-weight:bold")
                    $scope.values.specialRecommendation =
                        BaroidSpecialRFFService.calculateSpecialRecommendation(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                    console.info("%cShould now be able to calculate note", "color: green;font-weight:bold")
                    $scope.values.note =
                        BaroidHDDPullbackNoteService.getNote(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                    console.info("%cShould now be able to calculate contingency", "color: green;font-weight:bold")
                    $scope.values.contingency =
                        BaroidContingencyNoteService.getContingencyNote(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting estimatedFluidVolume to zero", "color:orange;font-weight:bold");
                    $scope.values.estimatedFluidVolume = 0;
                    console.warn("%cSetting baseRecommendation to zero", "color:orange;font-weight:bold");
                    $scope.values.baseRecommendation = "";
                    console.warn("%cSetting additiveRecommendation to zero", "color:orange;font-weight:bold");
                    $scope.values.additiveRecommendation = "";
                    console.warn("%cSetting specialRecommendation to zero", "color:orange;font-weight:bold");
                    $scope.values.specialRecommendation = "";
                    console.warn("%cSetting note to zero", "color:orange;font-weight:bold");
                    $scope.values.note = "";
                    console.warn("%cSetting contingency to zero", "color:orange;font-weight:bold");
                    $scope.values.contingency = "";
                }/*End calculation of $scope.estimatedFluidVolume*/

                /*Calculate Actual Pump Output*/
                if($scope.values.estimatedFunnelViscosity !== 0 && $scope.input["soil"]["value"] && $scope.input["pump"]) {
                    console.info("%cShould now calculate $scope.actualPumpOutput", "color: green;font-weight:bold");
                    $scope.values.actualPumpOutput = BaroidActualPumpOutputCalculator.calculate($scope.input["soil"]["value"],
                        $scope.values.estimatedFunnelViscosity,$scope.input["pump"]);
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting actualPumpOutput to zero", "color:orange;font-weight:bold");
                    $scope.values.actualPumpOutput = 0;
                }/*End calculation of $scope.actualPumpOutput*/

                /*Calculate Recommended Pullback Speed*/
                if($scope.input["soil"]["value"] && $scope.values.estimatedFluidVolume !== 0 && $scope.input["length"]
                    && $scope.input["drillpipe"] && $scope.values.actualPumpOutput !== 0) {
                    console.info("%cShould now calculate $scope.recommendedPullbackSpeed", "color: green;font-weight:bold");
                    $scope.values.recommendedPullbackSpeed =
                        BaroidRecommendedPullbackCalculator.calculate($scope.input["soil"]["value"],
                            $scope.values.estimatedFluidVolume,$scope.input["length"],$scope.input["drillpipe"],
                            $scope.values.actualPumpOutput);
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting recommendedPulbackSpeed to zero", "color:orange;font-weight:bold");
                    $scope.values.recommendedPullbackSpeed = 0;
                }/*End calculation of $scope.actualPumpOutput*/

            });

            /**
             * Popups (help)
             * Each should include "scope":$scope so as to call close() on the popup
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
                        config["templateUrl"] = baroidHTMLFiles.hddPullbackInputPopup;
                        cssClass = "popup-xlarge";
                        break;
                    case "calculations":
                        config["title"] = "Calculations";
                        config["templateUrl"] = baroidHTMLFiles.hddPullbackCalculationsPopup;
                        cssClass = "popup-large";
                        break;
                    case "notes":
                        config["title"] = "Notes";
                        config["templateUrl"] = baroidHTMLFiles.hddPullbackFormationPopup;
                        cssClass = "popup-large";
                        break;
                }
                BaroidPopupService.show(config);
                $timeout(function () {
                    angular.element("div.popup").addClass(cssClass);
                },50);
            };
            /**
             * Close the opened popup
             */
            $scope.close = function () {
                BaroidPopupService.closeCurrent();
            };

        }]);