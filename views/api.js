/**
 * Created by mike on 2016-03-30.
 */
alert(document.getElementById("test").value);

var app = angular.module('myApp', []);
app.controller('search', function($scope, $http) {
    /*$scope.showMe = false;
     $scope.myFunc = function() {
     $scope.showMe = !$scope.showMe;
     }//*/
    $scope.count = 5;
    $scope.result = {};
    $scope.searchRestaurant = function(searchInput) {

        alert(searchInput);

    }
});