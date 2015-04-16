angular.module("baroidApp").directive("baroidRecommendationNote", function () {
    return {
        restrict:"E",
        scope: {
            noteTitle:"@",
            noteModel:"="
        },
        templateUrl:"html/baroid/template/baroid-recommendation-note.html"
    }
});