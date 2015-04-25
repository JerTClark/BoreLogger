angular.module("baroidApp").factory("BaroidPopupService",
    ["$ionicPopup",
        function ($ionicPopup) {
            var currentPopup = null;
            return {
                /**
                 * Shows a popup
                 * @param config
                 */
                show: function (config) {
                    currentPopup = $ionicPopup.show({
                        "templateUrl":config.templateUrl,
                        "title":config.title,
                        "subtitle":config.subtitle,
                        "scope":config.scope,
                        "buttons":config.buttonsArray
                    });
                },
                alert: function (config) {
                    $ionicPopup.alert({
                        "templateUrl":config.templateUrl,
                        "title":config.title
                    })
                },
                closeCurrent: function () {
                    if(currentPopup) {
                        currentPopup.close()
                    }
                }
            };
        }]);