'use strict';

/**
 * @ngdoc overview
 * @name firstApp
 * @description
 * # firstApp
 *
 * Main module of the application.
 */
angular
.module('firstApp', [
    'ngRoute',
    'ui.sortable'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
