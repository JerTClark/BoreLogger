angular.module("bisonInc")
/**
 * An input field with special CSS validation styles associated with it
 * and Ionic's floating label effect
 */
    .directive("bisonInputField", [function () {
        return {
            restrict: "E",
            scope: {
                bisonId: "@",
                bisonHint: "@",
                bisonInputName: "@",
                bisonInputType: "@",
                bisonIndex: "@",
                bisonModel: "=",
                bisonRequired: "=",
                bisonFormController: "="
            },
            template:'<div class="bison-border-input bison-top-and-bottom-margin">' +
            '<label class="item item-input item-floating-label">' +
            '<span class="input-label bison-floating-label">{{bisonHint}}</span>' +
            '<input id={{bisonIndex}}-input name="{{bisonInputName}}" ng-class="input-{{bisonIndex}}" class="bison-input-field" type="{{bisonInputType}}" placeholder="{{bisonHint}}" ng-model="bisonModel" ng-required="bisonRequired" minlength="1">' +
            '<span class="bison-error" ng-show="bisonFormController.{{bisonInputName}}.$dirty && bisonFormController.{{bisonInputName}}.$invalid">^Required</span></label></div>',
            link: function (scope, element, attrs) {
                if(attrs["bisonIndex"] == 4) { }
            }
        }
    }]);