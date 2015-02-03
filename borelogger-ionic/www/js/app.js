// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('bisonInc', ['ionic'])

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
        $state.go('borelogger.options');
    })

    .config(function ($stateProvider) {
        $stateProvider
            .state('borelogger', {
                url: '/borelogger',
                abstract: true,
                templateUrl: 'borelogger.html'
            })
            .state('borelogger.options', {
                url: '/options',
                views: {
                    'options': {
                        templateUrl: 'options.html',
                        controller: 'OptionsController'
                    }
                }
            })
            .state('borelogger.new-bore-log', {
                url:'/new-bore-log',
                views: {
                    'new-bore-log': {
                        templateUrl:'new-bore-log.html',
                        controller:'NewBoreLogController'
                    }
                }
            });
    })

    .controller('OptionsController', function ($scope, $timeout, $state) {

        $scope.myLogger = function (data) {
            console.log(data + " clicked");
        };

        //-- Categories of information pertaining to a bore journal
        $scope.boreJournalModel = [
            {title: "Customer", hint: "Who the job was for", value: "", type: "text"},
            {title: "Location", hint: "Location of the job", value: "", type: "text"}
        ];

        $scope.optionCategories = [
            {
                title: "Bore Log", description: "Record a completed bore",
                buttons: [
                    {name: "Create", func: "newBoreLog()", code: 0},
                    {name: "Continue", func: "", code: 1}
                ],
                class:''
            },
            {
                title: "Bore Journal",
                description: "Record an ongoing bore",
                buttons: [
                    {name: "Create", func: "", code: 2},
                    {name: "Continue", func: "", code: 3},
                    {name: "Convert", func: "", code: 4}
                ],
                class:''
            },
            {
                title: "Create PDF", description: "A billable report",
                buttons: [
                    {name: "Create", func: "", code: 5}
                ],
                class:''
            },
            {
                title: "Browse Files", description: "Choose from the file types below",
                buttons: [
                    {name: "Logs", func: "", code: 6},
                    {name: "Journals", func: "", code: 7},
                    {name: "PDFs", func: "", code: 8}
                ],
                class: 'hide'
            }
        ];

        //-- Detect button press from options
        $scope.options = function (button) {
            switch (button.code) {
                case 0:
                    $state.go('borelogger.new-bore-log');
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
            $timeout(function() {
                elem.removeClass('emphasis');
            }, 2000)
        };

    })

    .controller('NewBoreLogController', function ($scope, $timeout, $ionicModal) {

        $scope.myLogger = function (data) {
            console.log(data + " clicked");
        };

        //-- Categories of information pertaining to a bore log
        $scope.boreLogModel = [
            {title: "Customer", hint: "Who the job was for", value: "", type: "text"},
            {title: "Conduit", hint: "(No.) Size Type", value: "", type: "text"},
            {title: "Location", hint: "Location of the job", value: "", type: "text"},
            {title: "Length of bore", hint: "Linear feet (Drill pipe length)", value: "", type: "text"},
            {title: "Date", hint: "Select a date", value: "", type: "date"}
        ];

        $scope.showDescription = function ($event) {
            angular.element($event.target).toggleClass('activated');
            angular.element($event.target).siblings('p').slideToggle(200);
        };

        $scope.activate = function ($event, button) {
            var elem = angular.element($event.target);
            elem.addClass('emphasis');
            //$scope.options(button);
            //Remove this (below)
            $timeout(function () {
                elem.removeClass('emphasis');
            }, 2000)
        };

        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function () {
            $scope.modal.title = "Bore log";
            $scope.modal.description = "A summary of the new bore log so far...";
            $scope.modal.values = [
                {title: $scope.boreLogModel[0].title, value: $scope.boreLogModel[0].value},
                {title: $scope.boreLogModel[1].title, value: $scope.boreLogModel[1].value},
                {title: $scope.boreLogModel[2].title, value: $scope.boreLogModel[2].value},
                {title: $scope.boreLogModel[3].title, value: $scope.boreLogModel[3].value},
                {title: $scope.boreLogModel[4].title, value: $scope.boreLogModel[4].value}
            ];
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


    });