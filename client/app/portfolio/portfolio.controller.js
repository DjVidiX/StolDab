'use strict';

angular.module('webApp')
    .controller('PortfolioController', function($scope, ProductService) {

        ProductService.getAllProducts()
            .then(function(response) {
                $scope.bramy = response;
            });

        $scope.bramy = [{
            imagePath: '/assets/images/slider/1.JPG'
        }];

    });
