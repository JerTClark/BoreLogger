angular.module("baroidApp").service("BaroidEstimatedFluidVolumeCalculator",
    [function () {

        /**
         * @desc Calculates and returns the <b>estimated fluid volume</b> in gallons
         * @param soilType {number} The value of the soil type
         * @param diameter {number} The diameter of the hole in inches
         * @param length {number} The length of the bore in feet
         */
        this.calculate = function (soilType, diameter, length) {
            var multiplier = 0;

            switch(soilType) {
                case 7:
                    multiplier = 2;
                    break;
                case 1:
                    multiplier = 4;
                    break;
                case 2:
                    multiplier = 4;
                    break;
                case 3:
                    multiplier = 3;
                    break;
                case 4:
                    multiplier = 2;
                    break;
                case 5:
                    multiplier = 3;
                    break;
                case 6:
                    multiplier = 4;
                    break;
                default:
                    multiplier = 0;
                    break;
            }

            if(length > 800) {
                return diameter*diameter/24.5*length*(multiplier+3);
            }
            else if (length <= 800 && length > 500) {
                return diameter*diameter/24.5*length*(multiplier+2);
            }
            else if (length <= 500 && length > 300) {
                return diameter*diameter/24.5*length*(multiplier+1)
            }
            else {
                return diameter*diameter/24.5*length*multiplier
            }
        }

    }]);