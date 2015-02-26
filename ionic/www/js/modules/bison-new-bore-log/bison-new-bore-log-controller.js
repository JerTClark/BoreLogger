angular.module("bisonInc").controller('NewBoreLogController',
    ["$scope", "$timeout", "bisonService", "bisonIndexedDB", "bisonDateService",
        function ($scope, $timeout, bisonService, bisonIndexedDB, bisonDateService) {

            //-- For accessing whether a log or journal
            $scope.logOrJournal = function () {
                return bisonService.getType();
            };

            $scope.typeHeader = bisonService.getType();

            //-- Categories of information pertaining to a bore log
            $scope.boreLogModel = [
                {
                    title: "Customer",
                    hint: "Who the job was for",
                    value: "",
                    inputType: "text",
                    inputName: "customer",
                    show: true,
                    required: true
                },
                {
                    title: "Conduit",
                    hint: "(No.) Size Type",
                    value: "",
                    inputType: "text",
                    inputName: "conduit",
                    show: bisonService.getType() === "log",
                    required: bisonService.getType() === "log"
                },
                {
                    title: "Location",
                    hint: "Location of the job",
                    value: "",
                    inputType: "text",
                    inputName: "location",
                    show: true,
                    required: true
                },
                {
                    title: "Length of bore",
                    hint: "Linear feet",
                    value: "",
                    inputType: "text",
                    inputName: "length",
                    show: bisonService.getType() === "log",
                    required: bisonService.getType() === "log"
                },
                {
                    title: "Date",
                    hint: "Start or end of job",
                    value: "",
                    inputType: "date",
                    inputName: "date",
                    show: bisonService.getType() === "log",
                    required: bisonService.getType() === "log"
                }
            ];

            //-- On submission of General Info
            $scope.submitGeneralInfo = function () {
                bisonService.setActiveLog({
                    id: bisonID(),
                    type: bisonService.getType(),
                    customer: $scope.boreLogModel[0].value,
                    conduit: $scope.boreLogModel[1].value,
                    location: $scope.boreLogModel[2].value,
                    length: $scope.boreLogModel[3].value,
                    drillPipe: $scope.drillPipeLength,
                    date: bisonDate(),
                    locates: []
                });
                //TODO add the log to indexDB for backend mocking
                console.log(JSON.stringify(bisonService.getActiveLog()));
            };

            //-- Record the date
            var bisonDate = function () {
                var dateToParse =
                    bisonService.getType() === "journal" ?
                        new Date().format("M d Y H m s") :
                        new Date($scope.boreLogModel[4].value)
                            .format("M d Y H m s");
                return bisonDateService.parseDate(dateToParse);
            };

            //UI effects
            $scope.showDescription = function ($event) {
                angular.element($event.target).toggleClass('activated');
                angular.element($event.target).siblings('p').slideToggle(200);
            };
            $scope.activate = function ($event, button) {
                var elem = angular.element($event.target);
                elem.addClass('emphasis');
                $timeout(function () {
                    elem.removeClass('emphasis');
                }, 2000)
            };

            //For the button panel directive
            $scope.getModalValues = function () {
                return [
                    {title: $scope.boreLogModel[0].title, value: $scope.boreLogModel[0].value},
                    {title: $scope.boreLogModel[1].title, value: $scope.boreLogModel[1].value},
                    {title: $scope.boreLogModel[2].title, value: $scope.boreLogModel[2].value},
                    {title: $scope.boreLogModel[3].title, value: $scope.boreLogModel[3].value},
                    {title: $scope.boreLogModel[4].title, value: $scope.boreLogModel[4].value}
                ]
            };

            $scope.recordLocate = function () {
                console.log("recordLocate() called");
            };

            $scope.initializeDB = function () {
                bisonIndexedDB.init();
            };

            //-- TODO TESTING
            // TODO To allow editing entries in a list mode
            $scope.showEditButton = bisonService.getActiveLog().locates.length > 0;
            // TODO Bind to toggle
            $scope.drillPipeLength = 0;
            // TODO Return a formatted id for each log
            var bisonID = function () {
                var id = "";
                //TODO create the id
                return id;
            };

        }]);