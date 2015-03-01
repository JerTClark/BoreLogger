angular.module("bisonInc")
    .controller("ContinueController", ["$scope", "bisonIndexedDB",
        "bisonService", "$timeout", "$state",
        function ($scope, bisonIndexedDB, bisonService, $timeout, $state) {

            /**
             * Display the type of documentation that is to be resumed
             */
            $scope.type = bisonService.getType();

            /**
             * Holds the loaded records from IndexedDB
             * @type {Array}
             */
            $scope.bisonRecords = [];

            /**
             * Loads either all "logs" or all "journals" via ngInit
             */
            $scope.init = function () {
                //bisonIndexedDB.getAll($scope.bisonRecords);
                //Get either all "log" or all "journal" records
                bisonIndexedDB.getAllOfWhere($scope.bisonRecords, "Type", "type", $scope.type);
            };

            /**
             * Bound to a select element whose ngOptions are $scope.bisonIndices
             * To access its real string values, do so by:
             * $scope.mySelection["value"]["name"]
             * @type {{value: {name:String}}}
             */
            $scope.mySelection = {value:""};

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
                if($scope.mySelection["value"] && $scope.mySelection["value"]["name"]) {
                    var prop = $scope.mySelection["value"]["name"];
                    var newProp = prop.split("");
                    newProp[0] = newProp[0].toLowerCase();
                    prop = newProp.join("");
                    $scope.showProperty = prop;
                    console.log(prop);
                    $scope.bisonRecords = bisonIndexedDB.getAllOfWhere($scope.bisonRecords, $scope.mySelection["value"]["name"], "type", $scope.type);
                }
            });

            $scope.test = function (object) {
                bisonService.setActiveLog(object);
                $timeout(function () {
                    console.log("Continue: " + bisonService.getActiveLog()["id"]);
                }, 0);
                $state.go("resume", object);
            };

            //$scope.$watchCollection("bisonRecords", function () {
            //    console.log("Changed Records");
            //});

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
                {name:$scope.bisonIndices[2]},
                {name:$scope.bisonIndices[3]},
                {name:$scope.bisonIndices[4]},
                {name:$scope.bisonIndices[5]},
                {name:$scope.bisonIndices[6]},
                {name:$scope.bisonIndices[7]}
            ];

        }]);