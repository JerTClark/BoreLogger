angular.module("bisonInc")
    .directive("bisonCategoryWithDescription", function (){
        return {
            restrict:"E",
            scope:{
                categoryName:"@",
                categoryDescription:"@"
            },
            template:'<div class="dark-bg bison-shrink-item">' +
                '<h1 class="bison-category bison-small-list"' +
                'on-tap="showDescription($event)"' +
                'on-click="showDescription($event)">' +
                '{{categoryName}}</h1>' +
                '<p class="bison-description popup-head hide">' +
                '{{categoryDescription}}</p></div>',
            controller: function ($scope) {
                $scope.showDescription = function ($event) {
                    angular.element($event.target).toggleClass('activated');
                    angular.element($event.target).siblings('p').slideToggle(200);
                };
            }
        }
    })
    .directive("bisonSomething2", function () {
        return {

        }
    });