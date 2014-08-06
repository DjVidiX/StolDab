'use strict';

angular.module('webApp')
    .factory('ProductService', function($resource) {
        var AllProducts = $resource('/api/products'),

            ProductService = {
                getAllProducts: function() {
                    return AllProducts.query({method: 'GET'}).$promise;
                }
            };

        return ProductService;
    });
