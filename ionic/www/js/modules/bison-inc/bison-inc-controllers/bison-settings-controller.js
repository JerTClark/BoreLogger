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
                                    title: "Clear local cache",
                                    template:'<div style="text-align: center">' +
                                    '<p>This will delete all local database records on this device.</p></br>' +
                                    '<img src="../img/database.png"></br><p style="color: #0000FF"><b>Are you sure?</b></p></div>',
                                    subtitle: "",
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
                                confirm({
                                    title: "BoreLogger",
                                    template: "<div  style='text-align: center'><p style='text-align: center'>This whole thing was a learning experience.</p>" +
                                    "<p style='text-align: center'><b>That's why.</b></p></br>" +
                                    "<a style='text-decoration: none' href='http://ionicframework.com/'><img src='../img/ionic.png'></a>" +
                                    "<p style='text-align: center'>Built using <a style='text-decoration: none; color: #0000FF' href='http://ionicframework.com/'>Ionic</a></p></div>",
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
                    template: configObj.template,
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