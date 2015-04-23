angular.module("baroidApp").service("BaroidRecommendedPullbackCalculator",
    [function () {

        /**
         * @desc Calculates the recommended pullback speed
         * @param soilType {number} The numeric value of the soil type
         * @param estFluidVolume {number} The calculated <b>Estimated Fluid Volume</b> in gallons
         * @param length {number} The length of the bore in feet
         * @param drillpipe {number} The length of the drill pipe in feet
         * @param actualPumpOutput {number} The calculated <b>Actual Pump Output</b> in gallons per minute
         */
        this.calculate = function (soilType, estFluidVolume, length, drillpipe, actualPumpOutput) {
            var O13, O9, O12;

            if (length > 0) {
                O9 = 1;
            }
            else {
                O9 = 0;
            }

            if (actualPumpOutput) {
                O12 = 1;
            }
            else {
                O12 = 0;
            }

            O13 = O9 + O12;

            if (O13 === 2) {
                return estFluidVolume/length*drillpipe/actualPumpOutput;
            }
            else return 0;

        }

    }]);