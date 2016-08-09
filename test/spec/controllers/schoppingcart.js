'use strict';

describe('Controller: SchoppingcartCtrl', function () {

  // load the controller's module
  beforeEach(module('sandyxSinApp'));

  var SchoppingcartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchoppingcartCtrl = $controller('SchoppingcartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SchoppingcartCtrl.awesomeThings.length).toBe(3);
  });
});
