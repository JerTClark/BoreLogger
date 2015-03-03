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
                        bisonService.setType("log");
                        $state.go('new-bore-log');
                        break;
                    case 1:
                        bisonService.setType("log");
                        $state.go("continue");
                        break;
                    case 2:
                        bisonService.setType("journal");
                        $state.go('new-bore-log');
                        break;
                    case 3:
                        bisonService.setType("journal");
                        $state.go("continue");
                        break;
                    case 4:
                        //TODO experimental
                        bisonService.setType("convertToLog");
                        $state.go("continue");
                        break;
                    case 5:
                        //TODO experimental
                        bisonService.setType("convertToPDF");
                        $state.go("continue");
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