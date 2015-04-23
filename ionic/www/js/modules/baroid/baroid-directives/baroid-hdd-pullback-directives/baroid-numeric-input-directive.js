angular.module("baroidApp")
    .directive("baroidNumericInput", ["baroidHTMLFiles",
        function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope:{
            inputType:"@",
            inputName:"@",
            inputTitle:"@",
            inputClass:"@",
            itemIndex:"@",
            labelClass:"@",
            minRange:"@",
            maxRange:"@",
            isRequired:"@",
            hint:"@",
            errorMessage:"@",
            model:"=",
            baroidFormController:"="
        },
        templateUrl:baroidHTMLFiles.baroidNumericInput
        //template:'<ion-item class="item-divider">{{inputName}}</ion-item><label class="item item-input item-floating-label"><span class="input-label">{{placeholderValue}}</span><input name="{{inputName}}" type="{{inputType}}"placeholder="{{placeholderValue}}" ng-required="{{isRequired}}"minlength="1"><span class="baroid-error" ng-show="baroidFormController.{{inputName}}.$dirty && baroidFormController.{{inputName}}.$invalid">^{{requiredMessage}}</span></label>'
    }
}]);