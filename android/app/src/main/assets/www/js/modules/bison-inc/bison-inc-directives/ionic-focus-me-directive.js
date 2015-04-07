angular.module("bisonInc")

    /**
     * This is recommended by Ionic dev in order to focus an element
     * 500ms is the first value for which I've seen it work successfully
     */
    .directive("focusMe", ["$timeout", function ($timeout) {
        //-- This is per Ionic Framework Team's advice
        return {
            link: function (scope, element, attrs) {
                $timeout(function () {
                    element.focus();
                }, 500);
            }
        }
    }]);