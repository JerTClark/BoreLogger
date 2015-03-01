angular.module("bisonInc")
    .directive("bisonCategoryWithDescription", function (){
        /**
         * Used to display an interactive category header that has
         * a hidden description the user can see by tapping the header
         */
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
    /**
     * Has one button used to display a modal and another
     * that can be disabled via a form controller.
     * The latter is only shown if text for it is provided
     * via @bisonBottomButtonText
     */
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
                bisonSubmit: "&",
                bisonTopButtonText: "@",
                bisonBottomButtonText: "@",
                bisonModalButtonText: "@",
                bisonBottomModalButtonText: "@",
                bisonModalOnClick: "&",
                bisonOnCancel: "&",
                bisonPopupTitle: "@",
                bisonPopupSubtitle: "@",
                bisonPopupPlaceholder: "@"
            },
            template: '<ion-list type="list-inset">' +
                '<div>' +
                '<ion-item class="bison-options-panel">' +
                '<button class="button button-full button-assertive bison-rough-text"' +
                'ng-disabled="bisonFormController.$invalid"' +
                'ng-click="openModal()">{{bisonTopButtonText}}</button>' +
                '<button class="button button-full button-assertive bison-rough-text"' +
                'ng-click="bisonOnCancel()" ng-if="bisonBottomButtonText">{{bisonBottomButtonText}}</button>' +
                '</ion-item></div></ion-list>',
            controller: function($scope, $ionicModal, $ionicPopup, $timeout){
                /**
                 * The $ionicModal
                 */
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
                    $scope.modal.type = $scope.bisonModalType;
                    $scope.modal.values = $scope.bisonModalValues();
                    $scope.modal.buttonText = $scope.bisonModalButtonText;
                    $scope.modal.bottomButtonText = $scope.bisonBottomModalButtonText;
                    $scope.modal.onClick = $scope.bisonModalOnClick;
                    $scope.modal.show();
                    focusFirstInput();
                };
                /**
                 * If the @bisonModalTemplate has one or more input elements,
                 * add an attribute of "first-input" to have it receive focus
                 * when the $ionicModal loads
                 */
                function focusFirstInput() {
                    $timeout(function () {
                        angular.element("input[first-input]").focus();
                    }, 500);
                }
                $scope.closeModal = function () {
                    $scope.modal.hide();
                };
                $scope.$on('$destroy', function () {
                    $scope.modal.remove();
                });
                $scope.$on('modal.hidden', function () {});
                $scope.$on('modal.removed', function () {});

                /**
                 * Various UI effects
                 */
                $scope.toggleContent = function () {
                    var elem = angular.element(".bisonHide");
                    if(elem) elem.fadeToggle();
                };
                $scope.fadeContent = function () {
                    var elem = angular.element(".bisonHide");
                    if(elem) elem.fadeOut();
                };
                $scope.slowFadeOut = function () {
                    $timeout(function () {
                        $scope.fadeContent();
                    }, 1500);
                };

                /**
                 * Formats its parameters to an acceptable object
                 * for passing parameters to the bisonModalOnClick
                 * parent scope function
                 * @param val {String} [Optional]
                 * @param from {Number} [Optional]
                 * @param to {Number} [Optional]
                 */
                $scope.respond = function (val, from, to) {
                    var value = {
                            value: val,
                            fromIndex: from,
                            toIndex: to
                        };
                    $scope.bisonModalOnClick(value);
                };

                /**
                 * The $ionicPopup
                 * Also has access to the &bisonModalOnClick parent
                 * scope function via $scope.respond()
                 * Has an input and two buttons ("Cancel" and "Enter")
                 * The "Enter" button fires $scope.respond() after gettting
                 * the value from the input element
                 * @param value {String} [Optional]
                 * @param fromIndex {Number} [Optional]
                 * @param toIndex {Number} [Optional]
                 */
                $scope.popup = function (value, fromIndex, toIndex) {
                    var toEdit = value;
                    var crossingPopup = $ionicPopup.show({
                        scope: $scope,
                        template:'<label class="item-input item-floating-label" focus-me>' +
                            '<span class="input-label bison-floating-label">{{bisonPopupPlaceholder}}</span>' +
                            '<input type="text" id="popupInput" class="bison-input-field"' +
                            'placeholder="{{bisonPopupPlaceholder}}" focus-me>' +
                            '</label>',
                        title:$scope.bisonPopupTitle,
                        subTitle:$scope.bisonPopupSubtitle,
                        buttons: [
                            {
                                text: "Cancel",
                                type: "button-assertive"
                            },
                            {
                                text: "Enter",
                                type: "button-assertive",
                                onTap: function () {
                                    var value = angular.element("#popupInput").val();
                                    $scope.respond(value, fromIndex, toIndex);
                                }
                            }
                        ]
                    });
                    /**
                     * Set input value if applicable
                     * via a call to $timeout service
                     */
                    if(toEdit) {
                        $timeout(function () {
                            angular.element("#popupInput").val(toEdit);
                        },500);
                    }
                }
            }
        }
    })
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
            template:'<div class="bison-border-gray bison-border-input bison-top-and-bottom-margin">' +
                '<label class="item item-input item-floating-label">' +
                '<span class="input-label bison-floating-label">{{bisonHint}}</span>' +
                '<input id={{bisonIndex}}-input name="{{bisonInputName}}" ng-class="input-{{bisonIndex}}" class="bison-input-field" type="{{bisonInputType}}" placeholder="{{bisonHint}}" ng-model="bisonModel" ng-required="bisonRequired" minlength="1">' +
                '<span class="bison-error" ng-show="bisonFormController.{{bisonInputName}}.$dirty && bisonFormController.{{bisonInputName}}.$invalid">^Required</span></label></div>',
            controller: function ($scope) {

            }
        }
    }])
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