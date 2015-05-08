angular.module("baroidApp", ["ionic", "ui.router", "ngCordova"])

    .run(function ($ionicPlatform, $state) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        $state.go("baroid");
    })

    .config(["$stateProvider", "$urlRouterProvider", "$compileProvider", "baroidHTMLFiles",
        function ($stateProvider, $urlRouterProvider, $compileProvider, baroidHTMLFiles) {
        $stateProvider
            .state("baroid", {
                url:"/",
                templateUrl:baroidHTMLFiles.home,
                controller:"BaroidOptionsController"
            })
            .state("pullback", {
                url:"pullback",
                templateUrl:baroidHTMLFiles.hddPullback,
                controller:"BaroidPullbackController"
            })
            .state("products", {
                url:"products",
                templateUrl:baroidHTMLFiles.productsState,
                controller:"BaroidProductsController"
            })
            .state("annular", {
                url:"annular",
                templateUrl:baroidHTMLFiles.annularVelocity,
                controller:"BaroidAnnularVelocityController"
            })
            .state("conversion", {
                url:"conversion",
                templateUrl:baroidHTMLFiles.conversion,
                controller:"BaroidConversionController"
            });

        $urlRouterProvider.otherwise("/");

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|blob|chrome-extension|filesystem:chrome-extension):/);
    }]);
angular.module("baroidApp")
    .constant("BaroidAppTitle", "Calculators")
    .constant("baroidHTMLFiles", {
        /*States*/
        "home":"baroid-home.html",
        "hddPullback":"html/baroid/state/hdd-pullback-state.html",
        "productsState":"html/baroid/state/products-state.html",
        "annularVelocity":"html/baroid/state/annular-velocity-state.html",
        "conversion":"html/baroid/state/conversion-state.html",
        /*Popups*/
        "hddPullbackInputPopup":"html/baroid/popup/hdd-pullback-input-popup.html",
        "hddPullbackCalculationsPopup":"html/baroid/popup/hdd-pullback-calculations-popup.html",
        "hddPullbackFormationPopup":"html/baroid/popup/hdd-pullback-formation-popup.html",
        "avInputPopup":"html/baroid/popup/av-input-popup.html",
        "avCalculationsPopup":"html/baroid/popup/av-calculations-popup.html",
        "avNotesPopup":"html/baroid/popup/av-notes-popup.html",
        "conversionModePopup":"html/baroid/popup/conversion-mode-popup.html",
        /*Templates*/
        "baroidHeaderCard":"html/baroid/template/baroid-header-card.html",
        "baroidNote":"html/baroid/template/baroid-note.html",
        "baroidNumericInput":"html/baroid/template/baroid-numeric-input.html",
        "baroidNumericResult":"html/baroid/template/baroid-numeric-result.html",
        "baroidRecommendationNote":"html/baroid/template/baroid-recommendation-note.html",
        "baroidProducts":"html/baroid/template/baroid-product-directive-template.html",
        "baroidHelp":"html/baroid/template/baroid-help-toggle-directive.js",
        /*Includes*/
        "aquaClearPFD":"html/baroid/include/baroid-product-includes/aqua-clear-pfd.html",
        "bioBore":"html/baroid/include/baroid-product-includes/biobore.html",
        "boreGel":"html/baroid/include/baroid-product-includes/bore-gel.html",
        "conDet":"html/baroid/include/baroid-product-includes/con-det.html",
        "diamondSeal":"html/baroid/include/baroid-product-includes/diamond-seal.html",
        "ezMud":"html/baroid/include/baroid-product-includes/ez-mud.html",
        "ezMudGold":"html/baroid/include/baroid-product-includes/ez-mud-gold.html",
        "nSeal":"html/baroid/include/baroid-product-includes/n-seal.html",
        "noSag":"html/baroid/include/baroid-product-includes/no-sag.html",
        "penetrol":"html/baroid/include/baroid-product-includes/penetrol.html",
        "polyBore":"html/baroid/include/baroid-product-includes/poly-bore.html",
        "quickGel":"html/baroid/include/baroid-product-includes/quik-gel.html",
        "quickTrol":"html/baroid/include/baroid-product-includes/quik-trol.html",
        "quickTrolLV":"html/baroid/include/baroid-product-includes/quik-trol-lv.html",
        "sodaAsh":"html/baroid/include/baroid-product-includes/soda-ash.html"
    });
angular.module("baroidApp").controller("BaroidAnnularVelocityController",
    ["$scope", "$timeout",
        "BaroidAnnularVelocityValuesFactory", "BaroidAnnularVelocityInputs",
        "BaroidAnnularVelocityCalculator", "BaroidPopupService", "baroidHTMLFiles",
        function ($scope, $timeout, BaroidAnnularVelocityValuesFactory, BaroidAnnularVelocityInputs,
                  BaroidAnnularVelocityCalculator, BaroidPopupService, baroidHTMLFiles) {
            /**
             * <b>BaroidAnnularVelocityController $scope property</b>
             * <i>Maps out the input elements for the view</i>
             * @type {array}
             * @description An array of objects, each representing <b>a directive</b> in the view
             *
             */
            $scope.inputElements = BaroidAnnularVelocityInputs["Inputs"];
            /**
             * <b>BaroidAnnularVelocityController $scope property</b>
             *
             * <i>Holds all user input via ngModel directives on each</i>
             * @property {number} input.drillbitDiameter -in inches,
             * @property {number} input.drillpipeDiameter -in inches,
             * @property {number} input.pumpOutput -in gpm
             */
            $scope.input = {
                "drillBitDiameter": "",
                "drillPipeDiameter": "",
                "pumpOutput": ""
            };
            /**
             * <b>BaroidAnnularVelocityController $scope property</b>
             *
             * <i>Contains all calculations based on given user input</i>
             * @type {Object}
             * Properties are derived from <b>BaroidAnnularVelocityValuesFactory</b>
             */
            $scope.values = BaroidAnnularVelocityValuesFactory;
            /**
             * Called each time the user interacts with an input
             */
            $scope.$watchCollection("input", function (newValue, oldValue) {
                if ($scope.input["drillBitDiameter"] && $scope.input["drillPipeDiameter"] && $scope.input["pumpOutput"]) {
                    console.info("%cShould now calculate $scope.annularVelocity", "color: green;font-weight:bold");
                    $scope.values["annularVelocity"] =
                        BaroidAnnularVelocityCalculator.calculateAV(
                            $scope.input["drillBitDiameter"],
                            $scope.input["drillPipeDiameter"],
                            $scope.input["pumpOutput"]);

                    console.info("%cShould now calculate $scope.advice", "color: green;font-weight:bold");
                    $scope.values["advice"] =
                        BaroidAnnularVelocityCalculator.calculateAdvice(
                            $scope.values["annularVelocity"],
                            $scope.input["drillBitDiameter"],
                            $scope.input["drillPipeDiameter"]);

                    console.info("%cShould now calculate $scope.warning", "color: green;font-weight:bold");
                    $scope.values["warning"] =
                        BaroidAnnularVelocityCalculator.calculateWarning(
                            $scope.input["drillBitDiameter"],
                            $scope.input["drillPipeDiameter"],
                            $scope.input["pumpOutput"],
                            $scope.values["annularVelocity"]);

                    console.info("%cShould now calculate $scope.ruleOfThumb", "color: green;font-weight:bold");
                    $scope.values["ruleOfThumb"] =
                        BaroidAnnularVelocityCalculator.getRuleOfThumb($scope.values["warning"]);
                }//end if
                else {
                    console.warn("Reset annularVelocity to zero");
                    $scope.values["annularVelocity"] = 0;
                    console.warn("Reset advice to empty string");
                    $scope.values["advice"] = "";
                    console.warn("Reset warning to empty string");
                    $scope.values["warning"] = "";
                    console.warn("Reset rule of thumb to empty string");
                    $scope.values["ruleOfThumb"] = "";
                }
            });

            $scope.logToConsole = function() {
                BaroidPopupService.show();
            };
            /**
             * Show the help popups
             * @param stringName the kind of popup to show
             */
            $scope.showPopup = function (stringName) {
                var config = {
                    "templateUrl":"",
                    "title":"",
                    "scope":$scope
                };
                var cssClass = "popup-medium";
                switch(stringName) {
                    case "input":
                        config["title"] = "Input";
                        config["templateUrl"] = baroidHTMLFiles.avInputPopup;
                        cssClass = "popup-medium";
                        break;
                    case "calculations":
                        config["title"] = "Calculations";
                        config["templateUrl"] = baroidHTMLFiles.avCalculationsPopup;
                        cssClass = "popup-xxsmall";
                        break;
                    case "notes":
                        config["title"] = "Notes";
                        config["templateUrl"] = baroidHTMLFiles.avNotesPopup;
                        cssClass = "popup-small";
                        break;
                }
                BaroidPopupService.show(config);

                $timeout(function () {
                    angular.element("div.popup").addClass(cssClass);
                },50);
            };
            /**
             * Close the current popup
             */
            $scope.close = function () {
                BaroidPopupService.closeCurrent();
            }

        }]);
angular.module("baroidApp")
    .controller("BaroidConversionController",
    ["BaroidConversionSelections", "BaroidConversionSelectionsMetric",
        "BaroidConversionValues", "BaroidConversionValuesMetric",
        "BaroidPopupService", "baroidHTMLFiles", "$scope",
        "BaroidConverter",
        function (BaroidConversionSelections, BaroidConversionSelectionsMetric,
                  BaroidConversionValues, BaroidConversionValuesMetric,
                  BaroidPopupService, baroidHTMLFiles, $scope,
                  BaroidConverter) {

            $scope.setMode = function () {
                BaroidPopupService.alert({
                    "templateUrl": baroidHTMLFiles.conversionModePopup,
                    "title": "Conversions"
                });
            };

            /**
             * @description Used by the select element for Standard mode
             * @type {Array} An array of strings
             */
            $scope.selections = BaroidConversionSelections;
            /**
             * @description Used by the select element for Metric mode
             * @type {Array} An array of strings
             */
            $scope.selectionsMetric = BaroidConversionSelectionsMetric;
            /**
             * @description Records the user's selection of a category via the select element
             * @type {{value: string}}
             */
            $scope.category = {"value": ""};
            /**
             * Watches $scope.category for changes
             */
            $scope.$watchCollection("category", function (newObject, oldObject) {
                //console.info("New: " + newObject["value"] + " Old: " + oldObject["value"]);
                $scope.conversions = {};
                $scope.userInput = {"value":""}
            });

            /**
             * @description Organizes the input elements (directives) via the values service for Standard
             * @type {Object}
             */
            $scope.inputElements = BaroidConversionValues;
            /**
             * @description Organizes the input elements (directives) via the values service for Metric
             * @type {Object}
             */
            $scope.inputElementsMetric = BaroidConversionValuesMetric;
            /**
             * @description Track the user's input regardless of which unit of measurement is selected
             * @type {Object}
             */
            $scope.userInput = {"value":""};
            /**
             * @description Holds an object with object properties-- one such property for each converted value returned by
             * BaroidConverter
             * @type {Object}
             */
            $scope.conversions = {};
            /**
             * Watch the userInput object and respond to changes in value
             */
            $scope.$watchCollection("userInput", function (newValue, oldValue) {
                $scope.conversions = BaroidConverter.convert($scope.category["value"], $scope.userInput["value"]);
            });

            //TODO delete debug console.Log()'s
            $scope.logToConsole = function () {
                console.warn(Object.keys($scope.conversions).length);
            };
        }]);
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
angular.module("baroidApp").controller("BaroidProductsController",
    ["$scope", "BaroidProductsListing",
        function ($scope, BaroidProductsListing) {


            /**
             * The list of products and their data that Baroid has to offer
             * @type {Object}
             */
            $scope.products = BaroidProductsListing;

        }]);
angular.module("baroidApp").controller("BaroidPullbackController",
    ["$scope", "BaroidPullbackInputs", "BaroidSoilTypes", "BaroidEstimatedFunnelViscosity",
        "BaroidEstimatedFluidVolumeCalculator", "BaroidActualPumpOutputCalculator",
        "BaroidRecommendedPullbackCalculator", "BaroidPullbackValuesFactory",
        "BaroidRecommendedFluidFormationService", "BaroidAdditiveRFFService",
        "BaroidSpecialRFFService", "BaroidHDDPullbackNoteService", "BaroidContingencyNoteService",
        "BaroidPopupService", "baroidHTMLFiles", "$cordovaToast", "$timeout",
        function ($scope, BaroidPullbackInputs, BaroidSoilTypes, BaroidEstimatedFunnelViscosity,
                  BaroidEstimatedFluidVolumeCalculator, BaroidActualPumpOutputCalculator,
                  BaroidRecommendedPullbackCalculator, BaroidPullbackValuesFactory,
                  BaroidRecommendedFluidFormationService, BaroidAdditiveRFFService,
                  BaroidSpecialRFFService, BaroidHDDPullbackNoteService, BaroidContingencyNoteService,
                  BaroidPopupService, baroidHTMLFiles, $cordovaToast, $timeout) {

            /**
             * Each $scope.row* object represents a two-column row of inputs in the view
             * @type {Array}
             */
            $scope.rowOne = BaroidPullbackInputs.RowOne;
            /**
             * Each $scope.row* object represents a two-column row of inputs in the view
             * @type {Array}
             */
            $scope.rowTwo = BaroidPullbackInputs.RowTwo;

            /**
             * Soil types are objects with a string "type" property and a number "value" property
             * @type {BaroidSoilTypes|Object} type: string soil description; value: numeric value for calculations
             */
            $scope.soilTypes = BaroidSoilTypes;

            /**
             * Object that holds all user input via ngModel directives on each
             * @type {{length: string, diameter: string, drillpipe: string, pump: string, soil: Object}}
             */
            $scope.input = {
                "length":"",
                "diameter":"",
                "drillpipe":"",
                "pump":"",
                "soil":{"type":"","value":0}
            };

            /**
             * Contains all calculations based on given user input
             * @type {BaroidPullbackValuesFactory|*}
             */
            $scope.values = BaroidPullbackValuesFactory;
            /**
             * Displayed when there are not recommendations yet calculated
             * @type {string}
             */
            //$scope.exampleNoteText = "Recommendations will appear here";

            /**
             * NOTE: Will trigger with each input modification
             */
            $scope.$watchCollection("input", function (newValue, oldValue) {
                /*Calculate Estimated Funnel Viscosity*/
                if($scope.input["soil"]["value"] && $scope.input["diameter"] && $scope.input["drillpipe"]) {
                    console.info("%cShould now calculate $scope.estimatedFunnelViscosity", "color: green;font-weight:bold");

                    /*Conditional: If the soil type is clay*/
                    if($scope.input["soil"]["value"] === 6) {
                        /*Must have diameter and length to calculate for clay soil type*/
                        if($scope.input["diameter"] && $scope.input["length"]) {
                            $scope.values.estimatedFunnelViscosity =
                                BaroidEstimatedFunnelViscosity[$scope.input["soil"]["value"]]($scope.input["diameter"], $scope.input["length"]);
                        }
                        else {
                            $cordovaToast.show("Enter both diameter and length to show Estimated Funnel Viscosity", "long", "bottom");
                            $scope.values.estimatedFunnelViscosity = 0;
                        }
                    }/*end if-else*/

                    /*For all other soil types*/
                    else {
                        $scope.values.estimatedFunnelViscosity = BaroidEstimatedFunnelViscosity[$scope.input["soil"]["value"]];
                    }
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting estimatedFunnelViscosity to zero", "color:orange;font-weight:bold");
                    $scope.values.estimatedFunnelViscosity = 0;
                }/*End calculation of $scope.estimatedFunnelViscosity*/

                /*Calculate Estimated Fluid Volume*/
                if($scope.input["soil"]["value"]&&$scope.input["diameter"]&&$scope.input["length"]) {
                    console.info("%cShould now calculate $scope.estimatedFluidVolume", "color: green;font-weight:bold");
                    $scope.values.estimatedFluidVolume = BaroidEstimatedFluidVolumeCalculator.calculate($scope.input["soil"]["value"]
                        ,$scope.input["diameter"],$scope.input["length"]);

                    console.info("%cShould now be able to calculate baseRecommendation", "color: green;font-weight:bold")
                    $scope.values.baseRecommendation =
                        BaroidRecommendedFluidFormationService.calculateBaseRecommendation(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                    console.info("%cShould now be able to calculate additiveRecommendation", "color: green;font-weight:bold")
                    $scope.values.additiveRecommendation =
                        BaroidAdditiveRFFService.calculateAdditiveRecommendation(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                    console.info("%cShould now be able to calculate specialRecommendation", "color: green;font-weight:bold")
                    $scope.values.specialRecommendation =
                        BaroidSpecialRFFService.calculateSpecialRecommendation(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                    console.info("%cShould now be able to calculate note", "color: green;font-weight:bold")
                    $scope.values.note =
                        BaroidHDDPullbackNoteService.getNote(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                    console.info("%cShould now be able to calculate contingency", "color: green;font-weight:bold")
                    $scope.values.contingency =
                        BaroidContingencyNoteService.getContingencyNote(
                            $scope.input["soil"]["value"],
                            $scope.input["length"],
                            $scope.input["diameter"]);
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting estimatedFluidVolume to zero", "color:orange;font-weight:bold");
                    $scope.values.estimatedFluidVolume = 0;
                    console.warn("%cSetting baseRecommendation to zero", "color:orange;font-weight:bold");
                    $scope.values.baseRecommendation = "";
                    console.warn("%cSetting additiveRecommendation to zero", "color:orange;font-weight:bold");
                    $scope.values.additiveRecommendation = "";
                    console.warn("%cSetting specialRecommendation to zero", "color:orange;font-weight:bold");
                    $scope.values.specialRecommendation = "";
                    console.warn("%cSetting note to zero", "color:orange;font-weight:bold");
                    $scope.values.note = "";
                    console.warn("%cSetting contingency to zero", "color:orange;font-weight:bold");
                    $scope.values.contingency = "";
                }/*End calculation of $scope.estimatedFluidVolume*/

                /*Calculate Actual Pump Output*/
                if($scope.values.estimatedFunnelViscosity !== 0 && $scope.input["soil"]["value"] && $scope.input["pump"]) {
                    console.info("%cShould now calculate $scope.actualPumpOutput", "color: green;font-weight:bold");
                    $scope.values.actualPumpOutput = BaroidActualPumpOutputCalculator.calculate($scope.input["soil"]["value"],
                        $scope.values.estimatedFunnelViscosity,$scope.input["pump"]);
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting actualPumpOutput to zero", "color:orange;font-weight:bold");
                    $scope.values.actualPumpOutput = 0;
                }/*End calculation of $scope.actualPumpOutput*/

                /*Calculate Recommended Pullback Speed*/
                if($scope.input["soil"]["value"] && $scope.values.estimatedFluidVolume !== 0 && $scope.input["length"]
                    && $scope.input["drillpipe"] && $scope.values.actualPumpOutput !== 0) {
                    console.info("%cShould now calculate $scope.recommendedPullbackSpeed", "color: green;font-weight:bold");
                    $scope.values.recommendedPullbackSpeed =
                        BaroidRecommendedPullbackCalculator.calculate($scope.input["soil"]["value"],
                            $scope.values.estimatedFluidVolume,$scope.input["length"],$scope.input["drillpipe"],
                            $scope.values.actualPumpOutput);
                }
                /*Negate previous value*/
                else {
                    console.warn("%cSetting recommendedPulbackSpeed to zero", "color:orange;font-weight:bold");
                    $scope.values.recommendedPullbackSpeed = 0;
                }/*End calculation of $scope.actualPumpOutput*/

            });

            /**
             * Popups (help)
             * Each should include "scope":$scope so as to call close() on the popup
             */
            $scope.showPopup = function (stringName) {
                var config = {
                    "templateUrl":"",
                    "title":"",
                    "scope":$scope
                };
                var cssClass = "popup-medium";
                switch(stringName) {
                    case "input":
                        config["title"] = "Input";
                        config["templateUrl"] = baroidHTMLFiles.hddPullbackInputPopup;
                        cssClass = "popup-xlarge";
                        break;
                    case "calculations":
                        config["title"] = "Calculations";
                        config["templateUrl"] = baroidHTMLFiles.hddPullbackCalculationsPopup;
                        cssClass = "popup-large";
                        break;
                    case "notes":
                        config["title"] = "Notes";
                        config["templateUrl"] = baroidHTMLFiles.hddPullbackFormationPopup;
                        cssClass = "popup-large";
                        break;
                }
                BaroidPopupService.show(config);
                $timeout(function () {
                    angular.element("div.popup").addClass(cssClass);
                },50);
            };
            /**
             * Close the opened popup
             */
            $scope.close = function () {
                BaroidPopupService.closeCurrent();
            };

        }]);
angular.module("baroidApp").directive("baroidExtraRecommendationNote", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope: {
            idPre:"@",
            noteTitle:"@",
            noteModel:"="
        },
        templateUrl:baroidHTMLFiles.baroidNote
    }
}]);
angular.module("baroidApp")
    .directive("baroidNumericInput", ["baroidHTMLFiles",
        function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope:{
            inputType:"@",
            inputName:"@",
            inputStep:"@",
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
angular.module("baroidApp").directive("baroidNumericResult", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope:{
            idPre:"@",
            resultTitle:"@",
            resultModel:"="
        },
        templateUrl:baroidHTMLFiles.baroidNumericResult,
        link: function (scope, element, attributes) {}
    }
}]);
angular.module("baroidApp").directive("baroidRecommendationNote", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope: {
            idPre:"@",
            noteTitle:"@",
            noteModel:"="
        },
        templateUrl:baroidHTMLFiles.baroidRecommendationNote
    }
}]);
angular.module("baroidApp").directive("baroidHeaderCard", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope:{
            title:"@",
            description:"@"
        },
        templateUrl:baroidHTMLFiles.headerCard,
        link: function (scope, element, attributes) {}
    }
}]);
angular.module("baroidApp").directive("BaroidHelpToggle",
    ["baroidHTMLFiles", function (baroidHTMLFiles) {
        return {
            restrict: "E",
            scope: {
                "toggleName":"@",
                "baroidHelp":"@"
            },
            templateUrl: baroidHTMLFiles.baroidHelp,
            controller: function ($scope) {
            },
            link: function (scope, elem, attrs) {
            }
        }
    }]);
angular.module("baroidApp").directive("baroidProduct", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
        return {
            restrict: "E",
            scope: {
                "productName": "@",
                "productOverview": "@",
                "productTemplate": "@",
                "productDataSheet":"@"
            },
            templateUrl:baroidHTMLFiles.baroidProducts,
            controller: function ($scope) {
                /**
                 * Opens/downloads the product data sheet pdf from Baroid
                 * @param productDataSheet the URL of the data sheet for this product
                 */
                $scope.dataSheet = function (productDataSheet) {
                    console.info("Opening " + productDataSheet);
                    window.open(productDataSheet, '_system', 'location=yes');
                };
                /**
                 * Expands the product description
                 * @param $event
                 */
                $scope.showDescription = function ($event) {
                    angular.element($event.target).siblings(".baroid-product-description").slideToggle();
                }
            }
        }
    }]);
angular.module("baroidApp").service("BaroidAnnularVelocityCalculator",
    [function () {

        /**
         *  Calculates the Annular Velocity
         * @param drillBitDiameter {number} The drill bit diameter in inches
         * @param drillPipeDiameter {number} Ths drill pipe diameter in inches
         * @param pumpOutput {number} The pump output in gpm
         * @return {number|string} The annular velocity calculated or empty string
         */
        this.calculateAV = function (drillBitDiameter, drillPipeDiameter, pumpOutput) {
            var condition, controlOne, controlTwo = 0;
            if (drillBitDiameter === drillPipeDiameter) {
                return 0;
            }
            if (drillBitDiameter) {
                controlOne = 1;
            } else {
                controlOne = 0;
            }
            if (pumpOutput) {
                controlTwo = 1;
            } else {
                controlTwo = 0;
            }
            condition = controlOne + controlTwo;
            if (condition === 0) {
                return 0;
            } else {
                return pumpOutput / ((drillBitDiameter * drillBitDiameter - drillPipeDiameter * drillPipeDiameter) / 24.5);
            }
        };
        /**
         *  Decides on what the Advice should read
         * @param annularVelocity {number} The Annular Velocity previously calculated
         * @param drillBitDiameter {number} The diameter of the drill bit in inches
         * @param drillPipeDiameter {number} The diameter of the drill pipe in inches
         * @return {string} The warning or an empty string
         */
        this.calculateAdvice = function (annularVelocity, drillBitDiameter, drillPipeDiameter) {
            if(drillBitDiameter === drillPipeDiameter) {
                return "Drill bit diameter should exceed, not equal drill pipe diameter.";
            }
            if (annularVelocity < 30) {
                return "Serious problems may occur due to your extremely low annular velocity. Consult your local Baroid Rep. prior to drilling."
            }
            if (30 <= annularVelocity && annularVelocity < 60) {
                return "Due to your low annular velocity, additional suspension may be necessary to achieve good hole cleaning."
            }
            if (annularVelocity > 160) {
                return "The annular velocity may be so high that it causes hole erosion."
            }
            if (annularVelocity >= 60 && annularVelocity <= 160) {
                return "Unless very large cuttings are produced or hole enlargement occurs, this annular velocity is generally sufficient for hole cleaning."
            }
            else {
                return "";
            }
        };
        /**
         *  Determine if the user's entries merit a warning
         * @param drillBitDiameter {number} The drill bit diameter in inches
         * @param drillPipeDiameter {number} Ths drill pipe diameter in inches
         * @param pumpOutput {number} The pump output in gpm
         * @param annularVelocity {number} The previously calculated Annular Velocity
         * @return warning {string} The generated warning or an empty string
         */
        this.calculateWarning = function (drillBitDiameter, drillPipeDiameter, pumpOutput, annularVelocity) {
            var conditionOne, controlOneA, controlTwoA;
            var warning = "";
            //Calculate condition
            if (annularVelocity > 60) {
                controlOneA = 1;
            } else {
                controlOneA = 0;
            }
            if (annularVelocity < 120) {
                controlTwoA = 1;
            } else {
                controlTwoA = 0;
            }
            conditionOne = controlOneA + controlTwoA;
            if (conditionOne) {/* === 2 Taken out of the if condition*/
                //Figure out the warning
                var conditionTwo, controlOneB, controlTwoB;
                if (drillBitDiameter) {
                    controlOneB = 1;
                } else {
                    controlOneB = 0;
                }
                if (pumpOutput) {
                    controlTwoB = 1;
                } else {
                    controlTwoB = 0;
                }
                conditionTwo = controlOneB + controlTwoB;
                var lowRange, highRange;
                if (conditionTwo) {
                    lowRange = (60 * ((drillBitDiameter * drillBitDiameter - drillPipeDiameter * drillPipeDiameter) / 24.5)).toFixed(2);
                    highRange = (120 * ((drillBitDiameter * drillBitDiameter - drillPipeDiameter * drillPipeDiameter) / 24.5)).toFixed(2);
                    if (lowRange !== 0 && highRange !== "0.00") {
                        warning = "To achieve optimum annular velocity, set your pump output between " + lowRange + " and " + highRange + " gpm."
                    }
                }
            }
            return warning;
        };
        /**
         *  Determines if the "Rule of Thumb" advice should be displayed
         * @param warning {string} The previously determined warning or an empty string
         */
        this.getRuleOfThumb = function (warning) {
            if (warning) {
                return "Annular Velocity between 60 and 120 ft/min is optimum for hole cleaning and stability."
            } else {
                return "";
            }
        };
    }]);
angular.module("baroidApp").factory("BaroidAnnularVelocityValuesFactory",
    [function () {
        return {
            "annularVelocity":0,
            /**
             * @type {string} Baroid's advice depending on the above numbers
             */
            "advice":"",
            /**
             * @type {string} Warning issued depending on the user's input received
             */
            "warning":"",
            /**
             * @type {string} Rule of thumb
             */
            "ruleOfThumb":""
        }
    }]);
/**
 * @type {number} The diameter of the drillbit in inches
 */
//"drillBitDiameter":0,
/**
 * @type {number} The diameter of the drill pipe in inches
 */
//"drillPipeDiameter":0,
/**
 * @type {number} Pump output in gallons per minute
 */
//"pumpOutput":0,
/**
 * @type {number} Annular velocity calculated in feet per minute
 */
angular.module("baroidApp")
    .service("BaroidConverter", ["BaroidConvertInches", "BaroidConvertFeet", "BaroidConvertYards", "BaroidConvertMiles",
        "BaroidConvertGallons",
        "BaroidConvertMillimeters", "BaroidConvertCentimeters", "BaroidConvertMeters", "BaroidConvertKilometers",
        "BaroidConvertLiters",
        function (BaroidConvertInches, BaroidConvertFeet, BaroidConvertYards, BaroidConvertMiles,
                  BaroidConvertGallons,
                  BaroidConvertMillimeters, BaroidConvertCentimeters, BaroidConvertMeters, BaroidConvertKilometers,
                  BaroidConvertLiters) {

            this.convert = function (stringName, numberValue) {
                var conversion;
                switch (stringName) {
                    case "Inches":
                        BaroidConvertInches.setInches(numberValue);
                        conversion = BaroidConvertInches.getConversions();
                        break;
                    case "Feet":
                        BaroidConvertFeet.setFeet(numberValue);
                        conversion = BaroidConvertFeet.getConversions();
                        break;
                    case "Yards":
                        BaroidConvertYards.setYards(numberValue);
                        conversion = BaroidConvertYards.getConversions();
                        break;
                    case "Miles":
                        BaroidConvertMiles.setMiles(numberValue);
                        conversion = BaroidConvertMiles.getConversions();
                        break;
                    case "Gallons":
                        BaroidConvertGallons.setGallons(numberValue);
                        conversion = BaroidConvertGallons.getConversions();
                        break;
                    case "Millimeters":
                        BaroidConvertMillimeters.setMillimeters(numberValue);
                        conversion = BaroidConvertMillimeters.getConversions();
                        break;
                    case "Centimeters":
                        BaroidConvertCentimeters.setCentimeters(numberValue);
                        conversion = BaroidConvertCentimeters.getConversions();
                        break;
                    case "Meters":
                        BaroidConvertMeters.setMeters(numberValue);
                        conversion = BaroidConvertMeters.getConversions();
                        break;
                    case "Kilometers":
                        BaroidConvertKilometers.setKilometers(numberValue);
                        conversion = BaroidConvertKilometers.getConversions();
                        break;
                    case "Liters":
                        BaroidConvertLiters.setLiters(numberValue);
                        conversion = BaroidConvertLiters.getConversions();
                        break;
                    default:
                        conversion = {};
                        break;
                }
                return conversion;
            }

        }]);
angular.module("baroidApp").service("BaroidConvertCentimeters",
    function () {
        var centimeters, meters;
        this.setCentimeters = function (centimetersValue) {
            centimeters = centimetersValue;
            meters = (centimeters / 100);
        };
        this.getConversions = function () {
            return {
                "toMillimeters":{
                    "title": centimeters + " centimeters to millimeters",
                    "value": (centimeters * 10)
                },
                "toMeters":{
                    "title": centimeters + " centimeters to meters",
                    "value": (meters)
                },
                "toKilometers": {
                    "title": centimeters + " centimeters to kilometers",
                    "value": (meters * 0.001)
                },
                "toInches":{
                    "title": centimeters + " centimeters to inches",
                    "value": (centimeters * 0.39370)
                },
                "toFeet":{
                    "title": centimeters + " centimeters to feet",
                    "value": ((centimeters * 0.39370) / 12)
                },
                "toYards": {
                    "title": centimeters + " centimeters to yards",
                    "value": (((centimeters * 0.39370) / 12) / 3)
                },
                "toMiles": {
                    "title": centimeters + " centimeters to miles",
                    "value": (((centimeters * 0.39370) / 12) / 5280)
                }
            }
        }
    });
angular.module("baroidApp").service("BaroidConvertKilometers",
    function () {
        var kilometers, miles, meters;
        this.setKilometers = function (kilometersValue) {
            kilometers = kilometersValue;
            miles = (kilometers * 0.62137);
            meters = (kilometers * 1000);
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": kilometers + " kilometers to inches",
                    "value": ((miles * 5280) * 12)
                },
                "toFeet": {
                    "title": kilometers + " kilometers to feet",
                    "value": (miles * 5280)
                },
                "toYards":  {
                    "title": kilometers + " kilometers to yards",
                    "value": ((miles * 5280) / 3)
                },
                "toMiles":  {
                    "title": kilometers + " kilometers to miles",
                    "value": (miles)
                },
                "toMillimeters":  {
                    "title": kilometers + " kilometers to millimeters",
                    "value": (meters * 1000)
                },
                "toCentimeters":  {
                    "title": kilometers + " kilometers to centimeters",
                    "value": (meters * 100)
                },
                "toMeters":  {
                    "title": kilometers + " kilometers to inches",
                    "value": (meters)
                }
            }
        }
    });
angular.module("baroidApp").service("BaroidConvertLiters",
    function () {
        var liters;
        this.setLiters = function (litersValue) {
            liters = litersValue;
        };
        this.getConversions = function () {
            return {
                "toMilliliters": {
                    "title": liters + " liters to milliliters",
                    "value": (liters * 1000)
                },
                "toFluidOunces": {
                    "title": liters + " liters to fluid ounces",
                    "value": (liters * 33.814)
                },
                "toCups": {
                    "title": liters + " liters to cups",
                    "value": (liters * 4.22675)
                },
                "toPints": {
                    "title": liters + " liters to pints",
                    "value": (liters * 2.11338)
                },
                "toQuarts": {
                    "title": liters + " liters to quarts",
                    "value": (liters * 1.05669)
                },
                "toGallons": {
                    "title": liters + " liters to gallons",
                    "value": (liters / 3.7854121)
                },
                "toCubicInches": {
                    "title": liters + " liters to cubic inches",
                    "value": (liters * 61.0237)
                },
                "toCubicFeet": {
                    "title": liters + " liters to cubic feet",
                    "value": (liters * 0.0353147)
                },
                "toCubicYards": {
                    "title": liters + " liters to cubic yards",
                    "value": ((liters * 0.0353147) * 0.037037037)
                },
                "toCubicMeters": {
                    "title": liters + " liters to cubic meter",
                    "value": (liters * 0.001)
                }
            };
        };
    });
angular.module("baroidApp").service("BaroidConvertMeters",
    function () {
        var meters;
        this.setMeters = function (metersValue) {
            meters = metersValue;
        };
        this.getConversions = function () {
            return {
                "toMillimeters": {
                    "title": meters + " meters to millimeters",
                    "value": (meters * 1000)
                },
                "toCentimeters": {
                    "title": meters + " meters to centimeters",
                    "value": (meters * 100)
                },
                "toKilometers": {
                    "title": meters + " meters to kilometers",
                    "value": (meters / 1000)
                },
                "toInches": {
                    "title": meters + " meters to inches",
                    "value": ((meters * 3.28084) * 12)
                },
                "toFeet": {
                    "title": meters + " meters to feet",
                    "value": (meters * 3.28084)
                },
                "toYards": {
                    "title": meters + " meters to yards",
                    "value": (meters * 1.09361)
                },
                "toMiles": {
                    "title": meters + " meters to miles",
                    "value": ((meters * 3.28084) / 5280)
                }
            };
        };
    });
angular.module("baroidApp").service("BaroidConvertMillimeters",
    [function () {
        var millimeters, centimeters, meters;
        this.setMillimeters = function (millimetersValue) {
            millimeters = millimetersValue;
            centimeters = (millimeters * 0.1);
            meters = (millimeters * 0.001);
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": millimeters + " millimeters to inches",
                    "value": (centimeters * 0.393701)
                },
                "toFeet": {
                    "title": millimeters + " millimeters to feet",
                    "value": (centimeters * 0.0328084)
                },
                "toYards": {
                    "title": millimeters + " millimeters to yards",
                    "value": ((centimeters * 0.0328084) / 3)
                },
                "toMiles": {
                    "title": millimeters + " millimeters to miles",
                    "value": ((centimeters * 0.0328084) / 5280)
                },
                "toCentimeters": {
                    "title": millimeters + " millimeters to centimeters",
                    "value": (centimeters)
                },
                "toMeters": {
                    "title": millimeters + " millimeters to meters",
                    "value": (meters)
                },
                "toKilometers": {
                    "title": millimeters + " millimeters to kilometers",
                    "value": (meters * 1000)
                }
            }
        }
    }]);
angular.module("baroidApp").service("BaroidConvertFeet",
    function () {
        var feet;
        this.setFeet = function (feetValues) {
            feet = feetValues;
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": feet + " feet to inches",
                    "value": (feet * 12)
                },
                "toYards": {
                    "title": feet + " feet to yards",
                    "value": (feet / 3)
                },
                "toMiles": {
                    "title": feet + " feet to miles",
                    "value": (feet / 5280)
                },
                "toMillimeters": {
                    "title": feet + " feet to millimeters",
                    "value": (feet * 304.8)
                },
                "toCentimeters": {
                    "title": feet + " feet to millimeters",
                    "value": (feet * 30.48)
                },
                "toMeters": {
                    "title": feet + " feet to meters",
                    "value": (feet * 0.3048)
                },
                "toKilometers": {
                    "title": feet + " feet to kilometers",
                    "value": (feet * 0.0003048)
                }
            };
        };
    });
angular.module("baroidApp").service("BaroidConvertGallons",
    function () {
        var gallons, cups;
        this.setGallons = function (gallonsValue) {
            gallons = gallonsValue;
            cups = (gallons * 16);
        };
        this.getConversions = function () {
            return {
                "toMilliliters": {
                    "title": gallons + " gallons to milliliters",
                    "value": ((gallons * 3.7854121) * 1000)
                },
                "toLiters": {
                    "title": gallons + " gallons to liters",
                    "value": (gallons * 3.7854121)
                },
                "toFluidOunces": {
                    "title": gallons + " gallons to fluid ounces",
                    "value": (gallons * 128)
                },
                "toCups": {
                    "title": gallons + " gallons to cups",
                    "value": cups
                },
                "toPints": {
                    "title": gallons + " gallons to pints",
                    "value": (cups / 2)
                },
                "toQuarts": {
                    "title": gallons + " gallons to quarts",
                    "value": (gallons * 4)
                },
                "toCubicInches": {
                    "title": gallons + " gallons to cubic inches",
                    "value": (gallons * 231)
                },
                "toCubicFeet": {
                    "title": gallons + " gallons to cubic feet",
                    "value": (gallons * 0.133681)
                },
                "toCubicYards": {
                    "title": gallons + " gallons to cubic yards",
                    "value": ((gallons * 0.133681) * 0.037037037)
                },
                "toCubicMeters": {
                    "title": gallons + " gallons to cubic meter",
                    "value": (gallons * 0.00378541)
                }
            }
        }
    });
angular.module("baroidApp")
    .service("BaroidConvertInches",
    function () {
        var inches;
        this.setInches = function (inchesValue) {
            inches = inchesValue;
        };
        this.getConversions = function () {
            return {
                "toFeet": {
                    "title": inches + " inches to feet",
                    "value": (inches / 12)
                },
                "toYards": {
                    "title": inches + " inches to yards",
                    "value": ((inches / 12) * 3)
                },
                "toMiles": {
                    "title": inches + " inches to miles",
                    "value": ((inches / 12) / 5280)
                },
                "toMillimeters": {
                    "title": inches + " inches to millimeters",
                    "value": ((inches / 39.37) * 1000)
                },
                "toCentimeters": {
                    "title": inches + " inches to centimeters",
                    "value": ((inches / 39.37) * 100)
                },
                "toMeters": {
                    "title": inches + " inches to meters",
                    "value": (inches / 39.37)
                },
                "toKilometers": {
                    "title": inches + " inches to kilometers",
                    "value": ((inches / 12) * 0.0003048)
                }
            };
        };
    });
angular.module("baroidApp").service("BaroidConvertMiles",
    function () {
        var miles;
        this.setMiles = function (milesValue) {
            miles = milesValue;
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": miles + " miles to inches",
                    "value": ((miles * 5280) * 12)
                },
                "toFeet": {
                    "title": miles + " miles to feet",
                    "value": (miles * 5280)
                },
                "toYards": {
                    "title": miles + " miles to yards",
                    "value": ((miles * 5280) / 3)
                },
                "toMillimeters":{
                    "title": miles + " miles to millimeters",
                    "value": (((miles * 5280) * 30.48) * 10)
                },
                "toCentimeters": {
                    "title": miles + " miles to centimeters",
                    "value": ((miles * 5280) * 30.48)
                },
                "toMeters":{
                    "title": miles + " miles to meters",
                    "value": ((miles * 5280) / 3.28084)
                },
                "toKilometers": {
                    "title": miles + " miles to kilometers",
                    "value": (miles * 1.609344)
                }
            }
        }
    });
angular.module("baroidApp").service("BaroidConvertYards",
    [function () {
        var yards, feet;
        this.setYards = function (yardsValue) {
            yards = yardsValue;
            feet = (yards / 3);
        };
        this.getConversions = function () {
            return {
                "toInches": {
                    "title": yards + " yards to inches",
                    "value": (feet * 12)
                },
                "toFeet": {
                    "title": yards + " yards to feet",
                    "value": (feet)
                },
                "toMiles": {
                    "title": yards + " yards to miles",
                    "value": (feet / 5280)
                },
                "toMillimeters": {
                    "title": yards + " yards to millimeters",
                    "value": (feet * 304.8)
                },
                "toCentimeters": {
                    "title": yards + " yards to centimeters",
                    "value": (feet * 30.48)
                },
                "toMeters": {
                    "title": yards + " yards to meters",
                    "value": (feet * 0.3048)
                },
                "toKilometers": {
                    "title": yards + " yards to kilometers",
                    "value": (feet * 0.0003048)
                }
            }
        }
    }]);
angular.module("baroidApp").service("BaroidActualPumpOutputCalculator",
    [function () {

        /**
         * @desc Calculates the Actual Pump Output in gallons per minute
         * @param soilType {number} The numeric value of the soil type
         * @param estFunnelViscosity {number} The calculated <b>Estimated Funnel Viscosity</b>
         * @param pumpRating {number} The pump rating in gallons per minute
         */
        this.calculate = function (soilType, estFunnelViscosity, pumpRating) {
            var litmusTest, paperA, paperB;

            if(pumpRating > 0) {
                paperA = 1;
            }
            else {
                paperA = 0;
            }

            if(estFunnelViscosity) {
                paperB = 1;
            }
            else {
                paperB = 0;
            }

            litmusTest = paperA + paperB;

            /*Only calculate if litmus test passes*/
            if(litmusTest === 2) {
                return (estFunnelViscosity*estFunnelViscosity*0.0071-1.4571*estFunnelViscosity+116.29)/100*pumpRating;
            }
            else {
                return 0;
            }
        }

    }]);
angular.module("baroidApp").service("BaroidAdditiveRFFService",
    [function () {

        /**
         * Calculate the additive recommendations (i.e., EZ-Mud)
         * @param soilType {number} The numeric value associates with the selected soilType
         * @param length {number} The length of the bore in feet
         * @param diameter {number} The diameter of the bore hole
         */
        this.calculateAdditiveRecommendation = function (soilType, length, diameter) {
            var additive = "";
            var condition, controlOne, controlTwo;
            switch(soilType) {
                case 1:
                    additive = "No-Sag 0.5 lb";
                    break;
                case 2:
                    additive = "Quick-trol Gold LV 0.5 lb";
                    break;
                case 3:
                    additive = "Quick-trol Gold*";
                    break;
                case 4:
                    additive = "Quick-trol Gold*";
                    break;
                case 5:
                    additive = "Quick-trol Gold LV 0.5 lb";
                    break;
                case 6:
                    /*Special case for clay*/
                    if(diameter < 8) {
                        controlOne = 0;
                    }
                    else {
                        controlOne = 1;
                    }
                    if(length < 500) {
                        controlTwo = 0;
                    }
                    else {
                        controlTwo = 1;
                    }
                    condition = controlOne + controlTwo;
                    if(condition === 0) {
                        additive = "Penetrol 2 qt";
                    }
                    else {
                        additive = "EZ-Mud 1 pt"
                    }
                    break;
                case 7:
                    additive = "Quick-trol Gold LV*";
                    break;
            }
            return additive;
        }

    }]);

angular.module("baroidApp").service("BaroidContingencyNoteService",
    [function () {

        /**
         * Calculate the special recommendations (i.e., Penetrol)
         * @param soilType {number} The numeric value associates with the selected soilType
         * @param length {number} The length of the bore in feet
         * @param diameter {number} The diameter of the bore hole
         */
        this.getContingencyNote = function (soilType, length, diameter) {
            var contingencyNote = "";
            var conditional, controlOne, controlTwo;

            switch(soilType) {
                case 1:
                    contingencyNote = "N-SEAL has proven effective in improving the fluid's sealing and carrying capacity in this environment. If recycling, N-SEAL can be periodically pumped at a concentration of 5 to 10 lb per 100 gallons. If not recycling, N-SEAL can be added to the fluid at a concentration of 5-10 lb per 100 gallons on a continuous basis. BAROLIFT can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to improve suspension and hole cleaning. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    break;
                case 2:
                    contingencyNote = "N-SEAL has proven effective in improving the fluid�s sealing and carrying capacity in this environment. If recycling, N-SEAL can be periodically pumped at a concentration of 5 to 10 lb per 100 gallons. If not recycling, N-SEAL can be added to the fluid at a concentration of 5-10 lb per 100 gallons on a continuous basis. BAROLIFT can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to improve suspension and hole cleaning. If drilling in coastal areas where seawater may be encountered while drilling, both NO-SAG and QUIK-TROL GOLD may be needed because of their resistance to contamination. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    break;
                case 3:
                    contingencyNote = "If drilling in coastal areas where seawater may be encountered while drilling, both NO-SAG and QUIK-TROL GOLD may be needed because of their resistance to contamination. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    break;
                case 4:
                    contingencyNote = "If drilling in coastal areas where seawater may be encountered while drilling, both NO-SAG and QUIK-TROL GOLD may be needed because of their resistance to contamination. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    break;
                case 5:
                    contingencyNote = "PENETROL or CON DET can be added to offset the sticking tendencies of the clay. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    break;
                case 6:
                    /*Special case for clay*/
                    if(diameter < 8) {
                        controlOne = 0;
                    }
                    else {
                        controlOne = 1;
                    }
                    if(length < 500) {
                        controlTwo = 0;
                    }
                    else {
                        controlTwo = 1;
                    }
                    conditional = controlOne + controlTwo;
                    if(conditional === 0) {
                        contingencyNote = "Clay can be very site specific. Clay with lower moisture contents tend to swell more and become stickier. For this reason, the amount of PENETROL needed is going to depend on the swell-ability of the clay. AQUA-CLEAR PFD can be added if maintaining flow is hampered by the clay wanting to reconstitute into a solid mass behind the bit or reamer. Double drilling or swabbing may be utilized to stabilize and condition hole. BAROLIFT can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to improve suspension and hole cleaning.";
                    }
                    else {
                        contingencyNote = "IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons. Double drilling or swabbing may be utilized to stabilize and condition hole.";
                    }
                    break;
                case 7:
                    contingencyNote = "Typically, higher volumes of fluid are used to run a mud motor when drilling rock.  You will need to consult the motor specifications to determine appropriate volumes. IDP-533 can be added as a torque reducer at a concentration of 2-4 quarts per 100 gallons.";
                    break;
            }
            return contingencyNote;
        }

    }]);
angular.module("baroidApp").service("BaroidEstimatedFluidVolumeCalculator",
    [function () {

        /**
         * @desc Calculates and returns the <b>estimated fluid volume</b> in gallons
         * @param soilType {number} The value of the soil type
         * @param diameter {number} The diameter of the hole in inches
         * @param length {number} The length of the bore in feet
         */
        this.calculate = function (soilType, diameter, length) {
            var multiplier = 0;

            switch(soilType) {
                case 7:
                    multiplier = 2;
                    break;
                case 1:
                    multiplier = 4;
                    break;
                case 2:
                    multiplier = 4;
                    break;
                case 3:
                    multiplier = 3;
                    break;
                case 4:
                    multiplier = 2;
                    break;
                case 5:
                    multiplier = 3;
                    break;
                case 6:
                    multiplier = 4;
                    break;
                default:
                    multiplier = 0;
                    break;
            }

            if(length > 800) {
                return diameter*diameter/24.5*length*(multiplier+3);
            }
            else if (length <= 800 && length > 500) {
                return diameter*diameter/24.5*length*(multiplier+2);
            }
            else if (length <= 500 && length > 300) {
                return diameter*diameter/24.5*length*(multiplier+1)
            }
            else {
                return diameter*diameter/24.5*length*multiplier
            }
        }

    }]);
angular.module("baroidApp").service("BaroidHDDPullbackNoteService",
    [function () {

        /**
         * Calculate the special recommendations (i.e., Penetrol)
         * @param soilType {number} The numeric value associates with the selected soilType
         * @param length {number} The length of the bore in feet
         * @param diameter {number} The diameter of the bore hole
         */
        this.getNote = function (soilType, length, diameter) {
            var note = "";
            var condition, controlOne, controlTwo;

            switch(soilType) {
                case 1:
                    note = "Sealing and suspension are of extreme importance. Higher concentrations of BORE-GEL are necessary to achieve a \"grouting\" effect to hold the gravel and cobbles in place. NO-SAG is added to enhance suspension properties.";
                    break;
                case 2:
                    note = "Sealing and suspension are of extreme importance. Higher concentrations of bentonite are necessary to achieve a \"grouting\" effect to hold the gravel and cobbles in place. NO-SAG is added to enhance suspension properties. QUIK-TROL LV is added to enhance filter cake building ability.";
                    break;
                case 3:
                    note = "NO-SAG can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to enhance the suspension capability of the fluid. QUIK-TROL LV can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to enhance the filter cake building ability of the fluid.";
                    break;
                case 4:
                    note = "NO-SAG can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to enhance the suspension capability of the fluid. QUIK-TROL LV can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to enhance the filter cake building ability of the fluid.";
                    break;
                case 5:
                    note = "BORE-GEL provides suspension and filter cake. QUIK-TROL GOLD LV enhances the filter cake building ability of the fluid and aids in clay inhibition. EZ-MUD can be used to inhibit the swelling of clay. The use of EZ-MUD in this situation depends on the concentration of sand. EZ-MUD does not contribute to suspension or filter cake building in any appreciable amount. If the sand content is low, 1 pint to 1 quart of EZ-MUD per 100 gallons can be used with or to replace the QUIK-TROL GOLD.";
                    break;
                case 6:
                    /*Special case for clay*/
                    if(diameter < 8) {
                        controlOne = 0;
                    }
                    else {
                        controlOne = 1;
                    }
                    if(length < 500) {
                        controlTwo = 0;
                    }
                    else {
                        controlTwo = 1;
                    }
                    condition = controlOne + controlTwo;
                    if(condition === 0) {
                        note = "POLY-BORE inhibits the swelling of clay. EZ-MUD can be substituted for POLY-BORE at a concentration of 1 quart per 100 gallons. PENETROL is used as a wetting agent to prevent clay from sticking to the product line and downhole tooling. CON DET can be used in place of PENETROL but may require more product.";
                    }
                    else {
                        note = "BORE-GEL is necessary for suspension of larger cuttings generated by larger reamers. EZ-MUD is added to inhibit swelling of clay. PENETROL is used as a wetting agent to prevent clay from sticking to the product line and downhole tooling. CON DET can be used in place of PENETROL but may require more product.";
                    }
                    break;
                case 7:
                    note = "NO-SAG can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to enhance the suspension capability of the fluid. QUIK-TROL LV can be added at a concentration of 0.25 to 0.5 lb per 100 gallons to enhance the filter cake building ability of the fluid.";
                    break;
            }
            return note;
        }

    }]);

angular.module("baroidApp").factory("BaroidPullbackValuesFactory",
    [function () {

        return {
            /**
             * @desc Depends on $scope.input["diameter"], $scope.input["drillpipe"], and $scope.input["soil"]["value"]
             * @type {number} Estimated Funnel Viscosity (of the mix)
             */
            "estimatedFunnelViscosity": 0,

            /**
             * @desc Depends on $scope.input["soil"]["value"], $scope.input["diameter"], and $scope.input["length"]
             * @type {number} Estimated Fluid Volume (of the hole)
             */
            "estimatedFluidVolume": 0,

            /**
             * @desc Depends on $scope.estimatedFunnelViscosity, $scope.input["soil"]["value"], and $scope.input["pump"]
             * @type {number} Actual Pump Output (of the rig)
             */
            "actualPumpOutput": 0,

            /**
             * @desc $scope.input["soil"]["value"], $scope.estimatedFluidVolume, $scope.input["length"], $scope.input["drillpipe"],
             *     and $scope.actualPumpOutput
             * @type {number} Recommended Pullback Speed (minutes per drill pipe)
             */
            "recommendedPullbackSpeed": 0,

            /**
             * @desc Bore-Gel Recommended Fluid Formation (per 100 gallon)
             * @type {string} Recommendation of amount of Bore-Gel per 100 gallons of water in drilling fluid
             */
            "baseRecommendation": "",

            /**
             * @desc Additives Recommended Fluid Formation (per 100 gallon)
             * @type {string} Recommendation of the amount of Quick-Trol, Penetrol, EZ-Mud, or No-Sag per 100 gallons of water
             */
            "additiveRecommendation": "",

            /**
             * @desc Special Additives Recommended Fluid Formation (per 100 gallons)
             * @type {string} Recommended amount of N-Seal, No-Sag, Penetrol, or Aqua-Clear PFD per 100 gallons of water in drilling fluid
             */
            "specialRecommendation": "",

            /**
             * @desc An additional note provided by Baroid on the general contributing thoughts behind the recommendations given
             * @type {string} The footnote to Baroid's general recommendations
             */
            "note": "",

            /**
             * @desc Baroid's contingency notes that vary depending on user input
             * @type {string} The contingency note
             */
            "contingency": ""

        }

    }]);
angular.module("baroidApp").service("BaroidRecommendedFluidFormationService",
    [function () {

        /**
         * Calculate the base Recommended Fluid Formation (i.e., Bore-Gel)
         * @param soilType {number} The numeric value associates with the selected soilType
         * @param length {number} The length of the bore in feet
         * @param diameter {number} The diameter of the bore hole
         */
        this.calculateBaseRecommendation = function (soilType, length, diameter) {

            var recommendation = "";
            var controlOne, controlTwo, litmusTest;

            switch(soilType) {
                case 1:
                    recommendation = "Bore-Gel 50 lb";
                    break;
                case 2:
                    recommendation = "Bore-Gel 40 lb";
                    break;
                case 3:
                    recommendation = "Bore-Gel 35 lb";
                    break;
                case 4:
                    recommendation = "Bore-Gel 35 lb";
                    break;
                case 5:
                    recommendation = "Bore-Gel 35 lb";
                    break;
                case 6:
                    /**
                     * A special case in the event that the soil type is clay
                     */

                    /*If diameter is less than 8 inches*/
                    if(diameter < 8) {
                        controlOne = 0;
                    }
                    /*If diameter is greater than 8 inches*/
                    else {
                        controlOne = 1;
                    }

                    /*If length is less than 500 feet*/
                    if(length < 500) {
                        controlTwo = 0;
                    }
                    /*If length is greater than 500 feet*/
                    else {
                        controlTwo = 1;
                    }

                    /*Litmus test*/
                    litmusTest = controlOne + controlTwo;

                    /*If the litmus test is zero*/
                    if(litmusTest === 0) {
                        recommendation = "Poly-Bore 0.5 lb"
                    }
                    /*If the litmus test is one*/
                    else {
                        recommendation = "Bore-Gel 35 lb"
                    }

                    break;
                case 7:
                    recommendation = "Bore-Gel 35 lb";
                    break;
            }

            return recommendation;

        }

    }]);
angular.module("baroidApp").service("BaroidRecommendedPullbackCalculator",
    [function () {

        /**
         * @desc Calculates the recommended pullback speed
         * @param soilType {number} The numeric value of the soil type
         * @param estFluidVolume {number} The calculated <b>Estimated Fluid Volume</b> in gallons
         * @param length {number} The length of the bore in feet
         * @param drillpipe {number} The length of the drill pipe in feet
         * @param actualPumpOutput {number} The calculated <b>Actual Pump Output</b> in gallons per minute
         */
        this.calculate = function (soilType, estFluidVolume, length, drillpipe, actualPumpOutput) {
            var O13, O9, O12;

            if (length > 0) {
                O9 = 1;
            }
            else {
                O9 = 0;
            }

            if (actualPumpOutput) {
                O12 = 1;
            }
            else {
                O12 = 0;
            }

            O13 = O9 + O12;

            if (O13 === 2) {
                return estFluidVolume/length*drillpipe/actualPumpOutput;
            }
            else return 0;

        }

    }]);
angular.module("baroidApp").service("BaroidSpecialRFFService",
    [function () {

        /**
         * Calculate the special recommendations (i.e., Penetrol)
         * @param soilType {number} The numeric value associates with the selected soilType
         * @param length {number} The length of the bore in feet
         * @param diameter {number} The diameter of the bore hole
         */
        this.calculateSpecialRecommendation = function (soilType, length, diameter) {
            var special = "";
            var condition, controlOne, controlTwo;

            switch(soilType) {
                case 1:
                    special = "N Seal (see note)";
                    break;
                case 2:
                    special = "No-Sag 0.5 lb";
                    break;
                case 3:
                    special = "No-Sag (see note)";
                    break;
                case 4:
                    special = "No-Sag (see note)";
                    break;
                case 5:
                    special = "Penetrol 1 qt";
                    break;
                case 6:
                    /*Special case for clay*/
                    if(diameter < 8) {
                        controlOne = 0;
                    }
                    else {
                        controlOne = 1;
                    }
                    if(length < 500) {
                        controlTwo = 0;
                    }
                    else {
                        controlTwo = 1;
                    }
                    condition = controlOne + controlTwo;
                    if(condition === 0) {
                        special = "Aqua-Clear PFD 6 oz (optional)";
                    }
                    else {
                        special = "Penetrol 2 qt";
                    }
                    break;
                case 7:
                    special = "No-Sag (see note)";
                    break;
            }
            return special;
        }

    }]);

angular.module("baroidApp").factory("BaroidPopupService",
    ["$ionicPopup",
        function ($ionicPopup) {
            var currentPopup = null;
            return {
                /**
                 * Shows a popup
                 * @param config
                 */
                show: function (config) {
                    currentPopup = $ionicPopup.show({
                        "templateUrl":config.templateUrl,
                        "title":config.title,
                        "subtitle":config.subtitle,
                        "scope":config.scope,
                        "cssClass":config.class,
                        "buttons":config.buttonsArray
                    });
                },
                alert: function (config) {
                    $ionicPopup.alert({
                        "templateUrl":config.templateUrl,
                        "title":config.title
                    })
                },
                closeCurrent: function () {
                    if(currentPopup) {
                        currentPopup.close()
                    }
                }
            };
        }]);
angular.module("baroidApp").service("BaroidProductsListing", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return [
        {
            "name": "AQUA-CLEAR PFD Polymer Dispersant",
            "overview": "AQUA-CLEAR PFD concentrated liquid polymer is a dispersant that provides superior mud and sediment removal from the producing formation and gravel pack. This product is also a highly effective mud thinner and contains no phosphates.",
            "templateUrl": baroidHTMLFiles.aquaClearPFD,
            "dataSheet": "http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/AQUACLEAR%20PFD.pdf"
        },
        {
            "name": "BIO-BORE HDD Fluid Concentrate",
            "overview": "BIO-BORE horizontal directional drilling fluid concentrate is a free-flowing dry powder that, when mixed with fresh water, provides a clay-free, biodegradable drilling fluid for use in various drilling applications, particularly in the situation where clay-based drilling fluids are restricted.",
            "templateUrl": baroidHTMLFiles.bioBore,
            "dataSheet": "http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/BIO-BORE.pdf"
        },
        {
            "name":"BORE-GEL Boring Fluid System",
            "overview":"BORE-GEL fluid system is a single sack, boring fluid system specially formulated for use in horizontal directional drilling (HDD) applications. BORE-GEL system is a proprietary blended product using high-quality Wyoming sodium bentonite. When BORE-GEL system is mixed with fresh water, it develops an easy-to-pump slurry with desirable fluid properties for HDD.",
            "templateUrl":baroidHTMLFiles.boreGel,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/BORE-GEL.pdf"
        },
        {
            "name":"CON DET Wetting Agent",
            "overview":"CON DET proprietary blend of anionic surfactants is specially formulated for use in fresh water, salt water, and in low-solids drilling fluids as a wetting agent.",
            "templateUrl":baroidHTMLFiles.conDet,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/CON_DET.pdf"
        },
        {
            "name":"DIAMOND SEAL Absorbent Polymer",
            "overview":"DIAMOND SEAL polymer is a water-swellable but not water-soluble, 100% crystalline synthetic polymer. DIAMOND SEAL polymer absorbs hundreds of times its own weight in water. It is intended for use primarily as a lost circulation material for horizontal directional drilling.",
            "templateUrl":baroidHTMLFiles.diamondSeal,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/DIAMOND_SEAL.pdf"
        },
        {
            "name":"EZ-MUD Borehole Stabilizer",
            "overview":"EZ-MUD liquid polymer emulsion contains partially hydrolyzed polyacrylamide/polyacrylate (PHPA) copolymer. It is used primarily as a borehole stabilizer to help prevent reactive shale and clay from swelling and sloughing. EZ-MUD polymer is also added to low-solids drilling fluids to help increase lubricity, fluid viscosity, and to help improve carrying capacity of air/foam injection fluids.",
            "templateUrl":baroidHTMLFiles.ezMud,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/EZ-MUD.pdf"
        },
        {
            "name":"EZ MUD GOLD Clay/Shale Stabilizer",
            "overview":"EZ-MUD GOLD clay and shale stabilizer, helps provide inhibition of clay and shale formations in water-based drilling fluids without substantially increasing viscosity. EZ-MUD GOLD stabilizer, when added to a QUIK-GEL or BORE-GEL slurry, yields an inhibitive drilling fluid system while maintaining manageable and effective fluid properties. The unique beaded structure of EZ-MUD GOLD stabilizer allows the material to be mixed easily at minimal shear, eliminating the need for liquid emulsions.",
            "templateUrl":baroidHTMLFiles.ezMudGold,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/A_H/EZ-MUD_GOLD.pdf"
        },
        {
            "name":"N-SEAL Lost Circulation Material",
            "overview":"N-SEAL acid soluble lost circulation material is specially formulated extrusion spun mineral fiber. Due to its solubility in weak acids, N-SEAL material is easily removed from production zones. N-SEAL material can be used as an additive for loss of circulation in concentrations of up to 70 lb/100 gallons (86 kg/m3).",
            "templateUrl":baroidHTMLFiles.nSeal,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/N-SEAL.pdf"
        },
        {
            "name":"NO-SAG Biopolymer Gel Strength Enhancer",
            "overview":"NO-SAG biopolymer is free-flowing, powdered and easily dispersed. It helps enhance the carrying capacity of both clay and polymer-base drilling fluids without significantly increasing the viscosity of the slurry.",
            "templateUrl":baroidHTMLFiles.noSag,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/NO-SAG.pdf"
        },
        {
            "name":"PENETROL Rate of Penetration Enhancer",
            "overview":"PENETROL water miscible, non-ionic wetting agent is designed to help counteract the sticking tendencies of clay.",
            "templateUrl":baroidHTMLFiles.penetrol,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/PENETROL.pdf"
        },
        {
            "name":"POLY-BORE Borehole Stabilizing Agent",
            "overview":"POLY-BORE polymer is a free flowing, water-soluble, easy mixing, 100% dry granular polymer. POLY-BORE polymer is a very high molecular weight partially hydrolyzed polyacrylamide (PHPA) polymer. When mixed with fresh water, a small quantity of POLY-BORE polymer provides a clear, solid-free, viscous borehole stabilizing fluid for use in drilled shaft, auger drilling, horizontal directional boring, trenching excavation and reverse circulation (RC) rotary drilling. POLY-BORE polymer is not designed to be used in conjunction with bentonite-based fluids.",
            "templateUrl":baroidHTMLFiles.polyBore,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/POLY-BORE.pdf"
        },
        {
            "name":"QUIK-GEL High-yield Gellant/Viscosifier",
            "overview":"QUIK-GEL viscosifier is an easy-to-mix, finely ground (200-mesh), premium-grade, high-yielding Wyoming sodium bentonite. QUIK-GEL viscosifier imparts viscosity, fluid loss control and gelling characteristics to freshwater-based drilling fluids.",
            "templateUrl":baroidHTMLFiles.quickGel,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/QUIK-GEL.pdf"
        },
        {
            "name":"QUIK-TROL Filtration Control/Viscosifier",
            "overview":"QUIK-TROL modified natural cellulosic polymer provides filtration control in most water-based drilling fluids. QUIK-TROL polymer, when added to a QUIK-GEL slurry, yields a drilling mud system suitable for drilling in sandy formation. QUIK-TROL polymer can be added to vegetable or mineral oil to provide an oil-based fluid suspension, which can be poured into drill string directly. QUIK-TROL polymer is also used in air/gel-foam drilling.",
            "templateUrl":baroidHTMLFiles.quickTrol,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/QUIK-TROL.pdf"
        },
        {
            "name":"QUIK-TROL LV Filtration Control",
            "overview":"QUIK-TROL LV modified natural cellulosic polymer provides filtration control in most water-based drilling fluids without substantially increasing viscosity. QUIK-TROL LV polymer, when added to a QUIK-GEL or BORE-GEL slurry, yields a drilling mud system suitable for drilling in sandy formation. QUIK-TROL LV polymer can be added to vegetable or mineral oil to provide an oil-based fluid suspension, which can be poured into drill string directly.",
            "templateUrl":baroidHTMLFiles.quickTrolLV,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/QUIK-TROL_LV.pdf"
        },
        {
            "name":"Soda Ash pH Adjustment/Water Softener",
            "overview":"Soda Ash granular powder is primarily used to help condition and soften make-up water and raise pH.",
            "templateUrl":baroidHTMLFiles.sodaAsh,
            "dataSheet":"http://www.baroididp.com/public_idp/pubsdata/Data_Sheets/I_Z/Soda_Ash.pdf"
        }
    ]
}]);
angular.module("baroidApp")

    .value("BaroidAnnularVelocityInputs", {
        "Inputs": [
            {
                "type": "number",
                "inputName": "drillBitDiameter",
                "title": "Drill bit",
                "step":"0.01",
                "hint": "Diameter in inches",
                "isRequired": true,
                "errorMessage": "Number required"
            },
            {
                "type": "number",
                "inputName": "drillPipeDiameter",
                "title": "Drill pipe",
                "step":"0.01",
                "hint": "Diameter in inches",
                "isRequired": true,
                "errorMessage": "Number required"
            },
            {
                "type": "number",
                "inputName": "pumpOutput",
                "title": "Pump output",
                "step":"0.01",
                "hint": "Gallons per minute",
                "isRequired": true,
                "errorMessage": "Number required"
            }
        ]
    });
angular.module("baroidApp")
    .value("BaroidConversionSelections", [
        /*Distance*/
        "Inches",
        "Feet",
        "Yards",
        "Miles",
        /*Volume*/
        "Gallons"
    ])
    .value("BaroidConversionSelectionsMetric", [
        /*Distance*/
        "Millimeters",
        "Centimeters",
        "Meters",
        "Kilometers",
        /*Volume*/
        "Liters"
    ]);
angular.module("baroidApp")
    .value("BaroidConversionValues", {
        "Inches": {
            "type": "number",
            "inputName": "inches",
            "title": "Inches",
            "hint": "Enter inches here",
            "isRequired": true,
            "show": "Inches",
            "errorMessage": "Number required"
        },
        "Feet": {
            "type": "number",
            "inputName": "feet",
            "title": "Feet",
            "hint": "Enter feet here",
            "isRequired": true,
            "show": "Feet",
            "errorMessage": "Number required"
        },
        "Yards": {
            "type": "number",
            "inputName": "yards",
            "title": "Yards",
            "hint": "Enter yards here",
            "isRequired": true,
            "show": "Yards",
            "errorMessage": "Number required"
        },
        "Miles": {
            "type": "number",
            "inputName": "miles",
            "title": "Miles",
            "hint": "Enter miles here",
            "isRequired": true,
            "show": "Miles",
            "errorMessage": "Number required"
        },
        "Gallons": {
            "type": "number",
            "inputName": "gallons",
            "title": "Gallons",
            "hint": "Enter gallons here",
            "isRequired": true,
            "show": "Gallons",
            "errorMessage": "Number required"
        }
    })
    .value("BaroidConversionValuesMetric", {
        "Millimeters": {
            "type": "number",
            "inputName": "millimeters",
            "title": "Millimeters",
            "hint": "Enter millimeters here",
            "isRequired": true,
            "show": "Millimeters",
            "errorMessage": "Number required"
        },
        "Centimeters": {
            "type": "number",
            "inputName": "centimeters",
            "title": "Centimeters",
            "hint": "Enter centimeters here",
            "isRequired": true,
            "show": "Centimeters",
            "errorMessage": "Number required"
        },
        "Meters": {
            "type": "number",
            "inputName": "meters",
            "title": "Meters",
            "hint": "Enter meters here",
            "isRequired": true,
            "show": "Meters",
            "errorMessage": "Number required"
        },
        "Kilometers": {
            "type": "number",
            "inputName": "kilometers",
            "title": "Kilometers",
            "hint": "Enter kilometers here",
            "isRequired": true,
            "show": "Kilometers",
            "errorMessage": "Number required"
        },
        "Liters": {
            "type": "number",
            "inputName": "liters",
            "title": "Liters",
            "hint": "Enter liters here",
            "isRequired": true,
            "show": "Liters",
            "errorMessage": "Number required"
        }
    });
angular.module("baroidApp")
    .value("BaroidOptionCategories", [
        {
            "title":"Baroid",
            "description":"Interactive tools for Drilling",
            "buttons": [
                {
                    "name":"Annular Velocity",
                    "description":"Calculate annular velocity given drill bit diameter, drill pipe diameter, and pump output.",
                    "purpose":"Hole cleaning and stability",
                    "code":1,
                    "state":"annular"
                },
                {
                    "name":"HDD Pullback",
                    "description":"Calculate a recommended pullback speed given soil type, bore length, hole diameter, etc.",
                    "purpose":"Rate of speed per rod in minutes; fluid mix recommendations",
                    "code":2,
                    "state":"pullback"
                },
                {
                    "name":"Conversion",
                    "description":"Convert various units of measurement into other units",
                    "purpose":"Convert units of measurement",
                    "code":3,
                    "state":"conversion"
                },
                {
                    "name":"Product Guide",
                    "description":"A listing of baroid products. Touch the name of the product for a description.",
                    "purpose":"Drilling fluid formation",
                    "code":4,
                    "state":"products"
                }
            ]
        }
    ]);
angular.module("baroidApp")
/**
 * These are object representations for each grid row of inputs
 * (which should contain two columns apiece)
 */
    .value("BaroidPullbackInputs", {
        "RowOne": [
            {
                "type": "number",
                "inputName": "length",
                "title": "Bore length",
                "hint": "Length in feet",
                "isRequired": true,
                "errorMessage": "Number required"
            },
            {
                "type": "number",
                "inputName": "diameter",
                "title": "Diameter",
                "hint": "Diameter in inches",
                "isRequired": true,
                "errorMessage": "Number required"
            }
        ],
        "RowTwo": [
            {
                "type": "number",
                "inputName": "drillpipe",
                "title": "Drillpipe",
                "hint": "Drillpipe length in feet",
                "isRequired": true,
                "errorMessage": "Number required"
            },
            {
                "type": "number",
                "inputName": "pump",
                "title": "Pump rating",
                "hint": "Pump rating in GPM",
                "isRequired": true,
                "errorMessage": "Number required"
            }],
        "RowThree":[
            {
                "type":"range",
                "min":1,
                "max":7,
                "labelClass":"range range-assertive",
                "inputName":"soil",
                "title":"Soil",
                "hint":"Soil type",
                "isRequired":true,
                "errorMessage":"Required"
            }
        ]
    })

/**
 * These multipliers' values must be calculated by their index + 1
 */
.value("BaroidSoilTypes", [
    {
        "type": "Gravel/Cobble",
        "value": 1
    },
    {
        "type": "Sand/Gravel",
        "value": 2
    },
    {
        "type": "CoarseSand",
        "value": 3
    },
    {
        "type": "Fine/MediumSand",
        "value": 4
    },
    {
        "type": "Sandy/Clay",
        "value": 5
    },
    {
        "type": "Clay",
        "value": 6
    },
    {
        "type": "Rock",
        "value": 7
    }
])
    .value("BaroidEstimatedFunnelViscosity", {
        "1":85,
        "2":55,
        "3":37,
        "4":37,
        "5":44,
        "6": function (diameter, length) {
            var M64, I58, I59;

            if(diameter < 8) {
                I58 = 0;
            }
            else {
                I58 = 1;
            }

            if(length < 500) {
                I59 = 0;
            }
            else {
                I59 = 1;
            }

            M64 = I58 + I59;

            if(M64 === 0) {
                return 52;
            }
            else {
                return 72;
            }

        },
        "7":37
    });
angular.module("bisonInc")
    .constant("$ionicLoadingConfig", {
        template: '<ion-spinner icon="ripple"></ion-spinner>',
        noBackdrop: true
    })
    .constant("bisonHTMLFiles", {
        "home":"options.html",
        "locatesModal":"html/bison/modal/locates-modal.html",
        "editLocatesModal":"html/bison/modal/edit-locates-modal.html",
        "bisonFiles":"html/bison/state/bison-files.html",
        "continueState":"html/bison/state/continue-state.html",
        "newBoreLogState":"html/bison/state/new-bore-log-state.html",
        "settingsState":"html/bison/state/settings-state.html",
        "aboutThisApp":"html/bison/templates/about-this-app.html",
        "confirmClearLocalCache":"html/bison/templates/confirm-clear-local-cache.html"
    });
angular.module("bisonInc")
    .controller("ContinueController", ["$scope", "bisonIndexedDB",
        "bisonService", "$timeout", "$state", "bisonPDFService",
        "$cordovaFile", "$q", "$cordovaToast", "$ionicPopup",
        function ($scope, bisonIndexedDB, bisonService, $timeout, $state,
                  bisonPDFService, $cordovaFile, $q, $cordovaToast, $ionicPopup) {

            /**
             * Display the type of documentation that is to be resumed
             */
            $scope.type = "";
            /*Initialized in $scope.init()*/
            $scope.title = "";
            /*Initialized in $scope.init()*/

            /**
             * Holds the loaded records from IndexedDB
             * @type {Array}
             */
            $scope.bisonRecords = [];//Initialized in $scope.init()

            /**
             * Loads either all "logs" or all "journals" via ngInit
             */
            $scope.init = function () {
                if (bisonService.getType() === "convertToLog") {
                    $scope.type = "journal";//In order to show only journals
                    $scope.title = "Convert journal";
                    /**
                     * In order to "load" the selected journal as a log
                     * and supply the missing fields
                     */
                    //bisonService.setType("log");
                } else if (bisonService.getType() === "convertToPDF") {
                    $scope.type = "log";
                    $scope.title = "Convert log";
                    //Leave bisonService.getType() as "convertToPDF"
                } else {
                    $scope.type = bisonService.getType();
                    $scope.title = "Continue " + $scope.type;
                }
                //Get either all "log" or all "journal" records, or "convert"
                bisonIndexedDB.getAllOfWhere($scope.bisonRecords, "Type", "type", $scope.type, callback);
            };

            /**
             * Delete a database record
             * @param id
             */
            $scope.deleteDatabaseRecord = function (id) {
                var confirmPopup = $ionicPopup.confirm({
                    title: "Delete this record",
                    template: "<pre>Are you sure you want to?</pre>"
                }).then(function (res) {
                    if (res) {
                        $scope.bisonRecords = [];
                        bisonIndexedDB.remove($scope.bisonRecords, $scope.mySelection["value"]["name"] || "Type", "type", $scope.type, id, callback);
                    } else {

                    }
                });
            };

            //Callback for every database operation to be done from within $apply()
            var callback = function (cb) {
                $scope.$apply(function () {
                    if (cb) {
                        cb();//This is working well here
                    }
                });
            };

            /**
             * Bound to a select element whose ngOptions are $scope.bisonIndices
             * To access its real string values, do so by:
             * $scope.mySelection["value"]["name"]
             * @type {{value: {name:String}}}
             */
            $scope.mySelection = {value: ""};

            /**
             * Used to show a corresponding property associated with each record
             * listed in the ionItem ngRepeat="record in bisonRecords"
             * For example, record[showProperty]
             * @type {string}
             */
            $scope.showProperty = "";
            $scope.$watchCollection("mySelection", function () {
                /**
                 * If a value is obtained, get a String whose first letter
                 * is lowercase
                 */
                if ($scope.mySelection["value"] && $scope.mySelection["value"]["name"]) {
                    /**
                     * The following binds the $scope.showProperty to the lowercase value
                     * of the Index chosen from the select element. This is done so that one
                     * value can be associated with both an IndexedDB Index and an Object property.
                     */
                    var prop = $scope.mySelection["value"]["name"];
                    var newProp = prop.split("");
                    newProp[0] = newProp[0].toLowerCase();
                    prop = newProp.join("");
                    $scope.showProperty = prop;
                    $scope.bisonRecords = [];
                    bisonIndexedDB.getAllOfWhere($scope.bisonRecords, $scope.mySelection["value"]["name"], "type", $scope.type, callback);
                }
            });

            /**
             * The bore log or journal to continue
             * @param logToResume
             */
            $scope.select = function (logToResume) {
                if (bisonService.getType() === "convertToPDF") {
                    bisonService.setActiveLog(logToResume);
                    var fileName = bisonService.getActiveLog()["id"] + ".pdf";
                    $scope.saveData(fileName);
                }
                else if (bisonService.getType() === "convertToLog") {
                    bisonService.setActiveLog(logToResume);
                    bisonService.setType("log");
                    bisonService.getActiveLog()["type"] = "log";
                    $state.go("resume", {id: logToResume["id"]});
                }
                else {
                    bisonService.setActiveLog(logToResume);
                    $state.go("resume", {id: logToResume["id"]});
                }
            };

            /**
             * @Proposed for taking the current "sort by" key of
             * $scope.mySelection (which is capitalized) and returning
             * a string whose first letter is lowercase and can be used
             * to access an object property
             * @returns {String}
             */
            function indexToProperty() {
                var temp = $scope.mySelection["value"]["name"].split("");
                temp[0] = temp[0].toLowerCase();
                return temp.join("");
            }

            /**
             * Returns an Array of strings each of which
             * are used as ObjectStore Indices by IndexedDB via
             * the bisonIndexedDB service
             */
            $scope.bisonIndices = bisonIndexedDB.getIndexKeys();

            /**
             * An Array bound to ngOption
             * These are used to sort the list via
             * bisonIndexedDB service
             * @type {Array|{name: String}}
             */
            $scope.items = [
                //{name:$scope.bisonIndices[0]},
                //{name:$scope.bisonIndices[1]},
                {name: $scope.bisonIndices[2]},
                {name: $scope.bisonIndices[3]},
                {name: $scope.bisonIndices[4]},
                {name: $scope.bisonIndices[5]},
                {name: $scope.bisonIndices[6]},
                {name: $scope.bisonIndices[7]}
            ];

            /**
             * Obtaining the PDF
             * @param fileName {String} the Active Log ID + ".pdf"
             */
            $scope.saveData = function (fileName) {
                $scope.fileName = fileName;
                angular.element("#pdfDownload").on("click", function () {
                    if (window.chrome) {
                        bisonPDFService.getPDF();
                    } else {
                        /*Create a PDF on Android device*/
                        androidPDF();
                    }
                });
            };
            function androidPDF() {
                $scope.targetPath = "";
                var nativeUrl,
                    data;

                function getBisonPDF() {
                    var q = $q.defer();
                    bisonPDFService.getPDF(q);
                    return q.promise;
                }

                $cordovaFile.createDir("BisonIonic", false)
                    .then(function (result) {
                        nativeUrl = result["nativeURL"];
                        $cordovaToast.show("Saving to\n" + nativeUrl, "short", "bottom");
                        /*Obtain the data for creating a Blob*/
                        getBisonPDF().then(function (result) {
                            data = result;
                        }).then(function () {
                            /*Write the file from a Blob*/
                            $cordovaFile.writeFile("BisonIonic/" + $scope.fileName, new Blob([data],
                                {type: "application/pdf"}), {"append": false})
                                .then(function () {
                                    $cordovaToast.show("Your file has been saved", "short", "bottom");
                                    /*history.back();*/
                                });
                        });
                    }).catch(function (error) {
                        $cordovaToast("Failed to create PDF: " + error, "long", "bottom");
                    });
            }
        }]);
angular.module("bisonInc")
    .controller("FilesController", ["$scope", "$cordovaFile", "$cordovaEmailComposer",
        "$cordovaFileOpener2", "$ionicPopup",
        function ($scope, $cordovaFile, $cordovaEmailComposer,
                  $cordovaFileOpener2, $ionicPopup) {
            /*This will be the path on an Android device*/
            var pdfDir = "/storage/emulated/0/BisonIonic";
            $scope.mySelection = {value: ""};
            $scope.bisonFiles = [];
            /**
             * An Array bound to ngOption
             * These are used to sort the list via
             * bisonIndexedDB service
             * @type {Array|{name: String}}
             */
            $scope.items = [
                {name: "Full path", prop:"nativeURL"}
            ];
            $scope.showProperty = "";

            /**
             * Will need to modify for including iOS or WebStorage, etc
             */
            $scope.init = $cordovaFile.listDir(pdfDir).then(function (files) {
                $scope.bisonFiles = files;
            }, function (error) {
                console.log("From error");
                $scope.bisonFiles.push({
                    name: "ForTestingInChrome.pdf",
                    nativeURL: "/Some/Path/To/A/ForTestingInChrome.pdf"});
            });

            /**
             * To delete a PDF file from the device
             * @param file
             */
            $scope.deleteFile = function (file) {
                console.log("Delete: " + file.name + " @ " + file.nativeURL);
                var confirmDelete = $ionicPopup.confirm({
                    title: "Delete this file?",
                    template: "<p>" + file.name + " will be removed from this device</p>"
                }).then(function (res) {
                    if (res) {
                        /*Confirmed-Delete the file*/
                        $cordovaFile.removeFile(file.nativeURL).then(function () {
                            $ionicPopup.alert({
                                title:"Success",
                                template:"<p>" + file.name + " was successfully deleted</p>"
                            });
                        }, function () {
                            $ionicPopup.alert({
                                title:"Error",
                                template:"<p>" + file.name + " could not be deleted</p>"
                            });
                        });
                    } else {
                        //Do nothing
                    }
                })
            };

            /**
             * To send (email) a PDF file on the device
             * @param file
             */
            $scope.sendFile = function (file) {
                console.log("Send: " + file.name + " @ " + file.nativeURL);
                $cordovaEmailComposer.isAvailable().then(function () {
                    //is available
                }, function () {
                    $ionicPopup.alert({
                        title:"Error",
                        template:"<p>$cordovaEmailComposer in <strong>not</strong> available</p>"
                    })
                });

                var email = {
                    to:"",
                    cc:"",
                    bcc:"",
                    attachments: [
                        file.nativeURL
                    ],
                    subject:file.name,
                    body:"",
                    isHtml:false
                };

                $cordovaEmailComposer.open(email).then(null, function () {
                    //user cancelled email
                });
            };

            /**
             * To open a file on the device
             * @param file
             */
            $scope.openFile = function (file) {
                console.log("Open: " + file.name + " @ " + file.nativeURL);
                $cordovaFileOpener2.open(
                    file.nativeURL,
                    "application/pdf"
                ).then(function () {
                        //success
                    }, function () {
                        $ionicPopup.alert({
                            title: "Error",
                            template: "<p>Couldn\'t open " + file.name + "</p>"
                        });
                    });
            };

            /**
             * TODO delete
             * For grabbing the listDir() => Array[] of Objects to get their properties
             */
            $scope.consoleLog = function () {
                $scope.log = JSON.stringify($scope.bisonFiles);
            };

}]);
angular.module("bisonInc").controller('NewBoreLogController',
    ["$scope", "$timeout", "bisonService", "bisonIndexedDB", "bisonDateService",
        "bisonLocateFactory", "boreLogModelService", "$stateParams", "$ionicPopup",
        "bisonHTMLFiles",
        function ($scope, $timeout, bisonService, bisonIndexedDB, bisonDateService,
                  bisonLocateFactory, boreLogModelService, $stateParams, $ionicPopup,
                  bisonHTMLFiles) {

            /*For easier refactoring of templates*/
            $scope.locatesModalTemplate = bisonHTMLFiles.locatesModal;

            /**
             * Track if the log has been added to IndexedDB once
             * @type {boolean}
             */
            var hasBeenCreated = false;

            /**
             * Utility helper function for updating the IndexedDB
             * record after certain changes made to models
             */
            function updateActiveLog(property, value) {
                //Given the "id" property shouldn't change, this should always update, not add
                bisonService.getActiveLog()[property] = value;
                bisonIndexedDB.add(bisonService.getActiveLog());
            }

            //-- Categories of information pertaining to a bore log and bore journal
            $scope.boreLogModel = boreLogModelService.getModel();

            /**
             * Checks for $stateParams["id"] to determine if this is a
             * case of a "new" log or of one being "continued"
             */
            $scope.init = function () {
                /**
                 * If $stateParams has an actual parameter "id"
                 */
                if($stateParams["id"]) {
                    //Update the view
                    $scope.boreLogModel[0]["value"] = bisonService.getActiveLog()["customer"];
                    $scope.boreLogModel[1]["value"] = bisonService.getActiveLog()["conduit"];
                    $scope.boreLogModel[2]["value"] = bisonService.getActiveLog()["location"];
                    $scope.boreLogModel[3]["value"] = bisonService.getActiveLog()["length"];
                    $scope.boreLogModel[4]["value"] = new Date(bisonService.getActiveLog()["date"]);

                    $scope.numberOfLocates = bisonService.getActiveLog()["locates"].length;

                    $timeout(function () {
                        angular.element("#0-input").val(bisonService.getActiveLog()["customer"]);
                        angular.element("#1-input").val(bisonService.getActiveLog()["conduit"]);
                        angular.element("#2-input").val(bisonService.getActiveLog()["location"]);
                        angular.element("#3-input").val(bisonService.getActiveLog()["length"]);
                        //TODO Resolve how to set the Date input
                        //angular.element("#4-input").val(new Date(bisonService.getActiveLog()["dateObj"]["originalDate"]));
                    }, 500);
                    hasBeenCreated = true;//Keep this after "Update the view" as each assignment sets to false
                }
            };

            /**
             * Give focus to the first input
             * (always will be the customer-input)
             */
            $scope.focusFirstInput = function () {
                $timeout(function () {
                    angular.element("#0-input").focus();
                }, 500);
            };

            /**
             * The "Edit locates" button will shown once this is true
             * @type {boolean}
             */
            $scope.showEditButton = false;
            //"numberOfLocates" is found in $scope.recordLocate()
            $scope.$watchCollection("numberOfLocates", function (newValue, oldValue) {
                //As long as there is one or more, show the "Edit Button"
                if (newValue >= 1) $scope.showEditButton = true;
            });

            /**
             * drillPipeBoolean has ngModel binding to ionToggle
             * @type {{value: boolean}} Object watched by $watchCollection
             * which updates the model drillPipeLength between 1 of 2 possible
             * drillPipeLengths: "10" and "15"
             */
            $scope.drillPipeBoolean = {value: false};
            /*Default to "10", the most commonly used drillPipeLength*/
            $scope.drillPipeLength = "10";
            $scope.$watchCollection("drillPipeBoolean", function (newValue, oldValue) {
                //Set drillPipeLength to "15" when true (toggled)
                if ($scope.drillPipeBoolean["value"] === true) {
                    $scope.drillPipeLength = "15";
                    angular.element("#drillPipeCategoryHeader").addClass("hide");
                } else {
                    /*Set drillPipeLength to "10" when false (un-toggled)*/
                    $scope.drillPipeLength = "10";
                }
                //bisonService.getActiveLog()["drillPipe"] = $scope.drillPipeLength;
                //update();
                hasBeenCreated = false;
            });

            /**
             * Fired by the "Cancel" button
             * The element is part of the bisonFormButtonPanel directive
             * and this function is a parent scope function set via
             * its &bisonOnCancel attribute
             */
            $scope.onCancel = function () {
                //-- If there is a current Active Log, ask if they want to save it to DB
                if(bisonService.getActiveLog()["id"]) {
                    var popup = $ionicPopup.show({
                        scope: $scope,
                        template: 'Your progress will be saved in a private database on this device',
                        title: "Save changes?",
                        subTitle: "Would you like to save your changes?",
                        buttons: [
                            {
                                text: "Cancel",
                                type: "button-positive"
                            },
                            {
                                text: "Save",
                                type: "button-positive",
                                onTap: function () {
                                    /*In case it's a bore journal*/
                                    if(bisonService.getActiveLog()["customer"] !== $scope.boreLogModel[0].value) {
                                        bisonService.getActiveLog()["customer"] = $scope.boreLogModel[0].value;
                                    }
                                    if(bisonService.getActiveLog()["location"] !== $scope.boreLogModel[2].value) {
                                        bisonService.getActiveLog()["location"] = $scope.boreLogModel[2].value;
                                    }
                                    /*In case it's a bore log*/
                                    if(bisonService.getType() === "log") {
                                        if(bisonService.getActiveLog()["conduit"] = $scope.boreLogModel[1].value) {
                                            bisonService.getActiveLog()["conduit"] = $scope.boreLogModel[1].value;
                                        }
                                        if(bisonService.getActiveLog()["length"] !== $scope.boreLogModel[3].value) {
                                            bisonService.getActiveLog()["length"] = $scope.boreLogModel[3].value;
                                        }
                                        if(bisonService.getActiveLog()["drillPipe"] !== $scope.drillPipeLength) {
                                            bisonService.getActiveLog()["drillPipe"] = $scope.drillPipeLength;
                                        }
                                    }/*end if*/
                                    bisonIndexedDB.add(bisonService.getActiveLog());
                                    bisonService.setActiveLog(undefined);
                                    $timeout(function () {
                                        history.back();
                                    }, 1000);
                                }
                            }
                        ]
                    });
                } else {
                    var noDataPopup = $ionicPopup.confirm({
                        title: "Confirm you want to quit",
                        template: "<p>Seems that you haven't actually <b>saved</b> any data yet." +
                        " This means there is no data to <b>Save</b> prior to quiting.</p>"
                    });
                    noDataPopup.then(function (res) {
                        if(res) {
                            history.back();
                        }
                    });
                }
            };

            /**
             * Filtering out what type of log is currently active
             */
            //-- Used for binding the view to model data
            $scope.typeHeader = bisonService.getType();
            //-- A boolean used by ngShow
            $scope.isALog = bisonService.getType() === "log";

            //-- On submission of General Info
            $scope.submitGeneralInfo = function (overwrite) {
                /**
                 * If (in the lifecycle of the current state view)
                 * an "active log" has not been created,
                 * 1) Create one,
                 * 2) Set it as bisonService's activeLog,
                 * 3) Set its initial values (ONLY IF BRAND NEW), and
                 * 4) Add it to IndexedDB via bisonIndexedDB service
                 */
                if (!bisonService.getActiveLog().hasOwnProperty("id")) {
                    console.log(bisonService.getType());
                    /**
                     * Set bisonService.activeLog
                     * @type {Object} Represents the current log with which
                     * the user is currently interacting
                     *
                     * Note: Some properties of the activeLog depend on
                     * others being set first and are given temporary values
                     */
                    bisonService.setActiveLog({
                        type: bisonService.getType(),
                        customer: $scope.boreLogModel[0].value,
                        conduit: $scope.boreLogModel[1].value,
                        location: $scope.boreLogModel[2].value,
                        length: $scope.boreLogModel[3].value,
                        drillPipe: $scope.drillPipeLength
                    });

                    /**
                     * Check if its a brand new log via "hasOwnProperty"
                     * If property is missing, it should signify that this is a
                     * brand new log being created. All of the following assignments
                     * should only **ever happen ONCE**.
                     */
                    if(!bisonService.getActiveLog().hasOwnProperty("dateObj")) {
                        bisonService.getActiveLog()["dateObj"] =
                            bisonService.getType() === "log" ? bisonDateService.getBisonDateObject($scope.boreLogModel[4].value)
                                : bisonDateService.getBisonDateObject();
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("date")) {
                        bisonService.getActiveLog()["date"] =
                            bisonService.getType() === "log" ? bisonDateService.humanReadableDate($scope.boreLogModel[4].value)
                                : bisonDateService.humanReadableDate($scope.boreLogModel[4].value);
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("monthDate")) {
                        bisonService.setMonthDate(bisonDateService.dateRecord.month + bisonDateService.dateRecord.date);
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("year")) {
                        bisonService.setYear(bisonDateService.dateRecord.year);
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("locates")) {
                        bisonService.getActiveLog()["locates"] = [];
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("id")) {
                        console.log("Setting id");
                        bisonService.setID(bisonDateService.generateBisonID(bisonService.getActiveLog()["customer"], bisonService.getActiveLog()["location"]));//Depends on other properties being set first
                    }

                    /**
                     * Add to IndexedDB via bisonIndexedDB service
                     */
                    bisonIndexedDB.add(bisonService.getActiveLog());

                    /**
                     * @type {boolean} will be reset if the user goes
                     * back in the nav stack
                     */
                    hasBeenCreated = true;
                }
            };

            /**
             * Format and record user input of locates
             * @crossingParam string [optional] passed from @bisonModalOnClick (bisonFormButtonPanel directive)
             */
            $scope.recordLocate = function (crossingParam) {
                /**
                 * From locates-modal.html
                 * (the $ionicModal template at @bisonModalTemplate
                 * in the bisonFormButtonPanelDirective)
                 */
                var feet = angular.element("#feet").val(),
                    inches = angular.element("#inches").val();
                var crossing = crossingParam;
                if(!feet) {feet = 0;}
                if(!inches) {inches = 0;}

                if(!bisonService.getActiveLog().hasOwnProperty("locates")) {
                    bisonService.getActiveLog()["locates"] = [];
                }
                //Reset the input elements
                angular.element("#feet").val("");
                angular.element("#inches").val("");
                var locate = bisonLocateFactory.format(feet, inches, crossing);//Format the locate
                bisonLocateFactory.add(locate, bisonService.getActiveLog()["locates"]);//Add the locate to the active log
                $scope.numberOfLocates = bisonService.getActiveLog()["locates"].length;//Update the numberOfLocates
                bisonIndexedDB.add(bisonService.getActiveLog());//-- Update the database object
            };

            /**
             * Used by bisonFormButtonPanel directive attribute @bisonModalValues
             * @returns {{title: *, value: *}[]}
             */
            $scope.getModalValues = function () {
                return bisonService.getActiveLog()["locates"];
            };

            /**
             * Return the bisonService.activeLog["locates"]
             * @returns {Array}
             */
            $scope.getLocates = function () {
                return bisonService.getActiveLog()["locates"];
            };

            /**
             * When an item is moved, deleted, or changed
             * via bisonFormButtonPanel's $ionicModal
             * @param value {string} The locate
             * @param fromIndex {Number} [optional] The original index of the locate in the Array
             * @param toIndex {Number} [optional] The new index of the locate being moved
             */
            $scope.updateLocate = function (value, fromIndex, toIndex) {
                //The work is handled by bisonLocateFactory.update()
                bisonLocateFactory.update(bisonService.getActiveLog()["locates"], value, fromIndex, toIndex);
                //Update IndexedDB via bisonIndexedDB service
                bisonIndexedDB.add(bisonService.getActiveLog());
            };

            //-- UI effects
            /**
             * Handles the CSS effects added to certain buttons
             * @param $event {Object} Used to get the $event.target DOM elem
             * to wrap in angular.element()
             */
            $scope.activate = function ($event) {
                var elem = angular.element($event.target);
                elem.addClass('emphasis');
                $timeout(function () {
                    elem.removeClass('emphasis');
                }, 2000)
            };

        }]);
angular.module("bisonInc")
    .controller("OptionsController",
    ["$scope", "$timeout", "$state", "bisonService", "bisonIndexedDB", "bisonPDFService",
        function ($scope, $timeout, $state, bisonService, bisonIndexedDB, bisonPDFService) {

            $scope.initDB = function() {
                bisonIndexedDB.init()
            };

            $scope.settings = function () {
                $state.go("settings");
            };

            $scope.myLogger = function (data) {
                console.log(data + " clicked");
            };

            $scope.optionCategories = [
                {
                    title: "Bore Log", description: "Record a completed bore",
                    buttons: [
                        {name: "Create", func: "newBoreLog()", code: 0},
                        {name: "Continue", func: "", code: 1}
                    ],
                    class: ''
                },
                {
                    title: "Bore Journal",
                    description: "Record an ongoing bore",
                    buttons: [
                        {name: "Create", func: "", code: 2},
                        {name: "Continue", func: "", code: 3},
                        {name: "Convert", func: "", code: 4}
                    ],
                    class: ''
                },
                {
                    title: "Create PDF", description: "A billable report",
                    buttons: [
                        {name: "Create", func: "", code: 5}
                    ],
                    class: ''
                },
                {
                    title: "Browse", description: "Choose from the file types below",
                    buttons: [
                        {name: "Logs", func: "", code: 6},
                        {name: "Journals", func: "", code: 7},
                        {name: "PDFs", func: "", code: 8}
                    ],
                    class: ''
                }
            ];

            //-- Detect button press from options
            $scope.options = function (button) {
                switch (button.code) {
                    case 0:
                        bisonService.setType("log");
                        $state.go('new-bore-log');
                        break;
                    case 1:
                    case 6:
                        bisonService.setType("log");
                        $state.go("continue");
                        break;
                    case 2:
                        bisonService.setType("journal");
                        $state.go('new-bore-log');
                        break;
                    case 3:
                    case 7:
                        bisonService.setType("journal");
                        $state.go("continue");
                        break;
                    case 4:
                        bisonService.setType("convertToLog");
                        $state.go("continue");
                        break;
                    case 5:
                        bisonService.setType("convertToPDF");
                        $state.go("continue");
                        break;
                    case 8:
                        $state.go("bison-files");
                        break;
                    default :
                        $scope.myLogger(button.name);
                        break;
                }
            };

            $scope.showDescription = function ($event) {
                angular.element($event.target).toggleClass('activated');
                angular.element($event.target).siblings('p').slideToggle(200);
            };

            $scope.activate = function ($event, button) {
                var elem = angular.element($event.target);
                elem.addClass('emphasis');
                $scope.options(button);
                //Remove this (below)
                $timeout(function () {
                    elem.removeClass('emphasis');
                }, 2000)
            };

        }]);
angular.module("bisonInc")
.controller("SettingsController",["$scope", "$ionicPopup", "bisonIndexedDB", "bisonHTMLFiles",
        function ($scope, $ionicPopup, bisonIndexedDB, bisonHTMLFiles) {
            $scope.settingsCategories = [
                {
                    name: "Local records",
                    description: "manage cached data on this device",
                    buttons: [
                        {
                            text: "Clear local cache",
                            onClick: function () {
                                confirm({
                                    title: "Clear local cache",
                                    templateUrl: bisonHTMLFiles.confirmClearLocalCache,
                                    fn: function () {
                                        bisonIndexedDB.deleteDatabase();                                    }
                                });
                            }
                        }
                    ]
                },
                {
                    name: "About this app",
                    description: "whose fault is this, really?",
                    buttons: [
                        {
                            text: "About this app",
                            onClick: function () {
                                alertPopup({
                                    title: "BoreLogger",
                                    templateUrl: bisonHTMLFiles.aboutThisApp,
                                    fn: function () {
                                        //Nothing
                                    }
                                });
                            }
                        }
                    ]
                }
            ];


            /**
             * A confirm popup
             * @param configObj passed with values like title, templateUrl...
             */
            var confirm = function (configObj) {
                var confirmPopup = $ionicPopup.show({
                    scope: $scope,
                    templateUrl: configObj.templateUrl,
                    title:configObj.title,
                    buttons: [
                        {
                            text: "Cancel",
                            type: "button-positive"
                        },
                        {
                            text: "Ok",
                            type: "button-positive",
                            onTap: configObj.fn
                        }
                    ]
                });
            };

            /**
             * An alert w Ok button
             * @param configObj passed with values like title, templateUrl...
             */
            var alertPopup = function (configObj) {
                var myAlertPopup = $ionicPopup.alert({
                    scope: $scope,
                    templateUrl: configObj.templateUrl,
                    title:configObj.title,
                    okText:"Got it",
                    okType:"button-positive"
                });
            };

        }]);

//template:'<div style="text-align: center">' +
//'<p>This will delete all local database records on this device.</p></br>' +
//'<img src="img/database.png"></br>' +
//'<p style="color: #0000FF"><b>Are you sure?</b></p></div>',
angular.module("bisonInc").directive("bisonCategoryWithDescription", function (){
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
});
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
                bisonModalType: "@",
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
                bisonPopupPlaceholder: "@",
                bisonOnEdit: "&"
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
            controller: function ($scope, $ionicModal, $ionicPopup, $timeout) {
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
                $scope.$on('modal.hidden', function () {
                });
                $scope.$on('modal.removed', function () {
                });

                /**
                 * Various UI effects
                 */
                $scope.toggleContent = function () {
                    var elem = angular.element(".bisonHide");
                    if (elem) elem.fadeToggle();
                };
                $scope.fadeContent = function () {
                    var elem = angular.element(".bisonHide");
                    if (elem) elem.fadeOut();
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
                 * A hack-y quick fix. Try to do right.
                 * @param crossing
                 */
                $scope.recordLocateWithCrossing = function (crossing) {
                    $scope.bisonModalOnClick(crossing);
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
                 * @param code [*] Mandatory if only a crossing is being added
                 */
                    //TODO Refactor to editPopup
                $scope.editPopup = function (value, fromIndex, toIndex, code) {
                    $scope.toEdit = value;
                    var editorPopup = $ionicPopup.show({
                        scope: $scope,
                        template: '<label class="item-input item-floating-label" focus-me>' +
                        '<span class="input-label bison-floating-label">Orig {{toEdit}}</span>' +
                        '<input type="text" id="popupInput" class="bison-input-field"' +
                        'placeholder="{{toEdit}}" focus-me>' +
                        '</label>',
                        title: "Edit " + $scope.toEdit,
                        subTitle: "Enter to save",
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
                                    //previously respond
                                }
                            }
                        ]
                    });
                    /**
                     * Set input value if applicable
                     * via a call to $timeout service
                     */
                    if ($scope.toEdit) {
                        $timeout(function () {
                            angular.element("#popupInput").val($scope.toEdit);
                        }, 500);
                    }
                };

                /*Attempting new popup for ADDING so the above can serve for editing*/
                $scope.addPopup = function () {
                    var addLocatePopup = $ionicPopup.show({
                        scope: $scope,
                        template: '<label class="item-input item-floating-label" focus-me>' +
                        '<span class="input-label bison-floating-label">{{bisonPopupPlaceholder}}</span>' +
                        '<input type="text" id="popupInput" class="bison-input-field"' +
                        'placeholder="{{bisonPopupPlaceholder}}" focus-me>' +
                        '</label>',
                        title: $scope.bisonPopupTitle,
                        subTitle: $scope.bisonPopupSubtitle,
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
                                    $scope.bisonModalOnClick({value: value});
                                }
                            }
                        ]
                    });
                }
            }
        }
    });
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
angular.module("bisonInc").service("boreLogModelService", ["bisonService", function (bisonService) {
    this.getModel = function () {
        return [
            {
                title: "Customer",
                hint: "Who the job was for",
                description: "the company for whom the work is performed",
                value: "",
                inputType: "text",
                inputName: "customer",
                show: true,
                required: true
            },
            {
                title: "Conduit",
                hint: "(No.) Size Type",
                description: "product (for ex., (1) 12\" Plastic)",
                value: "",
                inputType: "text",
                inputName: "conduit",
                show: bisonService.getType() === "log",
                required: bisonService.getType() === "log"
            },
            {
                title: "Location",
                hint: "Location of the job",
                description: "place most readily associated with the job site",
                value: "",
                inputType: "text",
                inputName: "location",
                show: true,
                required: true
            },
            {
                title: "Length of bore",
                hint: "Linear feet",
                description: "footage drilled (no comma, just the number)",
                value: "",
                inputType: "text",
                inputName: "length",
                show: bisonService.getType() === "log",
                required: bisonService.getType() === "log"
            },
            {
                title: "Date",
                hint: "Start or end of job",
                description: "start or end of the job",
                value: "",
                inputType: "date",
                inputName: "date",
                show: bisonService.getType() === "log",
                required: bisonService.getType() === "log"
            }
        ];
    }
}]);
angular.module("bisonInc").service("bisonDateService", ["bisonService", function (bisonService) {
    var self = this;
    self.dateRecord = {};
    /**
     * Set value bisonService.activeLog["dateObj"]
     * @returns {Object} dateObj
     */
    self.getBisonDateObject = function (dateValue) {
        //Determine @dateToParse by bisonService.activeLog["type"]
        var dateToParse = bisonService.getType() === "journal" ?
            new Date().format("M d Y H m s") :
            new Date(dateValue)
                .format("M d Y H m s");
        //Return the dateObj
        return self.parseDate(dateToParse);
    };

    /**
     * Set value of bisonService.activeLog["date"]
     * @returns {String}
     */
    self.humanReadableDate = function (dateArg) {
        return bisonService.getType() === "journal" ?
            new Date().format("M d Y") :
            new Date(dateArg)
                .format("M d Y");
    };

    /**
     * Set the value of bisonService.activeLog["id"]
     * @returns {string}
     */
    self.generateBisonID = function (customer, location) {
        var id = customer + location + self.dateRecord.bisonDateToFileFormat();
        return id.replace(/\s/g, "");
    };
    self.parseDate = function (dateToParse) {
        var dateArray = dateToParse.toString().split(" ");
        self.dateRecord = {
            originalDate: dateToParse,
            month: dateArray[0],
            date: dateArray[1],
            year: dateArray[2],
            hour: dateArray[3],
            minute: dateArray[4],
            second: dateArray[5],
            bisonDateToString: function () {
                return this.month + ". " + this.date + ", " +
                    this.year;
            },
            bisonTimeToString: function () {
                return this.hour + ":" + this.minute + ":" + this.second;
            },
            bisonDateToFileFormat: function () {
                return this.month + this.date + this.year + "-" + this.hour + this.minute + this.second;
            }
        };
        return {
            originalDate: dateToParse,
            month: dateArray[0],
            date: dateArray[1],
            year: dateArray[2],
            hour: dateArray[3],
            minute: dateArray[4],
            second: dateArray[5]
        }
    }
}]);
angular.module("bisonInc").provider("bisonIndexedDB", function () {

    var self = this;
    //-- Configurable properties
    self.databaseName = "";
    self.databaseVersion = 0;
    self.objectStoreName = "";
    self.db = null;

    //-- Return the service (mini-safe)
    this.$get = ["$ionicPopup", function ($ionicPopup) {
        return {
            init: function () {
                console.log("init() called");
                var request = indexedDB.open(self.databaseName, self.databaseVersion);
                request.addEventListener("success", this.startDB);
                request.addEventListener("error", this.showError);
                request.addEventListener("upgradeneeded", this.createDB);
            },
            startDB: function (event) {
                console.log("startDB() called");
                self.db = event.target.result;
                if (self.db) console.log("Database is ready");
            },
            createDB: function (event) {
                var database = event.target.result;
                if (database) console.log("Created database");
                //-- Create the ObjectStore and Indexes
                var objectStore = database.createObjectStore("bisonLogs", {keyPath: "id"});
                if (objectStore) console.log("ObjectStore \"" + "bisonLogs" + "\" created");
                if (!objectStore) console.log("Couldn't create object store");
                objectStore.createIndex("Type", "type", {unique: false, multiEntry: true});
                objectStore.createIndex("Customer", "customer", {unique: false, multiEntry: true});
                objectStore.createIndex("Conduit", "conduit", {unique: false, multiEntry: true});
                objectStore.createIndex("Location", "location", {unique: false, multiEntry: true});
                objectStore.createIndex("Length", "length", {unique: false, multiEntry: true});
                objectStore.createIndex("DrillPipe", "drillPipe", {unique: false, multiEntry: true});
                objectStore.createIndex("Date", "date", {unique: false, multiEntry: true});
                objectStore.createIndex("Month", "monthDate", {unique: false, multiEntry: true});
                objectStore.createIndex("Year", "year", {unique: false, multiEntry: true});
            },
            add: function (myObject) {
                //if(myObject) console.log("Attempting to add " + myObject);
                var myTransaction = self.db.transaction(["bisonLogs"], "readwrite");
                //if(myTransaction) console.log("Transacting");
                myTransaction.addEventListener("complete", function (e) {
                    //console.log("Transaction complete");
                });
                var objectStore = myTransaction.objectStore(self.objectStoreName);
                var request = objectStore.put(myObject);//Should update if id exists
                request.addEventListener("success", function (event) {
                    //console.log(event.target.result);
                });
                request.addEventListener("error", function (error) {
                    this.showError(error);
                });
            },
            getAllOfWhere: function (arrayParam, indexKey, prop, where, callback) {
                //Reset the arrayParam to an empty array
                if (arrayParam.length !== 0) {
                    arrayParam = [];
                }
                //Ensure the indexKey is legitimate
                if (this.getIndexKeys().indexOf(indexKey) === -1) {
                    this.showError({
                        code: 1313,
                        message: "Only search by legitimate indices: " + this.getIndexKeys()
                    })
                } else {
                    var myTransaction = self.db.transaction(["bisonLogs"], "readonly");
                    var objectStore = myTransaction.objectStore(self.objectStoreName);
                    var myIndex = objectStore.index(indexKey);
                    var myCursor = myIndex.openCursor(null, "next");
                    myCursor.addEventListener("success", function (e) {
                        var cursor = e.target.result;
                        if (cursor) {
                            if (cursor.value[prop] === where) {
                                callback(function () {
                                    arrayParam.push(cursor.value);
                                });
                            }
                            cursor.continue();
                        } else {
                            //Do nothing
                        }
                    });
                    myCursor.addEventListener("error", function () {
                        var error = {
                            code: 3113,
                            message: "An error occurred using index of " + +indexKey + "."
                        };
                        self.showError(error);
                    });
                }
            },
            remove: function (arrayParam, indexKey, prop, where, id, callback) {
                console.log(id);
                var parent = this;
                var myTransaction = self.db.transaction(["bisonLogs"], "readwrite");
                var objectStore = myTransaction.objectStore(self.objectStoreName);
                myTransaction.addEventListener("complete", function () {
                    console.log("Deleted successfuly");
                    parent.getAllOfWhere(arrayParam, indexKey, prop, where, callback);
                });
                var myRequest = objectStore.delete(id);
            },
            deleteDatabase: function () {
                var deleteDB = indexedDB.deleteDatabase(self.databaseName);
                deleteDB.addEventListener("success", function () {
                    self.showError({code: 0, message: "Deleted successfully"}, self.databaseName);
                })
            },
            getIndexKeys: function () {
                return [
                    "id", "Type", "Customer", "Location", "Conduit",
                    "Length", "DrillPipe", "Date"
                ]
            }
        }
    }];

    this.setDatabaseName = function (name) {
        self.databaseName = name;
    };
    this.setDatabaseVersion = function (version) {
        self.databaseVersion = version;
    };
    this.setObjectStoreName = function (name) {
        self.objectStoreName = name;
    };
    self.showError = function (error, title) {
        var errorPopup = $ionicPopup.alert({
            title: title || "Database error",
            template: "<pre>" + error.code + "</br>" + error.message + "</pre>"
        }).then(function (res) {
        });
    };
});
angular.module("bisonInc").factory("bisonLocateFactory", [function () {
    return {
        format: function (feet, inches, crossing) {
            if (crossing) {
                return feet + "\' " + inches + "\" " + crossing;
            }
            return feet + "\' " + inches + "\"";
        },
        add: function (locate, locatesArray) {
            locatesArray.push(locate);
            return locatesArray;
        },
        move: function (locatesArray, fromIndex, toIndex) {
            console.log("move() called");
            locatesArray.splice(toIndex, 0, locatesArray.splice(fromIndex, 1)[0]);
        },
        remove: function (locatesArray, index) {
            console.log("remove() called");
            locatesArray.splice(index, 1);
        },
        change: function (locatesArray, index, newValue) {
            console.log("change() called");
            locatesArray[index] = newValue;
        },
        update: function (locatesArray, value, fromIndex, toIndex) {
            if (value && (fromIndex || fromIndex === 0) && (toIndex || toIndex === 0)) {
                console.log("Moving the locate " + value + " at " + fromIndex + " to " + toIndex);
                this.move(locatesArray, fromIndex, toIndex);
            }
            if (value && (fromIndex || fromIndex === 0) && (!toIndex && toIndex !== 0)) {
                console.log("Changing locate at index " + fromIndex + " to " + value);
                this.change(locatesArray, fromIndex, value);
            }
            if (!value && (fromIndex || fromIndex === 0) && (!toIndex && toIndex !== 0)) {
                console.log("Deleting value at " + fromIndex + " from locates");
                this.remove(locatesArray, fromIndex);
            }
        }
    }
}]);
angular.module("bisonInc")
    .service("bisonPDFService", ["bisonService", "BisonPDFValues",
        "BisonPDFLogoDataURLJPEG", "BisonPDFLogoDataURLPNG", "$q", "$cordovaToast",
        function (bisonService, BisonPDFValues, BisonPDFLogoDataURLJPEG,
                  BisonPDFLogoDataURLPNG, $q, $cordovaToast) {
            var self = this;
            var output;
            var bisonPDF = {};
            var boreLogToConvert = {};

            /*Page layout properties*/
            /**
             * @type {number} Position from top
             */
            var Y = 15;
            /**
             * @type {number} Amount to move down for new line
             */
            var NEXT_Y = 5;
            /**
             * @type {number} Initial position from left
             */
            var X = 15;

            /**
             * If this isn't done, consecutive PDFs will
             * begin where the last PDF values left off
             */
            var resetXY = function () {
                Y = 15;
                X = 15;
            };

            /*Getter*/
            var getBoreLogToConvert = function () {
                return boreLogToConvert;
            };

            /**
             * Move to the next line,
             * Start a new column,
             * or Begin a new page
             */
            var nextLine = function () {
                if (Y === 285 && X === 15) {
                    nextColumn();
                } else if (Y === 285 && X > 15) {
                    bisonPDF.addPage();
                    resetXY();
                } else {
                    Y += NEXT_Y;
                }
            };

            /**
             * Start a new "column" Testing
             */
            var nextColumn = function () {
                Y = 65;
                X = 110;
            };


            /*Generic promise factory*/
            function getPromise(asyncTask, param) {
                var q = $q.defer();
                asyncTask(q, param);
                return q.promise;
            }

            /**
             * Handles order of code execution
             */
            var createPDF = function (promise) {
                getPromise(init)
                    .then(function (result) {
                        getPromise(writePDFHeader, result);
                    }).then(function (result) {
                        getPromise(addImage);
                    }).then(function (result) {
                        drawSecondLine();
                        getPromise(writeLocates);
                    }).then(function (result) {
                        savePDF(promise);
                    }).catch(function (error) {
                        console.log("Error: " + error);
                        $cordovaToast.show("An error occurred creating the PDF: "
                            + error, "long", "bottom");
                    });
            };

            /*Setter*/
            var setBoreLogToConvert = function () {
                boreLogToConvert = bisonService.getActiveLog();
            };

            /*Called first from self.getPDF()*/
            var init = function (q) {
                bisonPDF = new jsPDF();
                setBoreLogToConvert();
                output = getBoreLogToConvert()["id"] + ".pdf";
                q.resolve("Creating your document");
            };

            /**
             * Writing the Header text
             */
            var writePDFHeader = function (q) {
                /*Write the Header*/
                bisonPDF.setTextColor(255, 0, 0);
                bisonPDF.setFont(BisonPDFValues.FONT.TIMES);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.TITLE);

                /*Write the subtitle*/
                nextLine();
                bisonPDF.setTextColor(100);
                bisonPDF.text(X, Y + 1, BisonPDFValues.TEXT.SUBTITLE);
                bisonPDF.setTextColor(0);

                /*Draw a blue line to separate header*/
                //bisonPDF.setDrawColor(0,0,255);
                //bisonPDF.setLineWidth(0.5);
                //bisonPDF.line(X,Y+3,155,Y+3);

                /*Buffer space*/
                nextLine();

                /*Customer*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.CUSTOMER);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["customer"]);
                bisonPDF.setTextColor(0);

                /*Conduit*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.CONDUIT);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["conduit"]);
                bisonPDF.setTextColor(0);

                /*Location*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.LOCATION);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["location"]);
                bisonPDF.setTextColor(0);

                /*Length of bore*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.LENGTH_OF_BORE);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["length"]
                + BisonPDFValues.PUNC.SPACE + BisonPDFValues.TEXT.LINEAR_FEET);
                bisonPDF.setTextColor(0);

                /*Drill pipe length*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.DRILL_PIPE_LENGTH);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["drillPipe"]
                + BisonPDFValues.PUNC.SPACE + BisonPDFValues.TEXT.FEET);
                bisonPDF.setTextColor(0);

                /*Date*/
                nextLine();
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.BOLD);
                bisonPDF.text(X, Y, BisonPDFValues.TEXT.DATE);
                bisonPDF.setFontType(BisonPDFValues.FONT_TYPE.NORMAL);
                bisonPDF.setTextColor(100);
                bisonPDF.text(X + 45, Y, BisonPDFValues.PUNC.SPACE + boreLogToConvert["date"]);
                bisonPDF.setTextColor(0);
                nextLine();
                /*Header ends by adding a new line buffer*/
                q.resolve("Header done");
            };

            /**
             * Add the Bison Logo to the PDF
             */
            var addImage = function (q) {
                if(window.chrome) {
                    /*BisonPDFLogoData is a Data URL per the jsPDF instructions*/
                    bisonPDF.addImage(BisonPDFLogoDataURLJPEG, "JPEG", 160, 5, 40, 50, "bison");
                    bisonPDF.addImage("bison", 160, 5, 40, 50);
                }
                q.resolve("Image added");
            };

            /**
             * Draw the separator line to divide the header from locates
             */
            var drawSecondLine = function () {
                nextLine();
                //bisonPDF.setDrawColor(255,0,0);
                //bisonPDF.line(X,Y,200,Y);
            };

            /**
             * Writing the Locates involves the potential
             * for outgrowing the current page, but nextLine()
             * handles checking for that
             */
            var writeLocates = function (q) {
                var counter = 1;
                boreLogToConvert["locates"].forEach(function (locate) {
                    if (counter < 10) {
                        bisonPDF.text(X, Y, BisonPDFValues.TEXT.LOCATE
                        + BisonPDFValues.PUNC.SPACE
                        + counter + BisonPDFValues.PUNC.COLON
                        + BisonPDFValues.PUNC.SPACE
                        + BisonPDFValues.PUNC.SPACE
                        + BisonPDFValues.PUNC.SPACE + locate);
                    } else {
                        bisonPDF.text(X, Y, BisonPDFValues.TEXT.LOCATE
                        + BisonPDFValues.PUNC.SPACE
                        + counter + BisonPDFValues.PUNC.COLON
                        + BisonPDFValues.PUNC.SPACE
                        + BisonPDFValues.PUNC.SPACE + locate);
                    }
                    counter++;
                    nextLine();
                });
                q.resolve("Locates written");
            };


            /**
             * Everything here is just experimental
             * @type {Promise}
             */
            /*Clean-up*/
            var cleanup = function () {
                resetXY();
                bisonPDF = new Object(undefined);
                boreLogToConvert = new Object(undefined);
            };

            /**
             * LAST The save() function is called LAST
             * The variable output is the item returned from getPDF()
             */
            var savePDF = function (promise) {
                if (promise) {
                    /*Save using the PDF buffer*/
                    promise.resolve(bisonPDF.output());
                    cleanup();
                } else {
                    /*Saves the doc using data-uri*/
                    bisonPDF.save(output);
                    cleanup();
                }
            };

            /**
             * This should be the ONLY method necessary to "get"
             * a PDF into the controller/download button
             */
            self.getPDF = function (promise) {
                if (promise) {
                    createPDF(promise);
                } else {
                    createPDF();
                }
            };

        }]);
angular.module("bisonInc").service("bisonQ", ["$q", function ($q) {

    return {
        getPromise: function (asyncTask) {
            var q = $q.defer();
            asyncTask(q);
            return q.promise;
        }
    }

}]);
angular.module("bisonInc").service("bisonService", [function () {
    var self = this;
    self.setType = function (type) {
        self.type = type;
    };
    self.getType = function () {
        return self.type;
    };
    self.setActiveLog = function (activeLog) {
        self.activeLog = activeLog;
    };
    self.getActiveLog = function () {
        if (self.activeLog) {
            return self.activeLog;
        } else {
            return {
                type: "",
                customer: "",
                conduit: "",
                location: "",
                length: "",
                drillPipe:""
            }
        }
    };
    self.setID = function (id) {
        self.activeLog["id"] = id;
    };
    self.setMonthDate = function (monthDate) {
        self.activeLog["monthDate"] = monthDate;
    };
    self.setYear = function (year) {
        self.activeLog["year"] = year;
    };
    self.finalize = function(id, monthDate, year) {
        self.setID(id);
        self.setMonthDate(monthDate);
        self.setYear(year);
    };
    self.getActiveDateObject = function () {
        return self.activeLog["date"];
    };
    self.getActiveLocates = function () {
        return self.activeLog["locates"];
    };
}]);
angular.module("bisonInc")
    .value("BisonPDFValues", {
        FONT: {
            COURIER: "courier",
            TIMES: "times"
        },
        FONT_TYPE: {
            NORMAL: "normal",
            BOLD: "bold"
        },
        TEXT: {
            BEGIN_BORE: "Begin bore",
            END_BORE: "End bore",
            LINEAR_FEET: "LF",
            FEET: "FT",
            TITLE: "Bison, Inc.",
            SUBTITLE: "Bore Data Sheet",
            CUSTOMER: "Customer",
            CONDUIT: "Conduit",
            LOCATION: "Location",
            LENGTH_OF_BORE: "Length of bore",
            DATE: "Date",
            DRILL_PIPE_LENGTH: "Drill pipe length",
            LOCATE: "Locate"
        },
        PUNC: {
            COLON: ":",
            DASH: "-",
            COMMA: ",",
            SPACE: " "
        },
        IMG: {
            BUFFALO_SMOKE: ""
        }
    })

    .value("BisonPDFLogoDataURLPNG", "data:image/png;base64,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")
    .value("BisonPDFLogoDataURLJPEG", "data:image/jpeg;base64,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")
    .value("BisonPDFSettings", {
        X: 15,
        Y: 15,
        NEXT_Y: 5,
        RESET_XY: function () {
            this.X = 15;
            this.Y = 15;
        },
        NEXT_LINE: function (PDF) {
            if(this.Y === 285 && this.X === 15) {
                this.NEXT_COLUMN();
            } else if ( this.Y === 285 && this.X > 15 ) {
                PDF.addPage();
                this.RESET_XY();
            } else {
                this.Y += this.NEXT_Y;
            }
        },
        NEXT_COLUMN: function () {
            this.Y = 65;
            this.X = 110;
        },
        CLEAN_UP: function (PDF, LOG) {
            this.RESET_XY();
            PDF = {};
            LOG = {};
        }
    });
angular.module('bisonInc', ["ionic", "ui.router", "ngCordova"])

    .run(function ($ionicPlatform, $state) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        $state.go("home");
    })

    .config(["$stateProvider","$urlRouterProvider","bisonIndexedDBProvider","$compileProvider",
        "bisonHTMLFiles",
        function ($stateProvider, $urlRouterProvider, bisonIndexedDBProvider,
                      $compileProvider, bisonHTMLFiles) {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: bisonHTMLFiles.home,
                controller: "OptionsController"
            })
            .state("new-bore-log", {
                url: "/new-bore-log",
                templateUrl: bisonHTMLFiles.newBoreLogState,
                controller: "NewBoreLogController"
            })
            .state("continue", {
                url: "/continue",
                templateUrl: bisonHTMLFiles.continueState,
                controller: "ContinueController"
            })
            .state("resume", {
                url: "/resume/:id",
                templateUrl: bisonHTMLFiles.newBoreLogState,
                controller: "NewBoreLogController"
            })
            .state("settings", {
                url:"/settings",
                templateUrl:bisonHTMLFiles.settingsState,
                controller: "SettingsController"
            })
            .state("bison-files", {
                url:"/files",
                templateUrl:bisonHTMLFiles.bisonFiles,
                controller: "FilesController"
            });

        $urlRouterProvider.otherwise("/");

        bisonIndexedDBProvider.setDatabaseName("bison");
        bisonIndexedDBProvider.setDatabaseVersion(1);
        bisonIndexedDBProvider.setObjectStoreName("bisonLogs");

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|blob|chrome-extension|filesystem:chrome-extension):/);
    }]);