var boreLogModule = angular.module("BoreLogModule", []);
boreLogModule.controller("BoreLogController", function ($scope) {
    var self = this;

    //-- Container for View
    $scope.fields = [];

    //-- list of locates
    $scope.locates = [];

    //-- Variable to hold title values
    $scope.scratchpadTitle = "BoreLogger";

    $scope.myLogger = function () {
        console.log("click");
    };

    //-- Categories of information pertaining to a bore log
    $scope.boreLogModel = [
        {title:"Customer", hint:"Who the job was for", value: "", type:"text"},
        {title: "Conduit", hint:"(No.) Size Type", value: "", type:"text"},
        {title: "Location", hint:"Location of the job", value: "", type:"text"},
        {title: "Length of bore", hint:"Linear feet (Drill pipe length)", value: "", type:"text"},
        {title: "Date", hint: "Select a date", value: "", type: "date"}
    ];

    //-- Categories of information pertaining to a bore log
    $scope.boreJournalModel = [
        {title:"Customer", hint:"Who the job was for", value: "", type:"text"},
        {title: "Location", hint:"Location of the job", value: "", type:"text"}
    ];

    $scope.optionCatgories = [
        {title: "Bore Log", description: "Create a bore log for a completed bore",
            buttons: [
                {name:"Create", func: "newBoreLog()", code: 0},
                {name:"Continue", func:"", code: 1}
            ]},
        {title: "Bore Journal", description: "Create or continue a bore journal (ongoing bore) or convert an existing bore journal into a finalized bore log",
            buttons: [
                {name:"Create", func:"", code: 2},
                {name:"Continue", func:"", code: 3},
                {name:"Convert", func:"", code: 4}
            ]},
        {title: "Create PDF", description: "Select a bore log file and create a PDF from that file",
            buttons: [
                {name:"Create", func:"", code: 5}
            ]},
        {title: "Browse Files", description: "Choose from the file types below",
            buttons: [
                {name:"Logs", func:"", code: 6},
                {name:"Journals", func:"", code: 7},
                {name:"PDFs", func:"", code: 8}
            ]}
    ];

    //-- Detect button press from options
    $scope.options = function(choice){
        switch (choice){
            case 0:
                $scope.newBoreLog();
                break;
            case 2:
                $scope.newBoreJournal();
                break;
            default :
                $scope.myLogger();
                break;
        }
    };

    $scope.newBoreLog = function () {
        $scope.fields = $scope.boreLogModel;
        $scope.scratchpadTitle = "New Bore Log";
        toggleContent();
    };

    $scope.newBoreJournal = function() {
        $scope.fields = $scope.boreJournalModel;
        $scope.scratchpadTitle = "New Bore Journal";
        toggleContent();
    };

    $scope.dismissDialog = function(){
        $scope.scratchpadTitle = "BoreLogger";
        toggleContent();
    }

});