'use strict';

angular.module('webApp')
    .config(function($stateProvider) {
        $stateProvider.state('portfolio', {
            url: '/dzialalnosc',
            templateUrl: 'app/portfolio/portfolio.html',
            controller: 'PortfolioController'
        });
    });
