angular.module("bisonInc").controller('NewBoreLogController',
    ["$scope", "$timeout", "bisonService", "bisonIndexedDB", "bisonDateService",
        "bisonLocateFactory", "boreLogModelService", "$stateParams", "$ionicPopup",
        function ($scope, $timeout, bisonService, bisonIndexedDB, bisonDateService,
                  bisonLocateFactory, boreLogModelService, $stateParams, $ionicPopup) {

            /**
             * Track if the log has been added to IndexedDB once
             * @type {boolean}
             */
            var hasBeenCreated = false;

            /**
             * Utility helper function for updating the IndexedDB
             * record after certain changes made to models
             */
            function updateActiveLog(property, value) {
                //Given the "id" property shouldn't change, this should always update, not add
                bisonService.getActiveLog()[property] = value;
                bisonIndexedDB.add(bisonService.getActiveLog());
            }

            //-- Categories of information pertaining to a bore log and bore journal
            $scope.boreLogModel = boreLogModelService.getModel();

            /**
             * Checks for $stateParams["id"] to determine if this is a
             * case of a "new" log or of one being "continued"
             */
            $scope.init = function () {
                /**
                 * If $stateParams has an actual parameter "id"
                 */
                if($stateParams["id"]) {
                    ////TODO delete debug console.Log()'s
                    console.log("$stateParams: " + $stateParams);
                    console.log("Active Log: " + bisonService.getActiveLog());

                    //Update the view
                    $scope.boreLogModel[0]["value"] = bisonService.getActiveLog()["customer"];
                    $scope.boreLogModel[1]["value"] = bisonService.getActiveLog()["conduit"];
                    $scope.boreLogModel[2]["value"] = bisonService.getActiveLog()["location"];
                    $scope.boreLogModel[3]["value"] = bisonService.getActiveLog()["length"];
                    $scope.boreLogModel[4]["value"] = new Date(bisonService.getActiveLog()["date"]);

                    $scope.numberOfLocates = bisonService.getActiveLog()["locates"].length;

                    $timeout(function () {
                        angular.element("#0-input").val(bisonService.getActiveLog()["customer"]);
                        angular.element("#1-input").val(bisonService.getActiveLog()["conduit"]);
                        angular.element("#2-input").val(bisonService.getActiveLog()["location"]);
                        angular.element("#3-input").val(bisonService.getActiveLog()["length"]);
                        //angular.element("#4-input").val(new Date(bisonService.getActiveLog()["dateObj"]["originalDate"]));
                    }, 500);
                    hasBeenCreated = true;//Keep this after "Update the view" as each assignment sets to false
                }
            };

            /**
             * Give focus to the first input
             * (always will be the customer-input)
             */
            $scope.focusFirstInput = function () {
                $timeout(function () {
                    angular.element("#0-input").focus();
                }, 500);
            };

            /**
             * The "Edit locates" button will shown once this is true
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
                //bisonService.getActiveLog()["drillPipe"] = $scope.drillPipeLength;
                //update();
                hasBeenCreated = false;
            });

            /**
             * Fired by the "Cancel" button
             * The element is part of the bisonFormButtonPanel directive
             * and this function is a parent scope function set via
             * its &bisonOnCancel attribute
             */
            $scope.onCancel = function () {
                //-- If there is a current Active Log, ask if they want to save it to DB
                if(bisonService.getActiveLog()["id"]) {
                    var popup = $ionicPopup.show({
                        scope: $scope,
                        template: 'Your progress will be saved in a private database on this device',
                        title: "Save changes?",
                        subTitle: "Would you like to save your changes?",
                        buttons: [
                            {
                                text: "Cancel",
                                type: "button-positive"
                            },
                            {
                                text: "Save",
                                type: "button-positive",
                                onTap: function () {
                                    /*In case it's a bore journal*/
                                    if(bisonService.getActiveLog()["customer"] !== $scope.boreLogModel[0].value) {
                                        bisonService.getActiveLog()["customer"] = $scope.boreLogModel[0].value;
                                    }
                                    if(bisonService.getActiveLog()["location"] !== $scope.boreLogModel[2].value) {
                                        bisonService.getActiveLog()["location"] = $scope.boreLogModel[2].value;
                                    }
                                    /*In case it's a bore log*/
                                    if(bisonService.getType() === "log") {
                                        if(bisonService.getActiveLog()["conduit"] = $scope.boreLogModel[1].value) {
                                            bisonService.getActiveLog()["conduit"] = $scope.boreLogModel[1].value;
                                        }
                                        if(bisonService.getActiveLog()["length"] !== $scope.boreLogModel[3].value) {
                                            bisonService.getActiveLog()["length"] = $scope.boreLogModel[3].value;
                                        }
                                        if(bisonService.getActiveLog()["drillPipe"] !== $scope.drillPipeLength) {
                                            bisonService.getActiveLog()["drillPipe"] = $scope.drillPipeLength;
                                        }
                                    }/*end if*/
                                    //TODO delete debug console.Log()'s
                                    console.log(bisonService.getActiveLog());
                                    bisonIndexedDB.add(bisonService.getActiveLog());
                                    $timeout(function () {
                                        history.back();
                                    }, 1000);
                                }
                            }
                        ]
                    });
                } else {
                    var noDataPopup = $ionicPopup.confirm({
                        title: "Confirm you want to quit",
                        template: "<p>Seems that you haven't actually <b>saved</b> any data yet." +
                        " This means there is no data to <b>Save</b> prior to quiting.</p>"
                    });
                    noDataPopup.then(function (res) {
                        if(res) {
                            history.back();
                        }
                    });
                }
            };

            /**
             * Filtering out what type of log is currently active
             */
            //-- Used for binding the view to model data
            $scope.typeHeader = bisonService.getType();
            //-- A boolean used by ngShow
            $scope.isALog = bisonService.getType() === "log";

            //-- On submission of General Info
            $scope.submitGeneralInfo = function (overwrite) {
                /**
                 * If (in the lifecycle of the current state view)
                 * an "active log" has not been created,
                 * 1) Create one,
                 * 2) Set it as bisonService's activeLog,
                 * 3) Set its initial values (ONLY IF BRAND NEW), and
                 * 4) Add it to IndexedDB via bisonIndexedDB service
                 */
                if (!bisonService.getActiveLog().hasOwnProperty("id")) {
                    console.log(bisonService.getType());
                    /**
                     * Set bisonService.activeLog
                     * @type {Object} Represents the current log with which
                     * the user is currently interacting
                     *
                     * Note: Some properties of the activeLog depend on
                     * others being set first and are given temporary values
                     */
                    bisonService.setActiveLog({
                        type: bisonService.getType(),
                        customer: $scope.boreLogModel[0].value,
                        conduit: $scope.boreLogModel[1].value,
                        location: $scope.boreLogModel[2].value,
                        length: $scope.boreLogModel[3].value,
                        drillPipe: $scope.drillPipeLength
                    });

                    /**
                     * Check if its a brand new log via "hasOwnProperty"
                     * If property is missing, it should signify that this is a
                     * brand new log being created. All of the following assignments
                     * should only **ever happen ONCE**.
                     */
                    if(!bisonService.getActiveLog().hasOwnProperty("dateObj")) {
                        bisonService.getActiveLog()["dateObj"] =
                            bisonService.getType() === "log" ? bisonDateService.getBisonDateObject($scope.boreLogModel[4].value)
                                : bisonDateService.getBisonDateObject();
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("date")) {
                        bisonService.getActiveLog()["date"] =
                            bisonService.getType() === "log" ? bisonDateService.humanReadableDate($scope.boreLogModel[4].value)
                                : bisonDateService.humanReadableDate($scope.boreLogModel[4].value);
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("monthDate")) {
                        bisonService.setMonthDate(bisonDateService.dateRecord.month + bisonDateService.dateRecord.date);
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("year")) {
                        bisonService.setYear(bisonDateService.dateRecord.year);
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("locates")) {
                        bisonService.getActiveLog()["locates"] = [];
                    }
                    if(!bisonService.getActiveLog().hasOwnProperty("id")) {
                        console.log("Setting id");
                        bisonService.setID(bisonDateService.generateBisonID(bisonService.getActiveLog()["customer"], bisonService.getActiveLog()["location"]));//Depends on other properties being set first
                    }

                    /**
                     * Add to IndexedDB via bisonIndexedDB service
                     */
                    bisonIndexedDB.add(bisonService.getActiveLog());

                    /**
                     * @type {boolean} will be reset if the user goes
                     * back in the nav stack
                     */
                    hasBeenCreated = true;

                    //TODO delete debug console.Log()'s
                    console.log(JSON.stringify(bisonService.getActiveLog()));
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
                if(!bisonService.getActiveLog().hasOwnProperty("locates")) {
                    bisonService.getActiveLog()["locates"] = [];
                }
                //Reset the input elements
                angular.element("#feet").val("");
                angular.element("#inches").val("");
                var locate = bisonLocateFactory.format(feet, inches, crossing);//Format the locate
                bisonLocateFactory.add(locate, bisonService.getActiveLog()["locates"]);//Add the locate to the active log
                $scope.numberOfLocates = bisonService.getActiveLog()["locates"].length;//Update the numberOfLocates
                bisonIndexedDB.add(bisonService.getActiveLog());//-- Update the database object
                //TODO delete debug console.Log()'s
                console.log("Current status of locates:\n" + bisonService.getActiveLog()["locates"]);
            };

            /**
             * Used by bisonFormButtonPanel directive attribute @bisonModalValues
             * @returns {{title: *, value: *}[]}
             */
            $scope.getModalValues = function () {
                return bisonService.getActiveLog()["locates"];
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
             * Show the descriptions of each category via slideToggle()
             * @param $event {Object} Used to get the $event.target DOM elem
             * to wrap in angular.element()
             */
            //TODO delete once sure
            //$scope.showDescription = function ($event) {
            //    angular.element($event.target).toggleClass('activated');
            //    angular.element($event.target).siblings('p').slideToggle(200);
            //};

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