var app = angular.module("myApp", []);


app.service("myListService", function ($http) {
    this.getData = function (x) {
        var config = {
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + x, config);
    }


});

app.controller("ctrl", function ($scope, myListService) {

    $scope.loadData = function () {


        myListService.getData($scope.target).then(function (response) {
                console.log(response.data);
                $scope.list = response.data;
            },
            function (error) {
                console.log(error);
            });
    }


});