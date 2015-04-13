var app = angular.module('friendsList');

app.controller('mainCtrl', function ($scope) {
    $scope.friends = ['John', 'Mary', 'Steve', 'Tim'];
});