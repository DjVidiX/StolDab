'use strict';

describe('Controller: MainController', function () {

    // load the controller's module
    beforeEach(module('firstApp'));

    var MainController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainController = $controller('MainController', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.todos.length).toBe(3);
    });

    it('should add items to the list', function () {
        scope.todo = 'Test 1';
        scope.addTodo();
        expect(scope.todos.length).toBe(4);
    });

    it('should add then remove an item from the list', function () {
        scope.todo = 'Test 1';
        scope.addTodo();
        scope.removeTodo(0);
        expect(scope.todos.length).toBe(3);
    });
});
