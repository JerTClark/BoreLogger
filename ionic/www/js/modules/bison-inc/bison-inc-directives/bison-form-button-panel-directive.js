angular.module("bisonInc")
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
                bisonOnReorder: "&",
                bisonPopupTitle: "@",
                bisonPopupSubtitle: "@",
                bisonPopupPlaceholder: "@"
            },
            //Removed bison-options-panel class from ionItem
            template: '<ion-list type="list-inset">' +
            '<div>' +
            '<ion-item>' +
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
                 * Compensate for Ionic Framework's editable list
                 * that shifts the position of items off the screen
                 * when showing the ionReorderButton
                 */
                $scope.toggleLeft = function () {
                    angular.element(".bison-list-item").toggleClass("bison-reorder-list-item").toggleClass("bison-add-pad-left");
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
                 * Formats its parameters to an acceptable object
                 * for passing parameters to the &bisonOnReorder
                 * parent scope function
                 * @param val {String} [Optional]
                 * @param from {Number} [Optional]
                 * @param to {Number} [Optional]
                 */
                $scope.reorder = function (val, from, to) {
                    var value = {
                        value: val,
                        fromIndex: from,
                        toIndex: to
                    };
                    $scope.bisonOnReorder(value);
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
                                type: "button-positive"
                            },
                            {
                                text: "Enter",
                                type: "button-positive",
                                onTap: function () {
                                    var value = angular.element("#popupInput").val();
                                    $scope.reorder(value, fromIndex, toIndex);
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
    });