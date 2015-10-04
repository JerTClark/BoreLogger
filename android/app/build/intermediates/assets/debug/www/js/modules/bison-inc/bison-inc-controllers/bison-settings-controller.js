angular.module("bisonInc")
.controller("SettingsController",["$scope", "$ionicPopup", "bisonIndexedDB", "bisonHTMLFiles",
        function ($scope, $ionicPopup, bisonIndexedDB, bisonHTMLFiles) {
            $scope.settingsCategories = [
                {
                    name: "Local records",
                    description: "manage cached data on this device",
                    buttons: [
                        {
                            text: "Clear local cache",
                            onClick: function () {
                                confirm({
                                    title: "Clear local cache",
                                    templateUrl: bisonHTMLFiles.confirmClearLocalCache,
                                    fn: function () {
                                        bisonIndexedDB.deleteDatabase();                                    }
                                });
                            }
                        }
                    ]
                },
                {
                    name: "About this app",
                    description: "whose fault is this, really?",
                    buttons: [
                        {
                            text: "About this app",
                            onClick: function () {
                                alertPopup({
                                    title: "BoreLogger",
                                    templateUrl: bisonHTMLFiles.aboutThisApp,
                                    fn: function () {
                                        //Nothing
                                    }
                                });
                            }
                        }
                    ]
                }
            ];


            /**
             * A confirm popup
             * @param configObj passed with values like title, templateUrl...
             */
            var confirm = function (configObj) {
                var confirmPopup = $ionicPopup.show({
                    scope: $scope,
                    templateUrl: configObj.templateUrl,
                    title:configObj.title,
                    buttons: [
                        {
                            text: "Cancel",
                            type: "button-positive"
                        },
                        {
                            text: "Ok",
                            type: "button-positive",
                            onTap: configObj.fn
                        }
                    ]
                });
            };

            /**
             * An alert w Ok button
             * @param configObj passed with values like title, templateUrl...
             */
            var alertPopup = function (configObj) {
                var myAlertPopup = $ionicPopup.alert({
                    scope: $scope,
                    templateUrl: configObj.templateUrl,
                    title:configObj.title,
                    okText:"Got it",
                    okType:"button-positive"
                });
            };

        }]);

//template:'<div style="text-align: center">' +
//'<p>This will delete all local database records on this device.</p></br>' +
//'<img src="img/database.png"></br>' +
//'<p style="color: #0000FF"><b>Are you sure?</b></p></div>',