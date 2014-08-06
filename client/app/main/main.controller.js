'use strict';

angular.module('webApp')
    .controller('MainController', function($scope, $http) {
        $scope.awesomeThings = [];

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.addThing = function() {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', {
                name: $scope.newThing
            });
            $scope.newThing = '';
        };

        $scope.myInterval = 5000;

        $scope.images = [
            'assets/images/slider/1.JPG',
            'assets/images/slider/2.JPG',
            'assets/images/slider/3.JPG'
        ];

        $scope.deleteThing = function(thing) {
            $http.delete('/api/things/' + thing._id);
        };
    });
