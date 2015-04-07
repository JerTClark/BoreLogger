//var family = require("../../../family-members.js");
angular.module("baroidApp").controller("BaroidOptionsController",
    ["$scope", "$state", "BaroidOptionCategories",
        function ($scope, $state, BaroidOptionCategories) {

            /**
             * Set the available options and buttons
             */
            $scope.optionCategories = BaroidOptionCategories;

            var myFamily = getFamily();
            myFamily.initFamily();

            /**
             * Handle the button clicks
             * @param button The button clicked
             */
            $scope.buttonClicked = function (button, $event) {
                switch(button.code) {
                    case 0:
                        console.info(button.name);
                        myFamily.logFamily();
                        break;
                    case 1:
                        console.info(button.name);
                        myFamily.logOldest();
                        break;
                    case 2:
                        //console.info(button.name);
                        //myFamily.logSortedFamily();
                        $state.go("pullback");
                        break;
                    case 3:
                        console.info(button.name);
                        myFamily.optionalParam(myFamily.myFamily[0],myFamily.myFamily[1]);
                        myFamily.optionalParam(myFamily.myFamily[0],myFamily.myFamily[1],myFamily.myFamily[2]);
                        break;
                    case 4:
                        console.info(button.name);
                        myFamily.defaultParam(myFamily.myFamily[0],myFamily.myFamily[1]);
                        myFamily.defaultParam(myFamily.myFamily[0],myFamily.myFamily[1],myFamily.myFamily[2]);
                        break;
                }/*end switch*/
            };

        }]);