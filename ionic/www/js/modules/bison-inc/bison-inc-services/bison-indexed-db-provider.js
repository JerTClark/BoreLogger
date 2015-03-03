angular.module("bisonInc").provider("bisonIndexedDB", function () {

    var self = this;
    //-- Configurable properties
    self.databaseName = "";
    self.databaseVersion = 0;
    self.objectStoreName = "";
    self.db = null;
    self.tempResults = [];

    //-- Return the service (mini-safe)
    this.$get = ["$ionicPopup", function ($ionicPopup) {
        return {
            init: function () {
                console.log("init() called");
                var request = indexedDB.open(self.databaseName, self.databaseVersion);
                request.addEventListener("success", this.startDB);
                request.addEventListener("error", this.showError);
                request.addEventListener("upgradeneeded", this.createDB);
            },
            startDB: function (event) {
                console.log("startDB() called");
                self.db = event.target.result;
                if(self.db) console.log("Database is ready");
            },
            createDB: function (event) {
                var database = event.target.result;
                if(database) console.log("Created database");
                //-- Create the ObjectStore and Indexes
                var objectStore = database.createObjectStore("bisonLogs", {keyPath: "id"});
                if(objectStore) console.log("ObjectStore \""+ "bisonLogs" +"\" created");
                if(!objectStore) console.log("Couldn't create object store");
                objectStore.createIndex("Type", "type", {unique: false, multiEntry:true});
                objectStore.createIndex("Customer", "customer", {unique: false, multiEntry:true});
                objectStore.createIndex("Conduit", "conduit", {unique: false, multiEntry:true});
                objectStore.createIndex("Location", "location", {unique: false, multiEntry:true});
                objectStore.createIndex("Length", "length", {unique: false, multiEntry:true});
                objectStore.createIndex("DrillPipe", "drillPipe", {unique: false, multiEntry:true});
                objectStore.createIndex("Date", "date", {unique: false, multiEntry:true});
                objectStore.createIndex("Month", "monthDate", {unique: false, multiEntry:true});
                objectStore.createIndex("Year", "year", {unique: false, multiEntry:true});
            },
            add: function (myObject) {
                //if(myObject) console.log("Attempting to add " + myObject);
                var myTransaction = self.db.transaction(["bisonLogs"], "readwrite");
                //if(myTransaction) console.log("Transacting");
                myTransaction.addEventListener("complete", function (e) {
                    //console.log("Transaction complete");
                });
                var objectStore = myTransaction.objectStore(self.objectStoreName);
                var request = objectStore.put(myObject);//Should update if id exists
                request.addEventListener("success", function (event) {
                    //console.log(event.target.result);
                });
                request.addEventListener("error", function (error) {
                    this.showError(error);
                });
            },
            getAllOfWhere: function (arrayParam, indexKey, prop, where, callback) {
                //Reset the arrayParam to an empty array
                if(arrayParam.length !== 0) {
                    arrayParam = [];
                }
                //Ensure the indexKey is legitimate
                if(this.getIndexKeys().indexOf(indexKey) === -1) {
                    this.showError({
                        code:1313,
                        message:"Only search by legitimate indices: " + this.getIndexKeys()
                    })
                } else {
                    var myTransaction = self.db.transaction(["bisonLogs"], "readonly");
                    var objectStore = myTransaction.objectStore(self.objectStoreName);
                    var myIndex = objectStore.index(indexKey);
                    var myCursor = myIndex.openCursor(null, "next");
                    myCursor.addEventListener("success", function (e) {
                        var cursor = e.target.result;
                        if(cursor) {
                            if(cursor.value[prop] === where) {
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
                            message: "An error occurred using index of " +
                            + indexKey + "."
                        };
                        self.showError(error);
                    });
                }
            },
            remove: function (arrayParam, indexKey, prop, where, id, callback) {
                console.log("Inside remove");
                console.log("Parameters are: " + arrayParam + "\n" + indexKey + "\n" + prop + "\n" + where + "\n" +id);
                var parent = this;
                var confirmPopup = $ionicPopup.confirm({
                    title:"Delete this record",
                    template:"<pre>Are you sure you want to?</pre>"
                }).then(function (res) {
                    if(res) {
                        var myTransaction = self.db.transaction(["bisonLogs"], "readwrite");
                        var objectStore = myTransaction.objectStore(self.objectStoreName);
                        myTransaction.addEventListener("complete", function() {
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
                var deleteDB = indexedDB.deleteDatabase(self.databaseName);
                deleteDB.addEventListener("success", function () {
                    self.showError({code:0, message:"Deleted successfully"}, self.databaseName);
                })
            },
            getIndexKeys: function () {
                return [
                    "id","Type","Customer","Location","Conduit",
                    "Length","DrillPipe","Date"
                ]
            }
        }
    }];

    this.setDatabaseName = function(name) {
        self.databaseName = name;
    };
    this.setDatabaseVersion = function (version) {
        self.databaseVersion = version;
    };
    this.setObjectStoreName = function (name) {
        self.objectStoreName = name;
    };
    self.showError = function (error, title) {
        var errorPopup = $ionicPopup.alert({
            title: title || "Database error",
            template: "<pre>"+error.code+"</br>"+error.message+"</pre>"
        }).then(function (res) { });
    };
});