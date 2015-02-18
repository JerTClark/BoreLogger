// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
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

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "options.html",
                controller: "OptionsController"
            })
            .state("new-bore-log", {
                url:"/new-bore-log",
                templateUrl: "new-bore-log.html",
                controller: "NewBoreLogController"
            });
        $urlRouterProvider.otherwise("/");
    })

    .service("bisonService", function () {
        var self = this;
        self.setType = function(type){
            self.type = type;
        };
        self.getType = function () {
            return self.type;
        };
        self.setActiveLog = function (activeLog) {
            self.activeLog = activeLog;
        };
        self.getActiveLog = function () {
            if(self.activeLog){
                return self.activeLog;
            } else {
                return {
                    type: "",
                    customer: "",
                    conduit: "",
                    location: "",
                    length: "",
                    date: "",
                    locates: []
                }
            }
        }
    });