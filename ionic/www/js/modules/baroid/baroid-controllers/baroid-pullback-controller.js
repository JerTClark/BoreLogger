angular.module("baroidApp").controller("BaroidPullbackController",
    ["$scope", "BaroidPullbackInputs", "BaroidSoilTypes", "BaroidEstimatedFunnelViscosity",
        "BaroidEstimatedFluidVolumeCalculator", "BaroidActualPumpOutputCalculator",
        "BaroidRecommendedPullbackCalculator", "BaroidPullbackValuesFactory", "$cordovaToast",
        function ($scope, BaroidPullbackInputs, BaroidSoilTypes, BaroidEstimatedFunnelViscosity,
                  BaroidEstimatedFluidVolumeCalculator, BaroidActualPumpOutputCalculator,
                  BaroidRecommendedPullbackCalculator, BaroidPullbackValuesFactory, $cordovaToast) {

            /**
             * Each $scope.row* object represents a two-column row of inputs in the view
             * @type {Array}
             */
            $scope.rowOne = BaroidPullbackInputs.RowOne;
            $scope.rowTwo = BaroidPullbackInputs.RowTwo;

            /**
             * Soil types are objects with a
             * @type {BaroidSoilTypes|Object} type: string soil description; value: numeric value for calculations
             */
            $scope.soilTypes = BaroidSoilTypes;

            /**
             * @desc Object that holds all user input via ngModel directives on each
             * @type {{length: string, diameter: string, drillpipe: string, pump: string, soil: string}}
             */
            $scope.input = {
                "length":"",
                "diameter":"",
                "drillpipe":"",
                "pump":"",
                "soil":{"type":"","value":""}
            };

            /**
             *
             */
            $scope.values = BaroidPullbackValuesFactory;

            /**
             * @desc Depends on $scope.input["diameter"], $scope.input["drillpipe"], and $scope.input["soil"]["value"]
             * @type {number} Estimated Funnel Viscosity (of the mix)
             */
            $scope.estimatedFunnelViscosity = 0;

            /**
             * @desc Depends on $scope.input["soil"]["value"], $scope.input["diameter"], and $scope.input["length"]
             * @type {number} Estimated Fluid Volume (of the hole)
             */
            $scope.estimatedFluidVolume = 0;

            /**
             * @desc Depends on $scope.estimatedFunnelViscosity, $scope.input["soil"]["value"], and $scope.input["pump"]
             * @type {number} Actual Pump Output (of the rig)
             */
            $scope.actualPumpOutput = 0;

            /**
             * @desc $scope.input["soil"]["value"], $scope.estimatedFluidVolume, $scope.input["length"], $scope.input["drillpipe"],
             *     and $scope.actualPumpOutput
             * @type {number} Recommended Pullback Speed (minutes per drill pipe)
             */
            $scope.recommendedPullbackSpeed = 0;


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
                            $scope.estimatedFunnelViscosity =
                                BaroidEstimatedFunnelViscosity[$scope.input["soil"]["value"]]($scope.input["diameter"], $scope.input["length"]);
                        }
                        else {
                            $cordovaToast.show("Enter both diameter and length to show Estimated Funnel Viscosity", "long", "bottom");
                            $scope.estimatedFunnelViscosity = 0;
                        }
                    }/*end if-else*/

                    /*For all other soil types*/
                    else {
                        $scope.estimatedFunnelViscosity = BaroidEstimatedFunnelViscosity[$scope.input["soil"]["value"]];
                    }
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting estimatedFunnelViscosity to zero", "color:orange;font-weight:bold");
                    $scope.estimatedFunnelViscosity = 0;
                }/*End calculation of $scope.estimatedFunnelViscosity*/

                /*Calculate Estimated Fluid Volume*/
                if($scope.input["soil"]["value"]&&$scope.input["diameter"]&&$scope.input["length"]) {
                    console.info("%cShould now calculate $scope.estimatedFluidVolume", "color: green;font-weight:bold");
                    $scope.estimatedFluidVolume = BaroidEstimatedFluidVolumeCalculator.calculate($scope.input["soil"]["value"]
                        ,$scope.input["diameter"],$scope.input["length"]);
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting estimatedFluidVolume to zero", "color:orange;font-weight:bold");
                    $scope.estimatedFluidVolume = 0;
                }/*End calculation of $scope.estimatedFluidVolume*/

                /*Calculate Actual Pump Output*/
                if($scope.estimatedFunnelViscosity !== 0 && $scope.input["soil"]["value"] && $scope.input["pump"]) {
                    console.info("%cShould now calculate $scope.actualPumpOutput", "color: green;font-weight:bold");
                    $scope.actualPumpOutput = BaroidActualPumpOutputCalculator.calculate($scope.input["soil"]["value"],
                        $scope.estimatedFunnelViscosity,$scope.input["pump"]);
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting actualPumpOutput to zero", "color:orange;font-weight:bold");
                    $scope.actualPumpOutput = 0;
                }/*End calculation of $scope.actualPumpOutput*/

                /*Calculate Recommended Pullback Speed*/
                if($scope.input["soil"]["value"] && $scope.estimatedFluidVolume !== 0 && $scope.input["length"] && $scope.input["drillpipe"] && $scope.actualPumpOutput !== 0) {
                    console.info("%cShould now calculate $scope.recommendedPullbackSpeed", "color: green;font-weight:bold");
                    $scope.recommendedPullbackSpeed =
                        BaroidRecommendedPullbackCalculator.calculate($scope.input["soil"]["value"],
                            $scope.estimatedFluidVolume,$scope.input["length"],$scope.input["drillpipe"],
                            $scope.actualPumpOutput);
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting recommendedPulbackSpeed to zero", "color:orange;font-weight:bold");
                    $scope.recommendedPullbackSpeed = 0;
                }/*End calculation of $scope.actualPumpOutput*/

            });

            //TODO delete debug console.Log()'s
            $scope.logToConsole = function () {
                console.group("HDD Pullback logToConsole()");
                    console.info("$scope.input: %O", $scope.input);
                    console.info("$scope.values: %O", $scope.values);
                console.groupEnd();
            };

        }]);