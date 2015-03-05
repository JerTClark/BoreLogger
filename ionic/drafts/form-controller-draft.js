$scope.formController = function () {
    $timeout(function () {
        //TODO Experimental
        $scope.bisonGenInfoForm.customer.$setValidity("minLength", true);
    }, 1000);
};