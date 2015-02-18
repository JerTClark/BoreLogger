angular.module("bisonInc")

    .controller('NewBoreLogController', ["$scope", "$timeout", "$ionicModal",
        function ($scope, $timeout, $ionicModal) {

    $scope.myLogger = function (data) {
        console.log(data + " clicked");
    };

    //-- Categories of information pertaining to a bore log
    $scope.boreLogModel = [
        {title: "Customer", hint: "Who the job was for", value: "", type: "text", inputName:"customer"},
        {title: "Conduit", hint: "(No.) Size Type", value: "", type: "text", inputName:"conduit"},
        {title: "Location", hint: "Location of the job", value: "", type: "text", inputName:"location"},
        {title: "Length of bore", hint: "Linear feet (Drill pipe length)", value: "", type: "text", inputName:"length"},
        {title: "Date", hint: "Select a date", value: "", type: "date", inputName:"date"}
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

    $scope.submitGeneralInfo = function() {
        $scope.newBoreLog = {
            customer: $scope.boreLogModel[0].value,
            conduit:$scope.boreLogModel[1].value,
            location:$scope.boreLogModel[2].value,
            length:$scope.boreLogModel[3].value,
            date:$scope.boreLogModel[4].value,
            locates: []
        };
        console.log(JSON.stringify($scope.newBoreLog));
    }

}]);