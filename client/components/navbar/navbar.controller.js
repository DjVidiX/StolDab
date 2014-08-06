'use strict';

angular.module('webApp')
.controller('NavbarController', function ($scope, $state, $location, Auth) {
    $scope.menu = [
        {
            'title': 'Home',
            'state': 'main'
        },
        {
            'title': 'Działalność',
            'state': 'portfolio'
        }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function () {
        Auth.logout();
        $location.path('/login');
    };

    $scope.isActive = function (route) {
        return route === $location.path();
        // return true;
    };
});
