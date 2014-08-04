'use strict';

angular.module('awesomegameApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rooms', {
        url: '/rooms',
        templateUrl: 'app/room/room.html',
        controller: 'RoomController'
      });
  });