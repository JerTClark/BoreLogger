angular.module("bisonInc")
    .controller("ContinueController", ["$scope", "bisonIndexedDB",
        function ($scope, bisonIndexedDB) {

            $scope.type = "TEMP_VALUE";
            $scope.bisonIndexes = bisonIndexedDB.getIndexKeys();
            $scope.bisonRecords = [
                "The Count of Monte Cristo",
                "Conversations with Goethe",
                "Lord Byron's Poems",
                "John Donne",
                "Twilight"
            ];

        }]);