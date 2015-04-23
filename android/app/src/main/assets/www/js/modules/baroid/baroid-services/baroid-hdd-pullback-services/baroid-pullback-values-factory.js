angular.module("baroidApp").factory("BaroidPullbackValuesFactory",
    [function () {

        return {
            /**
             * @desc Depends on $scope.input["diameter"], $scope.input["drillpipe"], and $scope.input["soil"]["value"]
             * @type {number} Estimated Funnel Viscosity (of the mix)
             */
            "estimatedFunnelViscosity": 0,

            /**
             * @desc Depends on $scope.input["soil"]["value"], $scope.input["diameter"], and $scope.input["length"]
             * @type {number} Estimated Fluid Volume (of the hole)
             */
            "estimatedFluidVolume": 0,

            /**
             * @desc Depends on $scope.estimatedFunnelViscosity, $scope.input["soil"]["value"], and $scope.input["pump"]
             * @type {number} Actual Pump Output (of the rig)
             */
            "actualPumpOutput": 0,

            /**
             * @desc $scope.input["soil"]["value"], $scope.estimatedFluidVolume, $scope.input["length"], $scope.input["drillpipe"],
             *     and $scope.actualPumpOutput
             * @type {number} Recommended Pullback Speed (minutes per drill pipe)
             */
            "recommendedPullbackSpeed": 0,

            /**
             * @desc Bore-Gel Recommended Fluid Formation (per 100 gallon)
             * @type {string} Recommendation of amount of Bore-Gel per 100 gallons of water in drilling fluid
             */
            "baseRecommendation": "",

            /**
             * @desc Additives Recommended Fluid Formation (per 100 gallon)
             * @type {string} Recommendation of the amount of Quick-Trol, Penetrol, EZ-Mud, or No-Sag per 100 gallons of water
             */
            "additiveRecommendation": "",

            /**
             * @desc Special Additives Recommended Fluid Formation (per 100 gallons)
             * @type {string} Recommended amount of N-Seal, No-Sag, Penetrol, or Aqua-Clear PFD per 100 gallons of water in drilling fluid
             */
            "specialRecommendation": "",

            /**
             * @desc An additional note provided by Baroid on the general contributing thoughts behind the recommendations given
             * @type {string} The footnote to Baroid's general recommendations
             */
            "note": "",

            /**
             * @desc Baroid's contingency notes that vary depending on user input
             * @type {string} The contingency note
             */
            "contingency": ""

        }

    }]);