angular.module("baroidApp").service("BaroidActualPumpOutputCalculator",
    [function () {

        /**
         * @desc Calculates the Actual Pump Output in gallons per minute
         * @param soilType {number} The numeric value of the soil type
         * @param estFunnelViscosity {number} The calculated <b>Estimated Funnel Viscosity</b>
         * @param pumpRating {number} The pump rating in gallons per minute
         */
        this.calculate = function (soilType, estFunnelViscosity, pumpRating) {
            var litmusTest, paperA, paperB;

            if(pumpRating > 0) {
                paperA = 1;
            }
            else {
                paperA = 0;
            }

            if(estFunnelViscosity) {
                paperB = 1;
            }
            else {
                paperB = 0;
            }

            litmusTest = paperA + paperB;

            /*Only calculate if litmus test passes*/
            if(litmusTest === 2) {
                return (estFunnelViscosity*estFunnelViscosity*0.0071-1.4571*estFunnelViscosity+116.29)/100*pumpRating;
            }
            else {
                return 0;
            }
        }

    }]);