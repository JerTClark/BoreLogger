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

    .config(function ($stateProvider, $urlRouterProvider, bisonIndexedDBProvider, $compileProvider) {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "options.html",
                controller: "OptionsController"
            })
            .state("new-bore-log", {
                url: "/new-bore-log",
                templateUrl: "html/state/new-bore-log-state.html",
                controller: "NewBoreLogController"
            })
            .state("continue", {
                url: "/continue",
                templateUrl: "html/state/continue-state.html",
                controller: "ContinueController"
            })
            ///:type/:customer/:conduit/:location/:length/:drillPipe/:date/:monthDate/:year/:dateObj/:locates"
            .state("resume", {
                url: "/resume/:id",
                templateUrl: "html/state/new-bore-log-state.html",
                controller: "NewBoreLogController"
            })
            .state("settings", {
                url:"/settings",
                templateUrl:"html/state/settings-state.html",
                controller: "SettingsController"
            });
        $urlRouterProvider.otherwise("/");

        bisonIndexedDBProvider.setDatabaseName("bison");
        bisonIndexedDBProvider.setDatabaseVersion(1);
        bisonIndexedDBProvider.setObjectStoreName("bisonLogs");

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|blob|chrome-extension|filesystem:chrome-extension):/);
    });