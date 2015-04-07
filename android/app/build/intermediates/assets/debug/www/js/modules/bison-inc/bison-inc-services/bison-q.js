angular.module("bisonInc").service("bisonQ", ["$q", function ($q) {

    return {
        getPromise: function (asyncTask) {
            var q = $q.defer();
            asyncTask(q);
            return q.promise;
        }
    }

}]);