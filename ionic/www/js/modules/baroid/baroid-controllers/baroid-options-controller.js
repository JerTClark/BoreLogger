//var family = require("../../../family-members.js");
angular.module("baroidApp").controller("BaroidOptionsController",
    ["$scope", "$state", "BaroidOptionCategories",
        function ($scope, $state, BaroidOptionCategories) {

            /**
             * Set the available options and buttons
             */
            $scope.optionCategories = BaroidOptionCategories;

            /**
             * Handle the button clicks
             * @param button The button clicked
             */
            $scope.buttonClicked = function (button) {
                var wasClicked = " has been clicked";
                switch(button.code) {
                    case 0:
                        console.info(button.name + wasClicked);
                        break;
                    case 1:
                        console.info(button.name + wasClicked);
                        break;
                    case 2:
                        $state.go("pullback");
                        break;
                    case 3:
                        console.info(button.name + wasClicked);
                        break;
                    case 4:
                        console.info(button.name + wasClicked);
                        break;
                }/*end switch*/
            };

        }]);