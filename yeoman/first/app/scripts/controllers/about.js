'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firstApp
 */
angular.module('firstApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
