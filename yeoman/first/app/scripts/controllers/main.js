'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstApp
 */
angular.module('firstApp')
.controller('MainController', function ($scope) {
    $scope.todos = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
});
