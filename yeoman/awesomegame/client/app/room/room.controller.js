'use strict';

angular.module('awesomegameApp')
.controller('RoomController', function($scope, $http, RoomService, socket) {

    $scope.rooms = [];

    RoomService.getItems().then(function(response) {
        $scope.rooms = response;
    });

    $scope.addRoom = function () {
        if($scope.newRoom === '') {
            return;
        }
        $http.post('/api/rooms', { name: $scope.newRoom });

        //        RoomService.saveItem($scope.newRoom).then(function(res) {
        $scope.newRoom = '';
        //        });

    };
})