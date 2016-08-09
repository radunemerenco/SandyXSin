'use strict';

describe('Directive: portfolioModal', function () {

  // load the directive's module
  beforeEach(module('sandyxSinApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<portfolio-modal></portfolio-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the portfolioModal directive');
  }));
});
