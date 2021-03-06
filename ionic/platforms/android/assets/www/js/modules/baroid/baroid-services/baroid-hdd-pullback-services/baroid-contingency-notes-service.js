angular.module("baroidApp").service("BaroidContingencyNoteService",
    [function () {

        /**
         * Calculate the special recommendations (i.e., Penetrol)
         * @param soilType {number} The numeric value associates with the selected soilType
         * @param length {number} The length of the bore in feet
         * @param diameter {number} The diameter of the bore hole
         */
        this.getContingencyNote = function (soilType, length, diameter) {
            var contingencyNote = "";
            var conditional, controlOne, controlTwo;

            switch(soilType) {
                case 1:
                    contingencyNote = "N-SEAL has proven effective in improving the fluid's sealing and carrying capacity in this environment. If recycling, N-SEAL can be periodically pumped at a concentration of 5 to 10 lb per 100 gallons. If not recycling, N-SEAL can be added to the fluid at a concentration of 5-10 lb per 100 gallons on a continuous basis. BAROLIFT can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to improve suspension and hole cleaning. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    break;
                case 2:
                    contingencyNote = "N-SEAL has proven effective in improving the fluid�s sealing and carrying capacity in this environment. If recycling, N-SEAL can be periodically pumped at a concentration of 5 to 10 lb per 100 gallons. If not recycling, N-SEAL can be added to the fluid at a concentration of 5-10 lb per 100 gallons on a continuous basis. BAROLIFT can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to improve suspension and hole cleaning. If drilling in coastal areas where seawater may be encountered while drilling, both NO-SAG and QUIK-TROL GOLD may be needed because of their resistance to contamination. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    break;
                case 3:
                    contingencyNote = "If drilling in coastal areas where seawater may be encountered while drilling, both NO-SAG and QUIK-TROL GOLD may be needed because of their resistance to contamination. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    break;
                case 4:
                    contingencyNote = "If drilling in coastal areas where seawater may be encountered while drilling, both NO-SAG and QUIK-TROL GOLD may be needed because of their resistance to contamination. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    break;
                case 5:
                    contingencyNote = "PENETROL or CON DET can be added to offset the sticking tendencies of the clay. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
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
                    conditional = controlOne + controlTwo;
                    if(conditional === 0) {
                        contingencyNote = "Clay can be very site specific. Clay with lower moisture contents tend to swell more and become stickier. For this reason, the amount of PENETROL needed is going to depend on the swell-ability of the clay. AQUA-CLEAR PFD can be added if maintaining flow is hampered by the clay wanting to reconstitute into a solid mass behind the bit or reamer. Double drilling or swabbing may be utilized to stabilize and condition hole. BAROLIFT can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to improve suspension and hole cleaning.";
                    }
                    else {
                        contingencyNote = "IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    }
                    break;
                case 7:
                    contingencyNote = "Typically, higher volumes of fluid are used to run a mud motor when drilling rock.  You will need to consult the motor specifications to determine appropriate volumes. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons.";
                    break;
            }
            return contingencyNote;
        }

    }]);