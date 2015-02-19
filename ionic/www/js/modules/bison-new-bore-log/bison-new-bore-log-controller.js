angular.module("bisonInc").controller('NewBoreLogController',
    ["$scope", "$timeout", "$ionicModal", "bisonService",
    function ($scope, $timeout, $ionicModal, bisonService) {
        //-- Categories of information pertaining to a bore log
        $scope.boreLogModel = [
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
                hint: "Linear feet (Drill pipe length)",
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

        //-- On submission of General Info
        $scope.submitGeneralInfo = function () {
            bisonService.setActiveLog({
                type: bisonService.getType(),
                customer: $scope.boreLogModel[0].value,
                conduit: $scope.boreLogModel[1].value,
                location: $scope.boreLogModel[2].value,
                length: $scope.boreLogModel[3].value,
                date: bisonDate(),
                locates: []
            });
            console.log(JSON.stringify(bisonService.getActiveLog()));
        };

        //Messing with the terrible JavaScript date accommodations
        var bisonDate = function () {
            var dateToParse =
                bisonService.getType() === "journal" ?
                    new Date().format("M d Y H m s") :
                    new Date($scope.boreLogModel[4].value)
                        .format("M d Y H m s");
            var dateArray = dateToParse.toString().split(" ");
            return {
                originalDate: dateToParse,
                month:dateArray[0],
                date:dateArray[1],
                year:dateArray[2],
                hour:dateArray[3],
                minute:dateArray[4],
                second:dateArray[5],
                bisonDateToString: function () {
                    return this.month + ". " + this.date + ", " +
                        this.year;
                },
                bisonTimeToString: function () {
                    return this.hour + ":" + this.minute + ":" + this.second;
                }
            };
        };

        //-- TODO UI transitions (should move to a <script> tag)
        $scope.showDescription = function ($event) {
            angular.element($event.target).toggleClass('activated');
            angular.element($event.target).siblings('p').slideToggle(200);
        };
        $scope.activate = function ($event, button) {
            var elem = angular.element($event.target);
            elem.addClass('emphasis');
            $timeout(function () {
                elem.removeClass('emphasis');
            }, 2000)
        };

        //-- Ionic Modal
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
    }]);