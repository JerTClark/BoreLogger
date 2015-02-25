angular.module("bisonInc")
    .directive("bisonCategoryWithDescription", function (){
        return {
            restrict:"E",
            scope:{
                categoryName:"@",
                categoryDescription:"@"
            },
            template:'<div class="dark-bg bison-shrink-item">' +
                '<h1 class="bison-category bison-small-list"' +
                'on-tap="showDescription($event)"' +
                'on-click="showDescription($event)">' +
                '{{categoryName}}</h1>' +
                '<p class="bison-description popup-head hide">' +
                '{{categoryDescription}}</p></div>',
            controller: function ($scope) {
                $scope.showDescription = function ($event) {
                    angular.element($event.target).toggleClass('activated');
                    angular.element($event.target).siblings('p').slideToggle(200);
                };
            }
        }
    })
    //Has one button used to display a modal and another that can be disabled via a form controller
    .directive("bisonFormButtonPanel", function () {
        return {
            restrict: "E",
            scope: {
                bisonModalTemplate: "@",
                bisonModalTitle: "@",
                bisonModalDescription: "@",
                bisonModalType:"@",
                bisonModalValues: "&",
                bisonFormController: "=",
                bisonDisableSubmit: "=",
                bisonSubmit: "&"
            },
            template: '<ion-list type="list-inset">' +
                '<div class="bison-border-light">' +
                '<ion-item class="bison-input-padding">' +
                '<button class="button button-full button-assertive bison-rough-text"' +
                'ng-click="openModal()">Double-check</button>' +
                '<button class="button button-full button-assertive bison-rough-text"' +
                'ng-disabled="bisonFormController.$invalid"' +
                'ng-click="bisonSubmit()">Continue</button>' +
                '</ion-item></div></ion-list>',
            controller: function($scope, $ionicModal){
                //-- Ionic Modal
                $ionicModal.fromTemplateUrl($scope.bisonModalTemplate, {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    $scope.modal = modal;
                });
                $scope.openModal = function () {
                    $scope.modal.title = $scope.bisonModalTitle;
                    $scope.modal.description = $scope.bisonModalDescription;
                    $scope.modal.logOrJournal = $scope.bisonModalType;
                    $scope.modal.values = $scope.bisonModalValues();
                    $scope.modal.show();
                };
                $scope.closeModal = function () {
                    $scope.modal.hide();
                };
                $scope.$on('$destroy', function () {
                    $scope.modal.remove();
                });
                $scope.$on('modal.hidden', function () {
                    console.log('Modal hidden');
                });
                $scope.$on('modal.removed', function () {
                    console.log('Modal removed');
                });
            }
        }
    })
    .directive("bisonInputField", function () {
        return {
            restrict: "E",
            scope: {
                bisonId: "@",
                bisonHint: "@",
                bisonInputName: "@",
                bisonInputType: "@",
                bisonModel: "=",
                bisonRequired: "=",
                bisonFormController: "="
            },
            template:'<div class="bison-border-gray bison-border-input bison-top-and-bottom-margin">' +
                '<label class="item item-input item-floating-label">' +
                '<span class="input-label bison-floating-label">{{bisonHint}}</span>' +
                '<input id={{bisonId}}-input name="{{bisonInputName}}" class="bison-input-field" type="{{bisonInputType}}" placeholder="{{bisonHint}}" ng-model="bisonModel" ng-required="bisonRequired" minlength="1">' +
                '<span class="bison-error" ng-show="bisonFormController.{{bisonInputName}}.$dirty && bisonFormController.{{bisonInputName}}.$invalid">^Required</span></label></div>',
            controller: function ($scope) {}
        }
    });