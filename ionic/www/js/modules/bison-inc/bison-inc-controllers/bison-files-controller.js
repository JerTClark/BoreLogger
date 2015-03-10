angular.module("bisonInc")
    .controller("FilesController", ["$scope", "$cordovaFile",
        function ($scope, $cordovaFile) {

            var pdfDir = "/storage/emulated/0/BisonBoreLogger/BoreLogs";
            $scope.init = $cordovaFile.listDir(pdfDir).then(function (files) {
                $scope.pdfs = files;
            });

            $scope.consoleLog = function () {
                $scope.log = JSON.stringify($scope.pdfs);
            };

}]);