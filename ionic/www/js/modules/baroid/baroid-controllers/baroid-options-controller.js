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
            function myFamilyLogOutput() {
                myFamily.logFamily();
                myFamily.logOldest();
                myFamily.logSortedFamily();
                myFamily.optionalParam(myFamily.myFamily[0], myFamily.myFamily[1]);
                myFamily.optionalParam(myFamily.myFamily[0], myFamily.myFamily[1], myFamily.myFamily[2]);
                myFamily.defaultParam(myFamily.myFamily[0],myFamily.myFamily[1]);
                myFamily.defaultParam(myFamily.myFamily[0],myFamily.myFamily[1],myFamily.myFamily[2]);
            }

            var jacob = new Family.LovedOne("Jacob", "son");
            function lovedOneLogOutput() {
                jacob.logToConsole();
            }

            /**
             * Handle the button clicks
             * @param button The button clicked
             */
            $scope.buttonClicked = function (button, $event) {
                var wasClicked = " has been clicked";
                switch(button.code) {
                    case 0:
                        myFamilyLogOutput();
                        console.info(button.name + wasClicked);
                        break;
                    case 1:
                        lovedOneLogOutput();
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