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
            });

        $urlRouterProvider.otherwise("/");

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|blob|chrome-extension|filesystem:chrome-extension):/);
    }]);