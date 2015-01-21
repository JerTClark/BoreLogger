angular.module("IndexModule", []).controller("IndexController", function($scope){
    $scope.doc_title = "Bison, Inc.";
    $scope.subtitleOne = "Horizontal Directional Drilling";
    $scope.address = "Gainesville, VA";
    $scope.phone = "(703) 754-4190";
    $scope.email = "bisoninc@outlook.com";
    $scope.subtitleTwo = "Specializing in rock.";

    $scope.mock = "Nulla facilisi. Ut porttitor sollicitudin nisi, tempus pulvinar nisl volutpat aliquet. Phasellus posuere auctor accumsan. Ut in odio eget dui pulvinar sollicitudin. Sed vitae tortor nibh. Aenean nec sapien quam, sit amet dapibus lorem. Phasellus ac pharetra tellus. Curabitur pretium eros sit amet nisl pretium mollis."

    $scope.navigation = [
        {name: "About", link: "/borelogger"},
        {name: "People", link: "/borelogger"},
        {name: "Stuff", link: "/borelogger"},
        {name: "Blog", link: "/borelogger"}
    ];

    $scope.indexContents = [
        {header:"Content Part I", contents: $scope.mock},
        {header:"Content Part II", contents: $scope.mock},
        {header:"Content Part III", contents: $scope.mock}
    ];

    $scope.indexAside = [
        {category:"Apps", list: [
            {name: "BoreLogger", link:"/borelogger"},
            {name: "MudMixer", link:"/"}
        ]},
        {category:"Resources", list: [
            {name: "DitchWitch", link: "http://www.ditchwitch.com"},
            {name: "Baroid", link: "http://www.baroididp.com/idp/default.page"}
        ]}
    ];
});