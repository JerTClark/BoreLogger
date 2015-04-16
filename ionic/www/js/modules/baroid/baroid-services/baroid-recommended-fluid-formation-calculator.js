angular.module("baroidApp").service("BaroidRecommendedFluidFormationService",
    [function () {

        /**
         * Calculate the base Recommended Fluid Formation (i.e., Bore-Gel)
         * @param soilType {number} The numeric value associates with the selected soilType
         * @param length {number} The length of the bore in feet
         * @param diameter {number} The diameter of the bore hole
         */
        this.calculateBaseRecommendation = function (soilType, length, diameter) {

            var recommendation = "";
            var controlOne, controlTwo, litmusTest;

            switch(soilType) {
                case 1:
                    recommendation = "Bore-Gel 50 lb";
                    break;
                case 2:
                    recommendation = "Bore-Gel 40 lb";
                    break;
                case 3:
                    recommendation = "Bore-Gel 35 lb";
                    break;
                case 4:
                    recommendation = "Bore-Gel 35 lb";
                    break;
                case 5:
                    recommendation = "Bore-Gel 35 lb";
                    break;
                case 6:
                    /**
                     * A special case in the event that the soil type is clay
                     */

                    /*If diameter is less than 8 inches*/
                    if(diameter < 8) {
                        controlOne = 0;
                    }
                    /*If diameter is greater than 8 inches*/
                    else {
                        controlOne = 1;
                    }

                    /*If length is less than 500 feet*/
                    if(length < 500) {
                        controlTwo = 0;
                    }
                    /*If length is greater than 500 feet*/
                    else {
                        controlTwo = 1;
                    }

                    /*Litmus test*/
                    litmusTest = controlOne + controlTwo;

                    /*If the litmus test is zero*/
                    if(litmusTest === 0) {
                        recommendation = "Poly-Bore 0.5 lb"
                    }
                    /*If the litmus test is one*/
                    else {
                        recommendation = "Bore-Gel 35 lb"
                    }

                    break;
                case 7:
                    recommendation = "Bore-Gel 35 lb";
                    break;
            }

            return recommendation;

        }

    }]);