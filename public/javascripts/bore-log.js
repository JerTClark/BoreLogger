var boreLogModule = angular.module("BoreLogModule", []);
boreLogModule.controller("BoreLogController", function ($scope) {
    $scope.myLogger = function () {
        console.log("click");
    };

    $scope.boreLogModels = [
        {title:"Customer", hint:"Who was the job for", model: $scope.customerName},
        {title: "Conduit", hint:"(No.) Size Type", model: $scope.conduit}
    ];

    $scope.boreLog = [{
        customerName: " ",
        conduit: " ",
        location: " ",
        lengthOfBore: " ",
        date: "",
        locates: []
    }];

    $scope.customerName = " ";
    $scope.conduit = "";
    $scope.location = "";
    $scope.lengthOfBore = "";
    $scope.date = "";
    $scope.locates = [];

    var toggleContent = function () {
        jQuery(".content").toggleClass("outro");
        jQuery("#scratchPad").toggleClass("hidden");
    };

    $scope.customerPrompt = function () {
        console.log("customerPrompt called");
        toggleContent();
        var ngMod = "ng-model='customerName'";
        //$scope.mod = "customerName";
        //jQuery("#prompt_value1").attr("ng-model", "customerName");
        var prompt = new CustomPrompt(ngMod, "Customer", "Who&#32;is&#32;this&#32;job&#32;for?", customer, toggleContent, $scope);
        prompt.render();
    };

    var customer = function (userInput) {
        $scope.customerName = "Customer: " + userInput;
        console.log(userInput + " " + $scope.customerName);
        var ngMod = "ng-model=\"conduit\"";
        setTimeout(function () {
            var prompt = new CustomPrompt(ngMod, "Conduit", "(No.)&#32;Size&#32;Kind",
                description, toggleContent);
            prompt.render();
        }, 100);
    };
    var description = function (userInput) {
        //self.conduit = "Description: " + userInput;
        setTimeout(function () {
            Prompt.render("Location", "Location&#32;of&#32;the&#32;job", location, toggleContent);
        }, 100);
    };
    var location = function (userInput) {
        self.location = "Location: " + userInput;
        setTimeout(function () {
            Prompt.render("Length&#32;of&#32;bore", "Total&#32;footage&#32;(length&#32;of&#32;rods)", lengthOfBore, toggleContent);
        }, 100);
    };
    var lengthOfBore = function (userInput) {
        self.length = "Length of Bore: " + userInput;
        self.date = "Date: " + new Date(Date.now());
        var message = self.customerName + "<br>" +
            self.date + "<br>" + self.location + "<br>" +
            self.conduit + "<br>" + self.length;
        setTimeout(function () {
            MyAlert.render("Bore summary", message, otherCrap);
        }, 100);
    };
    var otherCrap = function () {
        setTimeout(function () {
            window.localStorage.setItem(self.date + "-" + self.location, JSON.stringify(self));
            MyAlert.render("The rest is yet to come", "Someday...", toggleContent);
        }, 100);
    }
});