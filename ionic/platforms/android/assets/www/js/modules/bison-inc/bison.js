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