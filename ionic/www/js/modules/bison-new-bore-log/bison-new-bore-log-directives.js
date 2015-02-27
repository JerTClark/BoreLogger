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
                bisonSubmit: "&",
                bisonTopButtonText: "@",
                bisonBottomButtonText: "@",
                bisonModalButtonText: "@",
                bisonBottomModalButtonText: "@",
                bisonModalOnClick: "&",
                bisonOnCancel: "&"
            },
            template: '<ion-list type="list-inset">' +
                '<div class="bison-border-light">' +
                '<ion-item class="bison-input-padding">' +
                '<button class="button button-full button-assertive bison-rough-text"' +
                'ng-disabled="bisonFormController.$invalid"' +
                'ng-click="openModal()">{{bisonTopButtonText}}</button>' +
                '<button class="button button-full button-assertive bison-rough-text"' +
                'ng-click="bisonOnCancel()">{{bisonBottomButtonText}}</button>' +
                '</ion-item></div></ion-list>',
            controller: function($scope, $ionicModal, $ionicPopup, $timeout){
                $scope.cancel = function () {
                    history.back();
                };
                $scope.popupInputValue = "";
                //-- Ionic Modal
                $ionicModal.fromTemplateUrl($scope.bisonModalTemplate, {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    $scope.modal = modal;
                });
                $scope.openModal = function () {
                    $scope.bisonSubmit();
                    $scope.modal.title = $scope.bisonModalTitle;
                    $scope.modal.description = $scope.bisonModalDescription;
                    $scope.modal.logOrJournal = $scope.bisonModalType;
                    $scope.modal.values = $scope.bisonModalValues();
                    $scope.modal.buttonText = $scope.bisonModalButtonText;
                    $scope.modal.bottomButtonText = $scope.bisonBottomModalButtonText;
                    $scope.modal.onclick = $scope.bisonModalOnClick;
                    $scope.modal.show();
                    $timeout(function () {
                        $scope.fadeContent();
                    }, 1500);
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
                $scope.toggleContent = function () {
                    console.log("toggle called");
                    angular.element("#content").fadeToggle();
                };
                $scope.fadeContent = function () {
                    angular.element("#content").fadeOut();
                };
                $scope.respond = function (value) {
                    console.log(value + " in respond()");
                    $scope.bisonModalOnClick(value);
                };

                $scope.popup = function () {
                    var crossingPopup = $ionicPopup.show({
                        scope: $scope,
                        template:'<label class="item-input item-floating-label" focus-me>' +
                            '<span class="input-label bison-floating-label">Crossing</span>' +
                            '<input type="text" id="popupInput" class="bison-input-field"' +
                            'placeholder="crossing">' +
                            '</label>',
                        title:"Crossing",
                        subTitle:"Enter utility or natural crossing",
                        buttons: [
                            {
                                text: "Cancel",
                                type: "button-assertive"
                            },
                            {
                                text: "Record",
                                type: "button-assertive",
                                onTap: function () {
                                    var value = {
                                        value: angular.element("#popupInput").val()
                                    };
                                    console.log(value);
                                    $scope.respond(value);
                                }
                            }
                        ]
                    });
                }
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
    })
    .directive("focusMe", ["$timeout", function ($timeout) {
        //-- This is per Ionic Framework Team's advice (doesn't work)
        return {
            link: function (scope, element, attrs) {
                $timeout(function () {
                    element[0].focus();
                }, 150);
            }
        }
    }]);