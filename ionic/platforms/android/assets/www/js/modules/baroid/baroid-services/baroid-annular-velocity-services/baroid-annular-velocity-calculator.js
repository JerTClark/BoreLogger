angular.module("baroidApp").service("BaroidAnnularVelocityCalculator",
    [function () {

        /**
         *  Calculates the Annular Velocity
         * @param drillBitDiameter {number} The drill bit diameter in inches
         * @param drillPipeDiameter {number} Ths drill pipe diameter in inches
         * @param pumpOutput {number} The pump output in gpm
         * @return {number|string} The annular velocity calculated or empty string
         */
        this.calculateAV = function (drillBitDiameter, drillPipeDiameter, pumpOutput) {
            var condition, controlOne, controlTwo = 0;
            if (drillBitDiameter === drillPipeDiameter) {
                return 0;
            }
            if (drillBitDiameter) {
                controlOne = 1;
            } else {
                controlOne = 0;
            }
            if (pumpOutput) {
                controlTwo = 1;
            } else {
                controlTwo = 0;
            }
            condition = controlOne + controlTwo;
            if (condition === 0) {
                return 0;
            } else {
                return pumpOutput / ((drillBitDiameter * drillBitDiameter - drillPipeDiameter * drillPipeDiameter) / 24.5);
            }
        };
        /**
         *  Decides on what the Advice should read
         * @param annularVelocity {number} The Annular Velocity previously calculated
         * @param drillBitDiameter {number} The diameter of the drill bit in inches
         * @param drillPipeDiameter {number} The diameter of the drill pipe in inches
         * @return {string} The warning or an empty string
         */
        this.calculateAdvice = function (annularVelocity, drillBitDiameter, drillPipeDiameter) {
            if(drillBitDiameter === drillPipeDiameter) {
                return "Drill bit diameter should exceed, not equal drill pipe diameter.";
            }
            if (annularVelocity < 30) {
                return "Serious problems may occur due to your extremely low annular velocity. Consult your local Baroid Rep. prior to drilling."
            }
            if (30 <= annularVelocity && annularVelocity < 60) {
                return "Due to your low annular velocity, additional suspension may be necessary to achieve good hole cleaning."
            }
            if (annularVelocity > 160) {
                return "The annular velocity may be so high that it causes hole erosion."
            }
            if (annularVelocity >= 60 && annularVelocity <= 160) {
                return "Unless very large cuttings are produced or hole enlargement occurs, this annular velocity is generally sufficient for hole cleaning."
            }
            else {
                return "";
            }
        };
        /**
         *  Determine if the user's entries merit a warning
         * @param drillBitDiameter {number} The drill bit diameter in inches
         * @param drillPipeDiameter {number} Ths drill pipe diameter in inches
         * @param pumpOutput {number} The pump output in gpm
         * @param annularVelocity {number} The previously calculated Annular Velocity
         * @return warning {string} The generated warning or an empty string
         */
        this.calculateWarning = function (drillBitDiameter, drillPipeDiameter, pumpOutput, annularVelocity) {
            var conditionOne, controlOneA, controlTwoA;
            var warning = "";
            //Calculate condition
            if (annularVelocity > 60) {
                controlOneA = 1;
            } else {
                controlOneA = 0;
            }
            if (annularVelocity < 120) {
                controlTwoA = 1;
            } else {
                controlTwoA = 0;
            }
            conditionOne = controlOneA + controlTwoA;
            if (conditionOne) {/* === 2 Taken out of the if condition*/
                //Figure out the warning
                var conditionTwo, controlOneB, controlTwoB;
                if (drillBitDiameter) {
                    controlOneB = 1;
                } else {
                    controlOneB = 0;
                }
                if (pumpOutput) {
                    controlTwoB = 1;
                } else {
                    controlTwoB = 0;
                }
                conditionTwo = controlOneB + controlTwoB;
                var lowRange, highRange;
                if (conditionTwo) {
                    lowRange = (60 * ((drillBitDiameter * drillBitDiameter - drillPipeDiameter * drillPipeDiameter) / 24.5)).toFixed(2);
                    highRange = (120 * ((drillBitDiameter * drillBitDiameter - drillPipeDiameter * drillPipeDiameter) / 24.5)).toFixed(2);
                    if (lowRange !== 0 && highRange !== "0.00") {
                        warning = "To achieve optimum annular velocity, set your pump output between " + lowRange + " and " + highRange + " gpm."
                    }
                }
            }
            return warning;
        };
        /**
         *  Determines if the "Rule of Thumb" advice should be displayed
         * @param warning {string} The previously determined warning or an empty string
         */
        this.getRuleOfThumb = function (warning) {
            if (warning) {
                return "Annular Velocity between 60 and 120 ft/min is optimum for hole cleaning and stability."
            } else {
                return "";
            }
        };
    }]);