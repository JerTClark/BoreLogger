angular.module("baroidApp").directive("baroidExtraRecommendationNote", ["baroidHTMLFiles",
    function (baroidHTMLFiles) {
    return {
        restrict:"E",
        scope: {
            idPre:"@",
            noteTitle:"@",
            noteModel:"="
        },
        templateUrl:baroidHTMLFiles.baroidNote
    }
}]);