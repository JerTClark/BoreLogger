angular.module("baroidApp").service("BaroidSpecialRFFService",
    [function () {

        /**
         * Calculate the special recommendations (i.e., Penetrol)
         * @param soilType {number} The numeric value associates with the selected soilType
         * @param length {number} The length of the bore in feet
         * @param diameter {number} The diameter of the bore hole
         */
        this.calculateSpecialRecommendation = function (soilType, length, diameter) {
            var special = "";
            var condition, controlOne, controlTwo;

            switch(soilType) {
                case 1:
                    special = "N Seal (see note)";
                    break;
                case 2:
                    special = "No-Sag 0.5 lb";
                    break;
                case 3:
                    special = "No-Sag (see note)";
                    break;
                case 4:
                    special = "No-Sag (see note)";
                    break;
                case 5:
                    special = "Penetrol 1 qt";
                    break;
                case 6:
                    /*Special case for clay*/
                    if(diameter < 8) {
                        controlOne = 0;
                    }
                    else {
                        controlOne = 1;
                    }
                    if(length < 500) {
                        controlTwo = 0;
                    }
                    else {
                        controlTwo = 1;
                    }
                    condition = controlOne + controlTwo;
                    if(condition === 0) {
                        special = "Aqua-Clear PFD 6 oz (optional)";
                    }
                    else {
                        special = "Penetrol 2 qt";
                    }
                    break;
                case 7:
                    special = "No-Sag (see note)";
                    break;
            }
            return special;
        }

    }]);
