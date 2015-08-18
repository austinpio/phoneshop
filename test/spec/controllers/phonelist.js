'use strict';

describe('Controller: PhonelistCtrl', function () {

  // load the controller's module
  beforeEach(module('phoneshopApp'));

  var PhonelistCtrl,scope,$httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhonelistCtrl = $controller('PhonelistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhonelistCtrl.awesomeThings.length).toBe(3);
  });

  it('should check phone list',function(){expect(scope.phones.length).toBe(4);});

  it('default should be age',function(){expect(scope.orderProp).toBe('age');});
});
