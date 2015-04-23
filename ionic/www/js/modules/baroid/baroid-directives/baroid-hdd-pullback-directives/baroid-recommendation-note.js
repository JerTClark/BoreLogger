angular.module("baroidApp").directive("baroidRecommendationNote", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope: {
            idPre:"@",
            noteTitle:"@",
            noteModel:"="
        },
        templateUrl:baroidHTMLFiles.baroidRecommendationNote
    }
}]);