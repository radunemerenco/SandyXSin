'use strict';

/**
 * @ngdoc directive
 * @name sandyxSinApp.directive:imgItem
 * @description
 * # imgItem
 */
angular.module('sandyxSinApp')
  .directive('imgItem', function ($rootScope) {
    return {
      templateUrl: 'partials/imgitem.html',
      restrict: 'E',
      scope: {
      	item: '='
      },
      link: function postLink(scope) {
      	scope.openModal = function () {
      		$rootScope.modalItem = scope.item;
      	};
      }
    };
  });
