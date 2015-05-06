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
                        break;
                    case 1:
                        $state.go(button.state);
                        break;
                    case 2:
                        $state.go(button.state);
                        break;
                    case 3:
                        $state.go(button.state);
                        break;
                    case 4:
                        $state.go(button.state);
                        break;
                }/*end switch*/
            };

        }]);