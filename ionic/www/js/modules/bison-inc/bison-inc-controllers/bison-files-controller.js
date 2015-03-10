angular.module("bisonInc")
    .controller("FilesController", ["$scope", "$cordovaFile", "$cordovaEmailComposer",
        "$cordovaFileOpener2", "$ionicPopup",
        function ($scope, $cordovaFile, $cordovaEmailComposer,
                  $cordovaFileOpener2, $ionicPopup) {
            /*This will be the path on an Android device*/
            var pdfDir = "/storage/emulated/0/BisonIonic";
            $scope.mySelection = {value: ""};
            $scope.bisonFiles = [];
            /**
             * An Array bound to ngOption
             * These are used to sort the list via
             * bisonIndexedDB service
             * @type {Array|{name: String}}
             */
            $scope.items = [
                {name: "Full path", prop:"nativeURL"}
            ];
            $scope.showProperty = "";

            /**
             * Will need to modify for including iOS or WebStorage, etc
             */
            $scope.init = $cordovaFile.listDir(pdfDir).then(function (files) {
                $scope.bisonFiles = files;
            }, function (error) {
                console.log("From error");
                $scope.bisonFiles.push({
                    name: "ForTestingInChrome.pdf",
                    nativeURL: "/Some/Path/To/A/ForTestingInChrome.pdf"});
            });

            /**
             * To delete a PDF file from the device
             * @param file
             */
            $scope.deleteFile = function (file) {
                console.log("Delete: " + file.name + " @ " + file.nativeURL);
                var confirmDelete = $ionicPopup.confirm({
                    title: "Delete this file?",
                    template: "<p>" + file.name + " will be removed from this device</p>"
                }).then(function (res) {
                    if (res) {
                        /*Confirmed-Delete the file*/
                        $cordovaFile.removeFile(file.nativeURL).then(function () {
                            $ionicPopup.alert({
                                title:"Success",
                                template:"<p>" + file.name + " was successfully deleted</p>"
                            });
                        }, function () {
                            $ionicPopup.alert({
                                title:"Error",
                                template:"<p>" + file.name + " could not be deleted</p>"
                            });
                        });
                    } else {
                        //Do nothing
                    }
                })
            };

            /**
             * To send (email) a PDF file on the device
             * @param file
             */
            $scope.sendFile = function (file) {
                console.log("Send: " + file.name + " @ " + file.nativeURL);
                $cordovaEmailComposer.isAvailable().then(function () {
                    //is available
                }, function () {
                    $ionicPopup.alert({
                        title:"Error",
                        template:"<p>$cordovaEmailComposer in <strong>not</strong> available</p>"
                    })
                });

                var email = {
                    to:"",
                    cc:"",
                    bcc:"",
                    attachments: [
                        file.nativeURL
                    ],
                    subject:file.name,
                    body:"",
                    isHtml:false
                };

                $cordovaEmailComposer.open(email).then(null, function () {
                    //user cancelled email
                });
            };

            /**
             * To open a file on the device
             * @param file
             */
            $scope.openFile = function (file) {
                console.log("Open: " + file.name + " @ " + file.nativeURL);
                $cordovaFileOpener2.open(
                    file.nativeURL,
                    "application/pdf"
                ).then(function () {
                        //success
                    }, function () {
                        $ionicPopup.alert({
                            title: "Error",
                            template: "<p>Couldn\'t open " + file.name + "</p>"
                        });
                    });
            };

            /**
             * TODO delete
             * For grabbing the listDir() => Array[] of Objects to get their properties
             */
            $scope.consoleLog = function () {
                $scope.log = JSON.stringify($scope.bisonFiles);
            };

}]);