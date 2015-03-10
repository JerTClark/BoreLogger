module.exports = function () {
    return {
        databaseName: "mockBisonInc",
        databaseVersion: 1,
        objectStoreName: "mockBison",
        db: null,
        init: function () {
            console.log("init() called");
            browser.executeScript(
            'var request = indexedDB.open("mockBisonInc", 1);' +
            'request.addEventListener("success", this.startDB);' +
            'request.addEventListener("error", this.showError);' +
            'request.addEventListener("upgradeneeded", this.createDB);');
        },
        startDB: function (event) {
            console.log("startDB() called");
            browser.executeScript('this.db = event.target.result;' +
            'if (this.db) console.log("Database is ready")');
        },
        createDB: function (event) {
            browser.executeScript(
                'var database = event.target.result;' +
                'if (database) console.log("Created database");' +
                'var objectStore = database.createObjectStore("mockBison", {keyPath: "id"});' +
                'if (objectStore) console.log("ObjectStore \"" + "mockBison" + "\" created");' +
                'objectStore.createIndex("Type", "type", {unique: false, multiEntry: true});' +
                'objectStore.createIndex("Customer", "customer", {unique: false, multiEntry: true});' +
                'objectStore.createIndex("Conduit", "conduit", {unique: false, multiEntry: true});' +
                'objectStore.createIndex("Location", "location", {unique: false, multiEntry: true});' +
                'objectStore.createIndex("Length", "length", {unique: false, multiEntry: true});' +
                'objectStore.createIndex("DrillPipe", "drillPipe", {unique: false, multiEntry: true});' +
                'objectStore.createIndex("Date", "date", {unique: false, multiEntry: true});' +
                'objectStore.createIndex("Month", "monthDate", {unique: false, multiEntry: true});' +
                'objectStore.createIndex("Year", "year", {unique: false, multiEntry: true});');
        },
        add: function (myObject) {
            var myTransaction = this.db.transaction(["mockBison"], "readwrite");
            myTransaction.addEventListener("complete", function (e) {
            });
            var objectStore = myTransaction.objectStore(this.objectStoreName);
            var request = objectStore.put(myObject);//Should update if id exists
            request.addEventListener("success", function (event) {

            });
            request.addEventListener("error", function (error) {
                if (error) this.showError(error);
                else this.showError({
                    code: 0,
                    message: "Error in add()"
                })
            });
        },
        /**
         * Reset the array prior to calling
         * @param arrayParam
         * @param indexKey
         * @param prop
         * @param where
         * @param callback
         */
        getAllOfWhere: function (arrayParam, indexKey, prop, where, callback) {
            /*Reset the arrayParam to an empty array*/
            if (arrayParam.length !== 0) {
                arrayParam = [];
            }
            /*Ensure the indexKey is legitimate*/
            if (this.getIndexKeys().indexOf(indexKey) === -1) {
                this.showError({
                    code: 1313,
                    message: "Only search by legitimate indices: " + this.getIndexKeys()
                })
            } else {
                var myTransaction = this.db.transaction(["mockBison"], "readonly");
                var objectStore = myTransaction.objectStore(this.objectStoreName);
                var myIndex = objectStore.index(indexKey);
                var myCursor = myIndex.openCursor(null, "next");
                myCursor.addEventListener("success", function (e) {
                    var cursor = e.target.result;
                    if (cursor) {
                        if (cursor.value[prop] === where) {
                            callback(function () {
                                arrayParam.push(cursor.value);
                            });
                        }
                        cursor.continue();
                    } else {
                        //Do nothing
                    }
                });
                myCursor.addEventListener("error", function () {
                    var error = {
                        code: 3113,
                        message: "An error occurred using index of " + +indexKey + "."
                    };
                    console.log(error);
                });
            }
        },
        remove: function (arrayParam, indexKey, prop, where, id, callback) {
            var parent = this;
            var confirmPopup = $ionicPopup.confirm({
                title: "Delete this record",
                template: "<pre>Are you sure you want to?</pre>"
            }).then(function (res) {
                if (res) {
                    var myTransaction = this.db.transaction(["mockBison"], "readwrite");
                    var objectStore = myTransaction.objectStore(this.objectStoreName);
                    myTransaction.addEventListener("complete", function () {
                        console.log("Deleted successfuly");
                        parent.getAllOfWhere(arrayParam, indexKey, prop, where, callback);
                    });
                    var myRequest = objectStore.delete(id);
                } else {
                    //Do nothing
                }
            });
        },
        deleteDatabase: function () {
            var parent = this;
            var deleteDB = indexedDB.deleteDatabase(this.databaseName);
            deleteDB.addEventListener("success", function () {
                this.showError({code: 0, message: "Deleted successfully"}, parent.databaseName);
            })
        },
        getIndexKeys: function () {
            return [
                "id", "Type", "Customer", "Location", "Conduit",
                "Length", "DrillPipe", "Date"
            ]
        },
        showError: function (error) {
            console.log("Error: " + error);
        }
    }
};