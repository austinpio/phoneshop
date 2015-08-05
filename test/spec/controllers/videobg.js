'use strict';

describe('Controller: VideobgCtrl', function () {

  // load the controller's module
  beforeEach(module('phoneshopApp'));

  var VideobgCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideobgCtrl = $controller('VideobgCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VideobgCtrl.awesomeThings.length).toBe(3);
  });
});
