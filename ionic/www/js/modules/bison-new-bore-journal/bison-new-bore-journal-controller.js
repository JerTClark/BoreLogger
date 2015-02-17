angular.module("bisonInc")

    .controller("NewBoreJournalController", ["$scope", function ($scope) {

        //-- Categories of information pertaining to a bore journal
        $scope.boreJournalModel = [
            {title: "Customer", hint: "Who the job was for", value: "", type: "text"},
            {title: "Location", hint: "Location of the job", value: "", type: "text"}
        ];

    }]);