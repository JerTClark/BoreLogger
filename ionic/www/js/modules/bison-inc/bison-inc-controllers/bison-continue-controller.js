angular.module("bisonInc")
    .controller("ContinueController", ["$scope", "bisonIndexedDB",
        "bisonService", "$timeout", "$state", "$rootScope", "$ionicActionSheet",
        function ($scope, bisonIndexedDB, bisonService, $timeout, $state, $rootScope) {

            /**
             * Display the type of documentation that is to be resumed
             */
            $scope.type = "";//Initialized in $scope.init()

            /**
             * Holds the loaded records from IndexedDB
             * @type {Array}
             */
            $scope.bisonRecords = [];//Initialized in $scope.init()

            /**
             * Loads either all "logs" or all "journals" via ngInit
             */
            $scope.init = function () {
                //TODO experimenting with convert* feature
                if (bisonService.getType() === "convertToLog") {
                    $scope.type = "journal";//In order to show only journals
                    /**
                     * In order to "load" the selected journal as a log
                     * and supply the missing fields
                     */
                    bisonService.setType("log");
                } else if (bisonService.getType() === "convertToPDF") {
                    $scope.type = "log";
                    //Leave bisonService.getType() as "convertToPDF"
                } else {
                    $scope.type = bisonService.getType();
                }
                //Get either all "log" or all "journal" records, or "convert"
                bisonIndexedDB.getAllOfWhere($scope.bisonRecords, "Type", "type", $scope.type, callback);
            };

            /**
             * Delete a database record
             * @param id
             */
            $scope.deleteDatabaseRecord = function (id) {
                //$scope.bisonRecords.splice(index, 1);
                $scope.bisonRecords = [];
                bisonIndexedDB.remove($scope.bisonRecords, $scope.mySelection["value"]["name"] || "Type", "type", $scope.type, id, callback);
            };

            //Callback for every database operation to be done from within $apply()
            var callback = function (cb) {
                $scope.$apply(function () {
                    if (cb) {
                        cb();//This is working well here
                    }
                });
            };

            /**
             * Bound to a select element whose ngOptions are $scope.bisonIndices
             * To access its real string values, do so by:
             * $scope.mySelection["value"]["name"]
             * @type {{value: {name:String}}}
             */
            $scope.mySelection = {value: ""};

            /**
             * Used to show a corresponding property associated with each record
             * listed in the ionItem ngRepeat="record in bisonRecords"
             * For example, record[showProperty]
             * @type {string}
             */
            $scope.showProperty = "";
            $scope.$watchCollection("mySelection", function () {
                /**
                 * If a value is obtained, get a String whose first letter
                 * is lowercase
                 */
                if ($scope.mySelection["value"] && $scope.mySelection["value"]["name"]) {
                    /**
                     * The following binds the $scope.showProperty to the lowercase value
                     * of the Index chosen from the select element. This is done so that one
                     * value can be associated with both an IndexedDB Index and an Object property.
                     */
                    var prop = $scope.mySelection["value"]["name"];
                    var newProp = prop.split("");
                    newProp[0] = newProp[0].toLowerCase();
                    prop = newProp.join("");
                    $scope.showProperty = prop;
                    $scope.bisonRecords = [];
                    bisonIndexedDB.getAllOfWhere($scope.bisonRecords, $scope.mySelection["value"]["name"], "type", $scope.type, callback);
                }
            });

            /**
             * The bore log or journal to continue
             * @param logToResume
             */
            $scope.select = function (logToResume) {
                if (bisonService.getType() === "convertToPDF") {
                    console.log("Will start the conversion here");
                    var fileName = logToResume["id"] + ".json";
                    $scope.saveData(logToResume, fileName);
                } else {
                    bisonService.setActiveLog(logToResume);
                    $state.go("resume", {id: logToResume["id"]});
                }
            };

            /**
             * @Proposed for taking the current "sort by" key of
             * $scope.mySelection (which is capitalized) and returning
             * a string whose first letter is lowercase and can be used
             * to access an object property
             * @returns {String}
             */
            function indexToProperty() {
                var temp = $scope.mySelection["value"]["name"].split("");
                temp[0] = temp[0].toLowerCase();
                return temp.join("");
            }

            /**
             * Returns an Array of strings each of which
             * are used as ObjectStore Indices by IndexedDB via
             * the bisonIndexedDB service
             */
            $scope.bisonIndices = bisonIndexedDB.getIndexKeys();

            /**
             * An Array bound to ngOption
             * These are used to sort the list via
             * bisonIndexedDB service
             * @type {Array|{name: String}}
             */
            $scope.items = [
                //{name:$scope.bisonIndices[0]},
                //{name:$scope.bisonIndices[1]},
                {name: $scope.bisonIndices[2]},
                {name: $scope.bisonIndices[3]},
                {name: $scope.bisonIndices[4]},
                {name: $scope.bisonIndices[5]},
                {name: $scope.bisonIndices[6]},
                {name: $scope.bisonIndices[7]}
            ];

            $scope.myURL = "Something";

            $scope.saveData = function (data, fileName) {
                console.log(data, fileName);

                //JSON.stringify(data)
                var URL = (window.URL||window.webkitURL),
                    json = JSON.stringify(data, null, 2),
                    blob = new Blob([json], {type: "octet/stream"}),
                    url = URL.createObjectURL(blob),
                    anchor = angular.element("#pdfDownload");

                $scope.myURL = url;
                $scope.fileName = fileName;

                anchor.attr("href", url);

                anchor.on("click", function () {
                    console.log("#pdfDownload clicked");
                    $timeout(function () {
                        URL.revokeObjectURL(url);
                    }, 10);
                })
            };
        }]);