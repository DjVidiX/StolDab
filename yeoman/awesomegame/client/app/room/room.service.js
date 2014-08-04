'use strict';

angular.module('awesomegameApp')
.factory('RoomService', function ($resource) {

    var RoomService,
        Rooms = $resource('/api/rooms'),
        RoomSave = $resource('/api/rooms');

    RoomService = {
        getItems : function() {
            return Rooms.query().$promise;
        },

        saveItem : function(item) {
            return Rooms.post(item).$promise;
        }
    }

    return RoomService;
})