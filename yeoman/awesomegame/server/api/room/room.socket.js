/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var room = require('./room.model');

exports.register = function(socket) {
  room.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  room.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('room:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('room:remove', doc);
}