angular.module("bisonInc").controller('NewBoreLogController',
    ["$scope", "$timeout", "bisonService", "bisonIndexedDB",
        "bisonDateService", "bisonLocateFactory", "boreLogModelService",
        "$stateParams",
        function ($scope, $timeout, bisonService, bisonIndexedDB,
                  bisonDateService, bisonLocateFactory, boreLogModelService, $stateParams) {

            /**
             * Track if the log has been added to IndexedDB once
             * @type {boolean}
             */
            var hasBeenCreated = false;

            //-- Categories of information pertaining to a bore log and bore journal
            $scope.boreLogModel = boreLogModelService.getModel();

            /**
             * Checks for $stateParams
             */
            $scope.init = function () {
                //TODO Move this and the $stateParams dependency to a new controller
                if($stateParams) {
                    console.log($stateParams);
                    bisonService.setActiveLog($stateParams);
                    bisonService.getActiveLog()["dateObj"] = bisonDateService.parseDate(new Date().format("M d Y H m s"));
                    console.log(bisonService.getActiveLog());
                    hasBeenCreated = true;
                    $scope.boreLogModel[0]["value"] = bisonService.getActiveLog()["customer"];
                    $scope.boreLogModel[0]["value"] = bisonService.getActiveLog()["customer"];
                    $scope.boreLogModel[0]["value"] = bisonService.getActiveLog()["customer"];
                    $scope.boreLogModel[0]["value"] = bisonService.getActiveLog()["customer"];
                    $scope.boreLogModel[0]["value"] = bisonService.getActiveLog()["customer"];
                }
            };

            /**
             * Give focus to the first input
             * (always will be the customer-input)
             * TODO find a more dynamic way to do this
             */
            $scope.focusFirstInput = function () {
                $timeout(function () {
                    angular.element("#0-input").focus();
                }, 500);
            };

            /**
             * The "Edit Locates" button will shown once this is true
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
            //Default to "10", the most commonly used drillPipeLength
            $scope.drillPipeLength = "10";
            $scope.$watchCollection("drillPipeBoolean", function (newValue, oldValue) {
                //Set drillPipeLength to "15" when true (toggled)
                if ($scope.drillPipeBoolean["value"] === true) {
                    $scope.drillPipeLength = "15";
                    angular.element("#drillPipeCategoryHeader").addClass("hide");
                } else {
                    //Set drillPipeLength to "10" when false (un-toggled)
                    $scope.drillPipeLength = "10";
                }
            });

            /**
             * Fired by the "Cancel" button
             * The element is part of the bisonFormButtonPanel directive
             * and this function is a parent scope function set via
             * its &bisonOnCancel attribute
             */
            $scope.onCancel = function () {
                //Reset boolean to false
                hasBeenCreated = false;
                //Nav back
                history.back();
            };

            //TODO Consolidate all of these that do the same thing in different ways
            //-- Serves as parent scope function to bisonFormButtonPanel
            $scope.logOrJournal = function () {
                return bisonService.getType();
            };
            //-- Used for binding the view to model data
            $scope.typeHeader = bisonService.getType();
            //-- A boolean used by ngShow
            $scope.isALog = bisonService.getType() === "log";

            //TODO Delete mock data
            //Mock data
            var testArray = [
                "1\' 1\"",
                "2\' 2\"",
                "3\' 3\" Water @ 3\' Top",
                "4\' 4\"",
                "5\' 5\""
            ];

            //TODO reset locate to []-- Using test data for development
            //-- On submission of General Info
            $scope.submitGeneralInfo = function () {
                /**
                 * If (in the lifecycle of the current state view)
                 * an "active log" has not been created,
                 * 1) Create one,
                 * 2) Set it as bisonService's activeLog, and
                 * 3) Add it to IndexedDB via bisonIndexedDB service
                 */
                if (!hasBeenCreated) {
                    /**
                     * Set bisonService.activeLog
                     * @type {Object} Represents the current log with which
                     * the user is currently interacting
                     *
                     * Note: Some properties of the activeLog depend on
                     * others being set first and are given temporary values
                     */
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
                        locates: testArray
                    });
                    //Set bison
                    bisonService.setID(bisonID());//Depends on other properties being set first
                    bisonService.setMonthDate(bisonDateService.dateRecord.month + bisonDateService.dateRecord.date);
                    bisonService.setYear(bisonDateService.dateRecord.year);
                    /**
                     * Add bisonService.activeLog to IndexedDB
                     * via bisonIndexedDB service
                     */
                    bisonIndexedDB.add(bisonService.getActiveLog());// Add to database
                    /**
                     * @type {boolean} will be reset if the user goes
                     * back in the nav stack
                     */
                    hasBeenCreated = true;
                    //TODO delete debug console.Log()'s
                    console.log(JSON.stringify(bisonService.getActiveLog()));//TODO Remove testing logs
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
                //Reset the input elements
                angular.element("#feet").val("");
                angular.element("#inches").val("");
                //Format the locate
                var locate = bisonLocateFactory.format(feet, inches, crossing);
                //Add the locate to the active log
                bisonLocateFactory.add(locate, bisonService.getActiveLog()["locates"]);
                //Update the numberOfLocates
                $scope.numberOfLocates = bisonService.getActiveLog()["locates"].length;
                //-- Update the database object
                bisonIndexedDB.add(bisonService.getActiveLog());
                //TODO delete debug console.Log()'s
                console.log(bisonService.getActiveLog()["locates"]);
            };

            /**
             * Set value bisonService.activeLog["dateObj"]
             * @returns {Object} dateObj
             */
            var bisonDate = function () {
                //Determine @dateToParse by bisonService.activeLog["type"]
                var dateToParse = bisonService.getType() === "journal" ?
                    new Date().format("M d Y H m s") :
                    new Date($scope.boreLogModel[4].value)
                        .format("M d Y H m s");
                //Return the dateObj
                return bisonDateService.parseDate(dateToParse);
            };

            /**
             * Set value of bisonService.activeLog["date"]
             * @returns {String}
             */
            var searchableDate = function () {
                return bisonService.getType() === "journal" ?
                    new Date().format("M d Y") :
                    new Date($scope.boreLogModel[4].value)
                        .format("M d Y");
            };

            /**
             * Set the value of bisonService.activeLog["id"]
             * @returns {string}
             */
            var bisonID = function () {
                var id = $scope.boreLogModel[0].value + $scope.boreLogModel[2].value + bisonDateService.dateRecord.bisonDateToFileFormat();
                return id.replace(/\s/g, "");
            };

            /**
             * Used by bisonFormButtonPanel directive attribute @bisonModalValues
             * @returns {{title: *, value: *}[]}
             */
            $scope.getModalValues = function () {
                return [
                    {title: $scope.boreLogModel[0].title, value: $scope.boreLogModel[0].value},
                    {title: $scope.boreLogModel[1].title, value: $scope.boreLogModel[1].value},
                    {title: $scope.boreLogModel[2].title, value: $scope.boreLogModel[2].value},
                    {title: $scope.boreLogModel[3].title, value: $scope.boreLogModel[3].value},
                    {title: $scope.boreLogModel[4].title, value: $scope.boreLogModel[4].value}
                ]
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
                //TODO delete debug console.Log()'s
                console.log(bisonService.getActiveLog()["locates"].toString());
                //Update IndexedDB via bisonIndexedDB service
                bisonIndexedDB.add(bisonService.getActiveLog());
            };

            //-- UI effects

            /**
             * Compensate for Ionic Framework's editable list
             * that shifts the position of items off the screen
             * when showing the ionReorderButton
             */
            $scope.toggleLeft = function () {
                //TODO not the perfect solution, but enough to keep it on screen
                angular.element(".bison-list-item").toggleClass("bison-reorder-list-item").toggleClass("bison-add-pad-left");
            };

            /**
             * Show the descriptions of each category via slideToggle()
             * @param $event {Object} Used to get the $event.target DOM elem
             * to wrap in angular.element()
             */
            $scope.showDescription = function ($event) {
                angular.element($event.target).toggleClass('activated');
                angular.element($event.target).siblings('p').slideToggle(200);
            };

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