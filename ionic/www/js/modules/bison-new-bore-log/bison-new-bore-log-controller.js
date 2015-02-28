angular.module("bisonInc").controller('NewBoreLogController',
    ["$scope", "$timeout", "bisonService", "bisonIndexedDB",
        "bisonDateService", "bisonLocateFactory", "boreLogModelService",
        function ($scope, $timeout, bisonService, bisonIndexedDB,
                  bisonDateService, bisonLocateFactory, boreLogModelService) {
            var hasBeenCreated = false;

            //-- Initialize the IndexedDB (called via ngInit)
            $scope.initializeDB = function () {
                bisonIndexedDB.init();
            };

            //-- For accessing whether a log or journal
            $scope.logOrJournal = function () {
                return bisonService.getType();
            };
            $scope.typeHeader = bisonService.getType();
            $scope.isALog = bisonService.getType() === "log";

            //-- Categories of information pertaining to a bore log
            $scope.boreLogModel = boreLogModelService.getModel();

            //-- On submission of General Info
            $scope.submitGeneralInfo = function () {
                if (!hasBeenCreated) {
                    bisonService.setActiveLog({
                        id: "unset",
                        type: bisonService.getType(),
                        customer: $scope.boreLogModel[0].value,
                        conduit: $scope.boreLogModel[1].value,
                        location: $scope.boreLogModel[2].value,
                        length: $scope.boreLogModel[3].value,
                        drillPipe: $scope.drillPipeLength,
                        date: searchableDate(),
                        monthDate: "unset",
                        year: "unset",
                        dateObj: bisonDate(),
                        locates: []
                    });
                    bisonService.setID(bisonID());//Depends on other properties being set first
                    bisonService.setMonthDate(bisonDateService.dateRecord.month + bisonDateService.dateRecord.date);
                    bisonService.setYear(bisonDateService.dateRecord.year);

                    hasBeenCreated = true;
                    bisonIndexedDB.add(bisonService.getActiveLog());// Add to database
                    console.log(JSON.stringify(bisonService.getActiveLog()));//TODO Remove testing logs
                }
            };

            //-- Format and record user input of locates
            $scope.recordLocate = function (crossingParam) {
                var feet = angular.element("#feet").val();
                var inches = angular.element("#inches").val();
                var crossing = crossingParam;
                angular.element("#feet").val("");
                angular.element("#inches").val("");
                var locate = bisonLocateFactory.format(feet, inches, crossing);
                bisonLocateFactory.add(locate, bisonService.getActiveLog()["locates"]);
                $scope.numberOfLocates = bisonService.getActiveLog()["locates"].length;

                //TODO delete console log
                console.log(bisonService.getActiveLog()["locates"]);
                bisonIndexedDB.add(bisonService.getActiveLog());
            };

            //-- Record the date
            var bisonDate = function () {
                var dateToParse = bisonService.getType() === "journal" ?
                    new Date().format("M d Y H m s") :
                    new Date($scope.boreLogModel[4].value)
                        .format("M d Y H m s");
                return bisonDateService.parseDate(dateToParse);
            };

            var searchableDate = function () {
                return bisonService.getType() === "journal" ?
                    new Date().format("M d Y") :
                    new Date($scope.boreLogModel[4].value)
                        .format("M d Y");
            };

            //-- Create a unique id for each record
            var bisonID = function () {
                var id = $scope.boreLogModel[0].value + $scope.boreLogModel[2].value + bisonDateService.dateRecord.bisonDateToFileFormat();
                return id.replace(/\s/g, "");
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
            var testArray = [
                "1\' 1\"",
                "2\' 2\"",
                "3\' 3\" Water @ 3\' Top",
                "4\' 4\"",
                "5\' 5\""
            ];
            $scope.getLocates = function () {
                // Using mock data for development
                return testArray;
                //return bisonService.getActiveLog()["locates"];
            };
            $scope.updateLocate = function (value, fromIndex, toIndex) {
                console.log("updateLocate() called: " + value + " " + fromIndex + " " + toIndex);
                if (value && (fromIndex || fromIndex === 0) && (toIndex || toIndex === 0)) {
                    console.log("Moving the locate " + value + " at " + fromIndex + " to " + toIndex);
                    //bisonLocateFactory.move(bisonService.getActiveLog["locates"], fromIndex, toIndex);
                    //bisonLocateFactory.move(testArray, fromIndex, toIndex);
                    testArray.splice(toIndex, 0, testArray.splice(fromIndex, 1)[0]);
                }
                if (value && (fromIndex || fromIndex === 0) && (!toIndex && toIndex !== 0)) {
                    console.log("Changing locate at index " + fromIndex + " to " + value);
                    //bisonLocateFactory.change(bisonService.getActiveLog()["locates"],fromIndex, value);
                    //bisonLocateFactory.change(testArray,fromIndex, value);
                    testArray[fromIndex] = value;
                }
                if (!value && (fromIndex || fromIndex === 0) && (!toIndex && toIndex !== 0)) {
                    console.log("Deleting value at " + fromIndex + " from locates");
                    //bisonLocateFactory.remove(bisonService.getActiveLog()["locates"], fromIndex);
                    //bisonLocateFactory.remove(testArray, fromIndex);
                    testArray.splice(fromIndex, 1);
                }
                console.log(testArray.toString());
            };

            // UI effects
            $scope.toggleLeft = function () {
                //console.log("toggleLeftMargin() called");
                angular.element(".bison-list-item").toggleClass("bison-reorder-list-item").toggleClass("bison-add-pad-left");
            };
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

            // To allow editing entries in a list mode once enough entries are entered
            $scope.showEditButton = false;
            $scope.$watchCollection("numberOfLocates", function (newValue, oldValue) {
                //console.log("Now: " + newValue + " Was: " + oldValue);
                if (newValue >= 1) $scope.showEditButton = true;
            });

            // Bind to toggle
            $scope.drillPipeBoolean = {value: false};
            $scope.drillPipeLength = "10";
            $scope.$watchCollection("drillPipeBoolean", function (newValue, oldValue) {
                if ($scope.drillPipeBoolean["value"] === true) {
                    $scope.drillPipeLength = "15";
                    angular.element("#drillPipeCategoryHeader").addClass("hide");
                } else {
                    $scope.drillPipeLength = "10";
                }
            });

            // Cancel log entry
            $scope.onCancel = function () {
                hasBeenCreated = false;
                //console.log("Has been created: " + hasBeenCreated);
                history.back();
            }
        }]);