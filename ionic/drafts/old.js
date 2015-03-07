var nothing;//Keep WebStorm happy

nothing.controller('OptionsController', function ($scope, $timeout, $state) {

    $scope.myLogger = function (data) {
        console.log(data + " clicked");
    };

    //-- Categories of information pertaining to a bore journal
    $scope.boreJournalModel = [
        {title: "Customer", hint: "Who the job was for", value: "", type: "text"},
        {title: "Location", hint: "Location of the job", value: "", type: "text"}
    ];

    $scope.optionCategories = [
        {
            title: "Bore Log", description: "Record a completed bore",
            buttons: [
                {name: "Create", func: "newBoreLog()", code: 0},
                {name: "Continue", func: "", code: 1}
            ],
            class:''
        },
        {
            title: "Bore Journal",
            description: "Record an ongoing bore",
            buttons: [
                {name: "Create", func: "", code: 2},
                {name: "Continue", func: "", code: 3},
                {name: "Convert", func: "", code: 4}
            ],
            class:''
        },
        {
            title: "Create PDF", description: "A billable report",
            buttons: [
                {name: "Create", func: "", code: 5}
            ],
            class:''
        },
        {
            title: "Browse Files", description: "Choose from the file types below",
            buttons: [
                {name: "Logs", func: "", code: 6},
                {name: "Journals", func: "", code: 7},
                {name: "PDFs", func: "", code: 8}
            ],
            class: 'hide'
        }
    ];

    //-- Detect button press from options
    $scope.options = function (button) {
        switch (button.code) {
            case 0:
                $state.go('borelogger.new-bore-log');
                break;
            default :
                $scope.myLogger(button.name);
                break;
        }
    };

    $scope.showDescription = function ($event) {
        angular.element($event.target).toggleClass('activated');
        angular.element($event.target).siblings('p').slideToggle(200);
    };

    $scope.activate = function ($event, button) {
        var elem = angular.element($event.target);
        elem.addClass('emphasis');
        $scope.options(button);
        //Remove this (below)
        $timeout(function() {
            elem.removeClass('emphasis');
        }, 2000)
    };

})

    .controller('NewBoreLogController', function ($scope, $timeout, $ionicModal) {

        $scope.myLogger = function (data) {
            console.log(data + " clicked");
        };

        //-- Categories of information pertaining to a bore log
        $scope.boreLogModel = [
            {title: "Customer", hint: "Who the job was for", value: "", type: "text"},
            {title: "Conduit", hint: "(No.) Size Type", value: "", type: "text"},
            {title: "Location", hint: "Location of the job", value: "", type: "text"},
            {title: "Length of bore", hint: "Linear feet (Drill pipe length)", value: "", type: "text"},
            {title: "Date", hint: "Select a date", value: "", type: "date"}
        ];

        $scope.showDescription = function ($event) {
            angular.element($event.target).toggleClass('activated');
            angular.element($event.target).siblings('p').slideToggle(200);
        };

        $scope.activate = function ($event, button) {
            var elem = angular.element($event.target);
            elem.addClass('emphasis');
            //$scope.options(button);
            //Remove this (below)
            $timeout(function () {
                elem.removeClass('emphasis');
            }, 2000)
        };

        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function () {
            $scope.modal.title = "Bore log";
            $scope.modal.description = "A summary of the new bore log so far...";
            $scope.modal.values = [
                {title: $scope.boreLogModel[0].title, value: $scope.boreLogModel[0].value},
                {title: $scope.boreLogModel[1].title, value: $scope.boreLogModel[1].value},
                {title: $scope.boreLogModel[2].title, value: $scope.boreLogModel[2].value},
                {title: $scope.boreLogModel[3].title, value: $scope.boreLogModel[3].value},
                {title: $scope.boreLogModel[4].title, value: $scope.boreLogModel[4].value}
            ];
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });

        $scope.$on('modal.hidden', function () {
            console.log('Modal hidden');
        });

        $scope.$on('modal.removed', function () {
            console.log('Modal removed');
        });


    });


//--Old Ionic Modal from controller
$ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
}).then(function (modal) {
    $scope.modal = modal;
});
$scope.openModal = function () {
    $scope.modal.title = "Bore log";
    $scope.modal.description = "A summary of the new bore log so far...";
    $scope.modal.values = [
        {title: $scope.boreLogModel[0].title, value: $scope.boreLogModel[0].value},
        {title: $scope.boreLogModel[1].title, value: $scope.boreLogModel[1].value},
        {title: $scope.boreLogModel[2].title, value: $scope.boreLogModel[2].value},
        {title: $scope.boreLogModel[3].title, value: $scope.boreLogModel[3].value},
        {title: $scope.boreLogModel[4].title, value: $scope.boreLogModel[4].value}
    ];
    $scope.modal.show();
};
$scope.closeModal = function () {
    $scope.modal.hide();
};
$scope.$on('$destroy', function () {
    $scope.modal.remove();
});
$scope.$on('modal.hidden', function () {
    console.log('Modal hidden');
});
$scope.$on('modal.removed', function () {
    console.log('Modal removed');
});


bisonService.setActiveLog({
    id: "unset",
    type: bisonService.getType(),
    customer: $scope.boreLogModel[0].value,
    conduit: $scope.boreLogModel[1].value,
    location: $scope.boreLogModel[2].value,
    length: $scope.boreLogModel[3].value,
    drillPipe: $scope.drillPipeLength,
    date: searchableDate(),
    monthDate: "unset",
    year: "unset",
    dateObj: bisonDate(),
    locates: []
});

//Check if its a brand new log via "hasOwnProperty"
//Set bison
bisonService.setID(bisonID());//Depends on other properties being set first
bisonService.setMonthDate(bisonDateService.dateRecord.month + bisonDateService.dateRecord.date);
bisonService.setYear(bisonDateService.dateRecord.year);

/**
 * Set value bisonService.activeLog["dateObj"]
 * @returns {Object} dateObj
 */
var getBisonDateObject = function () {
    //Determine @dateToParse by bisonService.activeLog["type"]
    var dateToParse = bisonService.getType() === "journal" ?
        new Date().format("M d Y H m s") :
        new Date($scope.boreLogModel[4].value)
            .format("M d Y H m s");
    //Return the dateObj
    return bisonDateService.parseDate(dateToParse);
};

/**
* Set value of bisonService.activeLog["date"]
* @returns {String}
*/
var humanReadableDate = function () {
    return bisonService.getType() === "journal" ?
        new Date().format("M d Y") :
        new Date($scope.boreLogModel[4].value)
            .format("M d Y");
};

/**
* Set the value of bisonService.activeLog["id"]
* @returns {string}
*/
var generateBisonID = function () {
    var id = $scope.boreLogModel[0].value + $scope.boreLogModel[2].value + bisonDateService.dateRecord.bisonDateToFileFormat();
    return id.replace(/\s/g, "");
};

//From new-bore-log-controller

/**
 * The following group of $watchCollection's enable the user to update the activeLog
 * should any of the values being watched change via their corresponding input element
 */
//$scope.$watchCollection("boreLogModel[0]", function (newValues, oldValues) {
//    console.log("Changed customer from " + oldValues.value + " to " + newValues.value);
//    hasBeenCreated = false;
//});
//$scope.$watchCollection("boreLogModel[1]", function (newValues, oldValues) {
//    console.log("Changed conduit from " + oldValues.value + " to " + newValues.value);
//    hasBeenCreated = false;
//});
//$scope.$watchCollection("boreLogModel[2]", function (newValues, oldValues) {
//    console.log("Changed location from " + oldValues.value + " to " + newValues.value);
//    hasBeenCreated = false;
//});
//$scope.$watchCollection("boreLogModel[3]", function (newValues, oldValues) {
//    console.log("Changed length of bore from " + oldValues.value + " to " + newValues.value);
//    hasBeenCreated = false;
//});
//$scope.$watchCollection("boreLogModel[4]", function (newValues, oldValues) {
//    console.log("Changed Date from " + oldValues.value + " to " + newValues.value);
//    hasBeenCreated = false;
//});

//From continue controller
////TODO delete debug console.Log()'s
$scope.$watchCollection("bisonRecords", function() {
    console.log("Changed");
});

//From e2e

/**
 * Resume state
 * This is completely obsolete: New bore log state is recycled
 * using $stateParams to detect that a user selection was made
 * via New bore log state. Delete this and use Continue state Page
 * Object to test Resume state
 */
var StateResume = function () {
    return {
        test: 1 + 2,
        ionNavBar: element(by.id("bison-nav-bar")),
        backButton: element(by.cssContainingText(".back-button", "")),
        allElements: element.all(by.repeater("field in boreLogModel")),
        customerCategory: element(by.cssContainingText(".bison-category", "Customer")),
        conduitCategory: element(by.cssContainingText(".bison-category", "Conduit")),
        locationCategory: element(by.cssContainingText(".bison-category", "Location")),
        lengthOfBoreCategory: element(by.cssContainingText(".bison-category", "Length of bore")),
        dateCategory: element(by.cssContainingText(".bison-category", "Date")),
        drillPipeCategory: element(by.cssContainingText(".bison-category", "Drill pipe")),
        //-- Buttons
        topButton: element(by.buttonText("Double-check")),
        bottomButton: element(by.buttonText("Continue")),
        editLocatesButton: element(by.buttonText("Edit locates")),
        //-- Inputs
        customerInput: element(by.id("0-input")),
        conduitInput: element(by.id("1-input")),
        locationInput: element(by.id("2-input")),
        lengthOfBoreInput: element(by.id("3-input")),
        dateInput: element(by.id("4-input")),
        //-- Toggle
        drillPipeToggle: element(by.id("drillPipeToggle"))
    }
};

//From Continue controller

$scope.saveData = function (data, fileName) {
    /**
     * TODO Testing JSON.stringify(data)
     * Try replacing "json" with "pdf" assigned the return
     * value of the BisonPDFService.getPDF()
     */

    var URL = (window.URL || window.webkitURL),
    //json = JSON.stringify(data, null, 2),
    //blob = new Blob([json], {type: "octet/stream"}),
    //blob = new Blob([pdf], {type: "application/pdf"}),
    //url = URL.createObjectURL(blob),
        anchor = angular.element("#pdfDownload");

    //$scope.myURL = url;
    $scope.fileName = fileName;

    //anchor.attr("href", url);

    anchor.on("click", function () {
        var pdf = bisonPDFService.getPDF();
        $timeout(function () {
            URL.revokeObjectURL(url);
        }, 10);
    })
};

//Old attempt at a promise chain
writePDFHeader();
var writePDFQ = getPromise(writePDFHeader)
    .then(function (result) {
        toast(result);
    }, function (error) {
        toast("Error writing header");
    });
addImage();
var addImageQ = getPromise(addImage)
    .then(function (result) {
        toast(result);
        drawSecondLine();
    }, function (error) {
        toast("An error occurred writing image");
    });
writeLocates();
var writeLocatesQ = getPromise(writeLocates)
    .then(function (result) {
        toast(result);
        savePDF(promise);
    }, function (error) {
        toast("An error occurred writing locates");
    });

/*Run after writeHeaders() to test some output*/
var locatesTest = function () {
    bisonPDF.text(X, Y, "Locates begin where Y = " + Y);
    bisonPDF.text(110, Y, "At x = 100; Locates begin where Y = " + Y);
    /*Testing for the point at which a new column should be made*/
    for(var i = 0; i <= 100; i++) {
        bisonPDF.text(X, Y, i + ". Y is " + Y);
        nextLine();
    }
}

/*Try to draw a background*/
//bisonPDF.setDrawColor(255,255,255);
//bisonPDF.setFillColor(255,255,255);
//bisonPDF.rect(160,5,40,50,"FD");
//bisonPDF.setDrawColor(0,0,0);


/*Create the BisonIonic folder*/
//makeFolderPromise = $cordovaFile.createDir("BisonIonic", false)
//    .then(function (success) {
//        nativeUrl = success["nativeURL"];
//        $cordovaToast.show("This app uses " + nativeUrl, "long", "bottom");
//        /*Obtain the data for creating a Blob*/
//        pdfPromise = getPromise(bisonPDFService.getPDF)
//            .then(function (result) {
//                data = result;
//                //$cordovaToast.show("PDF created", "short", "bottom");
//                /*Write the file from a Blob*/
//                writeFilePromise = $cordovaFile.writeFile("BisonIonic/" + $scope.fileName, new Blob([data], {type: "application/pdf"}), {"append": false})
//                    .then(function (success) {
//                        $cordovaToast.show("Successfully created your file", "short", "bottom");
//                    }, function (error) {
//                        pdfError("Failure writing file " + error)
//                    });
//            }, function (error) {
//                pdfError("Failed to create PDF: " + error);
//            }, function (update) {
//                pdfUpdate(update);
//            });
//    }, function (error) {
//        pdfError("Error making required folder: " + error)
//    });

xit("should let you enter locates", function () {
    newBoreLogState.goToLocatesModalBoreLog();
    for(var locate in locates) {
        if(locates.hasOwnProperty(locate)) {
            locatesModal.feetInput.sendKeys(locates[locate]["feet"]);
            locatesModal.inchesInput.sendKeys(locates[locate]["inches"]);
            if(locates[locate]["crossing"]) {
                locatesModal.bottomButton.click();
                locatesModal.popupInput.sendKeys(locates[locate]["crossing"]);
                locatesModal.popupEnterButton.click();
            } else {
                locatesModal.topButton.click();
            }
        }
    }
    browserHelper.scroll(locatesModal.showLocatesButton);
    locatesModal.showLocatesButton.click();
    browserHelper.scroll(mockLocatesListItems.locateListItem0);
    expect(mockLocatesListItems.locateListItem0.getText()).toEqual(verifyLocates[0]);
    browserHelper.scroll(mockLocatesListItems.locateListItem1);
    expect(mockLocatesListItems.locateListItem1.getText()).toEqual(verifyLocates[1]);
    browserHelper.scroll(mockLocatesListItems.locateListItem2);
    expect(mockLocatesListItems.locateListItem2.getText()).toEqual(verifyLocates[2]);
    browserHelper.scroll(mockLocatesListItems.locateListItem3);
    expect(mockLocatesListItems.locateListItem3.getText()).toEqual(verifyLocates[3]);
    browserHelper.scroll(mockLocatesListItems.locateListItem4);
    expect(mockLocatesListItems.locateListItem4.getText()).toEqual(verifyLocates[4]);
    newBoreLogState.saveAndQuit();
});