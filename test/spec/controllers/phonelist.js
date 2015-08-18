'use strict';

describe('Controller: PhonelistCtrl', function () {

  // load the controller's module
  beforeEach(module('phoneshopApp'));

  var PhonelistCtrl,scope,$httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_) {

    $httpBackend=_$httpBackend_;

    $httpBackend.expectGET('data/phones.json').respond([{'name':'Nexus S'},{'name':'sony xperia'}]);
    scope = $rootScope.$new();
    PhonelistCtrl = $controller('PhonelistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should check phone list',function(){
    expect(scope.phones.length).toBe(4);
  });

  it('default should be age',function(){expect(scope.orderProp).toBe('age');});

  it('should pull list of phones XHR',function(){
    expect(scope.phones).toBeUndefined();

    $httpBackend.flush();

    expect(scope.phones).toEqual([{'name':'Nexus S'},{'name':'sony xperia'}]);
  });

});
