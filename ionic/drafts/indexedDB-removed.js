var removed = {
    getOne: function (indexValue) {
        var myTransaction = self.db.transaction(["bisonLogs"], "readonly");
        var objectStore = myTransaction.objectStore(self.objectStoreName);
        var request = objectStore.get(indexValue);
        request.addEventListener("success", function (e) {
            return e.target.result;
        });
        request.addEventListener("error", function (error) {
            this.showError(error);
        });
    },
    getAllOf: function (arrayParam, indexKey) {
        if (arrayParam.length !== 0) {
            arrayParam = [];
        }
        if (this.getIndexKeys().indexOf(indexKey) === -1) {
            this.showError({
                code: 1313,
                message: "Only search by legitimate indices: " + this.getIndexKeys().toString()
            });
        } else {
            var myTransaction = self.db.transaction(["bisonLogs"], "readonly");
            var objectStore = myTransaction.objectStore(self.objectStoreName);
            var myIndex = objectStore.index(indexKey);
            var myCursor = myIndex.openCursor(null, "prev");
            myCursor.addEventListener("success", function (e) {
                var cursor = e.target.result;
                if (cursor) {
                    arrayParam.push(cursor.value);
                    cursor.continue();
                } else {
                    return arrayParam;
                }
            });
        }
        return arrayParam;//TODO
    },
    showAll: function (e, arrayParam) {
        var cursor = e.target.result;
        if (cursor) {
            arrayParam.push(cursor.value);
            cursor.continue();
        } else {
            return arrayParam;
        }
    },
    //TODO Unused
    getAll: function (arrayParam) {
        if(arrayParam.length !== 0) {
            arrayParam = [];
        }
        var myTransaction = self.db.transaction(["bisonLogs"], "readonly");
        var objectStore = myTransaction.objectStore(self.objectStoreName);
        var myCursor = objectStore.openCursor();
        myCursor.addEventListener("success", function (e) {
            var cursor = e.target.result;
            if(cursor) {
                arrayParam.push(cursor.value);
                cursor.continue();
            } else {
                //Do nothing
                //console.log(arrayParam);
            }
        });
    }
};