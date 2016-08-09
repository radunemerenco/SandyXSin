'use strict';

/**
 * @ngdoc directive
 * @name sandyxSinApp.directive:portfolioModal
 * @description
 * # portfolioModal
 */
angular.module('sandyxSinApp')
  .directive('portfolioModal', function ($rootScope) {
    return {
      templateUrl: 'partials/portfoliomodal.html',
      restrict: 'E',
      scope: {
      	item: '='
      },
      link: function postLink(scope) {
      	$rootScope.$watch('modalItem', function (newVal, oldVal) {
      		if (newVal && newVal !== oldVal) {
      			scope.item = newVal;
      		}
      	});
      }
    };
  });
