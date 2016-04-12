'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('goEuroApp'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($MainCtrl, ) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should display ', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
