angular.module("bisonInc")
.controller("SettingsController",["$scope", "$ionicPopup", "bisonIndexedDB",
        function ($scope, $ionicPopup, bisonIndexedDB) {

            $scope.settingsCategories = [
                {
                    name: "Local records",
                    description: "manage cached data on this device",
                    buttons: [
                        {
                            text: "Clear local cache",
                            onClick: function () {
                                confirm({
                                    title: "Clearing cache",
                                    subtitle: "This will delete all local database records on this device. Are you sure?",
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
                            text: "About",
                            onClick: function () {
                                confirm({
                                    title: "BoreLogger",
                                    subtitle: "This whole thing was a learning experience. That's why.",
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
             */
            var confirm = function (configObj) {
                var crossingPopup = $ionicPopup.show({
                    scope: $scope,
                    template:'',
                    title:configObj.title,
                    subTitle:configObj.subtitle,
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
        }]);