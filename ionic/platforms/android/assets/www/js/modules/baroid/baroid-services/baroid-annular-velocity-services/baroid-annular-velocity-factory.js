angular.module("baroidApp").factory("BaroidAnnularVelocityValuesFactory",
    [function () {
        return {
            "annularVelocity":0,
            /**
             * @type {string} Baroid's advice depending on the above numbers
             */
            "advice":"",
            /**
             * @type {string} Warning issued depending on the user's input received
             */
            "warning":"",
            /**
             * @type {string} Rule of thumb
             */
            "ruleOfThumb":""
        }
    }]);
/**
 * @type {number} The diameter of the drillbit in inches
 */
//"drillBitDiameter":0,
/**
 * @type {number} The diameter of the drill pipe in inches
 */
//"drillPipeDiameter":0,
/**
 * @type {number} Pump output in gallons per minute
 */
//"pumpOutput":0,
/**
 * @type {number} Annular velocity calculated in feet per minute
 */