// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('bisonInc', ["ionic", "ui.router", "ngCordova"])

    .run(function ($ionicPlatform, $state) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        $state.go("home");
    })

    .config(function ($stateProvider, $urlRouterProvider, bisonIndexedDBProvider) {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "options.html",
                controller: "OptionsController"
            })
            .state("new-bore-log", {
                url: "/new-bore-log",
                templateUrl: "new-bore-log.html",
                controller: "NewBoreLogController"
            });
        $urlRouterProvider.otherwise("/");

        bisonIndexedDBProvider.setDatabaseName("bison");
        bisonIndexedDBProvider.setDatabaseVersion(1);
        bisonIndexedDBProvider.setObjectStoreName("bisonLogs");

    })

    .service("bisonDateService", function () {
        var self = this;
        self.dateRecord = {};
        self.parseDate = function (dateToParse) {
            var dateArray = dateToParse.toString().split(" ");
            self.dateRecord = {
                originalDate: dateToParse,
                month: dateArray[0],
                date: dateArray[1],
                year: dateArray[2],
                hour: dateArray[3],
                minute: dateArray[4],
                second: dateArray[5],
                bisonDateToString: function () {
                    return this.month + ". " + this.date + ", " +
                        this.year;
                },
                bisonTimeToString: function () {
                    return this.hour + ":" + this.minute + ":" + this.second;
                },
                bisonDateToFileFormat: function () {
                    return this.month + this.date + this.year + "-" + this.hour + this.minute + this.second;
                }
            };
            return {
                originalDate: dateToParse,
                month: dateArray[0],
                date: dateArray[1],
                year: dateArray[2],
                hour: dateArray[3],
                minute: dateArray[4],
                second: dateArray[5]
            }
        }
    })

    .service("bisonService", function () {
        var self = this;
        self.setType = function (type) {
            self.type = type;
        };
        self.getType = function () {
            return self.type;
        };
        self.setActiveLog = function (activeLog) {
            self.activeLog = activeLog;
        };
        self.getActiveLog = function () {
            if (self.activeLog) {
                return self.activeLog;
            } else {
                return {
                    id: "",
                    type: "",
                    customer: "",
                    conduit: "",
                    location: "",
                    length: "",
                    drillPipe:"",
                    date: "",
                    locates: []
                }
            }
        };
        self.setID = function (id) {
            self.activeLog["id"] = id;
        };
        self.getActiveDateObject = function () {
            return self.activeLog["date"];
        };
        self.getActiveLocates = function () {
            return self.activeLog["locates"];
        };
    })

    .factory("bisonLocateFactory", function () {
        return {
            format: function (feet, inches, crossing) {
                if (crossing) {
                    return feet + "\' " + inches + "\" " + crossing;
                }
                return feet + "\' " + inches + "\"";
            },
            add: function (locate, locatesArray) {
                locatesArray[locatesArray.length] = locate;
            },
            move: function (locatesArray, fromIndex, toIndex) {
                if (toIndex >= locatesArray.length) {
                    var i = toIndex - locatesArray.length;
                    while((i--) + 1) {
                        locatesArray.push(undefined);
                    }
                } else {
                    locatesArray.splice(toIndex, 0, locatesArray.splice(fromIndex, 1)[0]);
                }
            },
            remove: function (locatesArray, index) {
                locatesArray.splice(index, 1);
            },
            change: function (locatesArray, oldValue, newValue) {
                locatesArray[locatesArray.indexOf(oldValue)] = newValue;
            }
        }
    })

    .provider("bisonIndexedDB", function () {

        var self = this;
        //-- Configurable properties
        self.databaseName = "";
        self.databaseVersion = 0;
        self.objectStoreName = "";
        self.db = null;

        //-- Return the service (mini-safe)
        this.$get = ["$ionicPopup", function ($ionicPopup) {
            return {
                tempResults: [],
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
                    objectStore.createIndex("Type", "type", {unique: false});
                    objectStore.createIndex("Customer", "customer", {unique: false});
                    objectStore.createIndex("Conduit", "conduit", {unique: false});
                    objectStore.createIndex("Location", "location", {unique: false});
                    objectStore.createIndex("Length", "length", {unique: false});
                    objectStore.createIndex("DrillPipe", "drillPipe", {unique: false});
                    objectStore.createIndex("Date", "date", {unique: false});
                },
                showError: function (error) {
                    var errorPopup = $ionicPopup.alert({
                        title: "Database error",
                        template: "<pre>"+error.code+"</br>"+error.message+"</pre>"
                    }).then(function (res) {
                        console.log("Popup dismissed");
                    });
                },
                add: function (myObject) {
                    if(myObject) console.log("Attempting to add " + myObject);
                    var myTransaction = self.db.transaction(["bisonLogs"], "readwrite");
                    if(myTransaction) console.log("Transacting");
                    myTransaction.addEventListener("complete", function (e) {
                        console.log("Transaction complete");
                    });
                    var objectStore = myTransaction.objectStore(self.objectStoreName);
                    var request = objectStore.put(myObject);//Should update if id exists
                    request.addEventListener("success", function (event) {
                        console.log(event.target.result);
                    });
                    request.addEventListener("error", function (error) {
                        this.showError(error);
                    });
                },
                getOne: function(indexValue) {
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
                getAllOf: function (indexKey) {
                    if(this.tempResults.length !== 0) {
                        this.tempResults = [];
                    }
                    if(this.getIndexKeys().indexOf(indexKey) === -1) {
                        this.showError({
                            code:1313,
                            message:"Only search by legitimate indices: " + this.getIndexKeys().toString()
                        });
                    } else {
                        var myTransaction = self.db.transaction(["bisonLogs"], "readonly");
                        var objectStore = myTransaction.objectStore(self.objectStoreName);
                        var myIndex = objectStore.index(indexKey);
                        var myCursor = myIndex.openCursor(null, "prev");
                        myCursor.addEventListener("success", this.showAll);
                    }
                },
                getAll: function () {
                    if(this.tempResults.length !== 0) {
                        this.tempResults = [];
                    }
                    var myTransaction = self.db.transaction(["bisonLogs"], "readonly");
                    var objectStore = myTransaction.objectStore(self.objectStoreName);
                    var myCursor = objectStore.openCursor();
                    myCursor.addEventListener("success", this.showAll);
                },
                remove: function (index) {
                    var confirmPopup = $ionicPopup.confirm({
                        title:"Delete this record",
                        template:"<pre>Are you sure you want to?</pre>"
                    }).then(function (res) {
                        if(res) {
                            this.tempResults = [];//Reset the tempResults
                            var myTransaction = self.db.transaction([""], "readwrite");
                            var objectStore = myTransaction.objectStore(self.objectStoreName);
                            myTransaction.addEventListener("complete", this.getAll);//TODO case in which it's a getAllOf
                        } else {
                            //Do nothing
                        }
                    });
                },
                getIndexKeys: function () {
                    return [
                        "id","Type","Customer","Location","Conduit",
                        "Length","DrillPipe","Date"
                    ]
                },
                showAll: function (e) {
                    console.log("showAll() called");
                    var cursor = e.target.result;
                    if(cursor) {
                        this.tempResults.push(cursor.value);
                        cursor.continue();
                    } else {
                        return this.tempResults;
                    }
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
        }

    })
    .service("boreLogModelService", ["bisonService", function (bisonService) {
        this.getModel = function () {
            return [
                {
                    title: "Customer",
                    hint: "Who the job was for",
                    value: "",
                    inputType: "text",
                    inputName: "customer",
                    show: true,
                    required: true
                },
                {
                    title: "Conduit",
                    hint: "(No.) Size Type",
                    value: "",
                    inputType: "text",
                    inputName: "conduit",
                    show: bisonService.getType() === "log",
                    required: bisonService.getType() === "log"
                },
                {
                    title: "Location",
                    hint: "Location of the job",
                    value: "",
                    inputType: "text",
                    inputName: "location",
                    show: true,
                    required: true
                },
                {
                    title: "Length of bore",
                    hint: "Linear feet",
                    value: "",
                    inputType: "text",
                    inputName: "length",
                    show: bisonService.getType() === "log",
                    required: bisonService.getType() === "log"
                },
                {
                    title: "Date",
                    hint: "Start or end of job",
                    value: "",
                    inputType: "date",
                    inputName: "date",
                    show: bisonService.getType() === "log",
                    required: bisonService.getType() === "log"
                }
            ];
        }
    }]);