angular.module("baroidApp").service("BaroidAdditiveRFFService",
    [function () {

        /**
         * Calculate the additive recommendations (i.e., EZ-Mud)
         * @param soilType {number} The numeric value associates with the selected soilType
         * @param length {number} The length of the bore in feet
         * @param diameter {number} The diameter of the bore hole
         */
        this.calculateAdditiveRecommendation = function (soilType, length, diameter) {
            var additive = "";
            var condition, controlOne, controlTwo;
            switch(soilType) {
                case 1:
                    additive = "No-Sag 0.5 lb";
                    break;
                case 2:
                    additive = "Quick-trol Gold LV 0.5 lb";
                    break;
                case 3:
                    additive = "Quick-trol Gold*";
                    break;
                case 4:
                    additive = "Quick-trol Gold*";
                    break;
                case 5:
                    additive = "Quick-trol Gold LV 0.5 lb";
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
                        additive = "Penetrol 2 qt";
                    }
                    else {
                        additive = "EZ-Mud 1 pt"
                    }
                    break;
                case 7:
                    additive = "Quick-trol Gold LV*";
                    break;
            }
            return additive;
        }

    }]);
