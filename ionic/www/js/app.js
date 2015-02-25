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
                url: "/new-bore-log",
                templateUrl: "new-bore-log.html",
                controller: "NewBoreLogController"
            });
        $urlRouterProvider.otherwise("/");
    })

    .service("bisonService", function () {
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
                    date: "",
                    locates: []
                }
            }
        }
    })
    .factory("bisonLocateFactory", function () {
        return {
            format: function (feet, inches, crossing) {
                if (crossing) {
                    return feet + "\' " + inches + "\" " + crossing;
                }
                return feet + "\' " + inches + "\"";
            },
            add: function (locate, locatesArray) {
                locatesArray[locatesArray.length] = locate;
            },
            move: function (locatesArray, fromIndex, toIndex) {
                if (toIndex >= locatesArray.length) {
                    var i = toIndex - locatesArray.length;
                    while((i--) + 1) {
                        locatesArray.push(undefined);
                    }
                } else {
                    locatesArray.splice(toIndex, 0, locatesArray.splice(fromIndex, 1)[0]);
                }
            },
            remove: function (locatesArray, index) {
                locatesArray.splice(index, 1);
            },
            change: function (locatesArray, oldValue, newValue) {
                locatesArray[locatesArray.indexOf(oldValue)] = newValue;
            }
        }
    });