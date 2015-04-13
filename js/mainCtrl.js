var app = angular.module('friendsList');

app.controller('mainCtrl', function ($scope) {
    $scope.friends = ['John', 'Mary', 'Steve', 'Tim'];

    $scope.addFriend = function () {
        $scope.friends.push($scope.name);
        $scope.name = '';
    }
});