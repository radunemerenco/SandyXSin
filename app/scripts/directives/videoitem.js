'use strict';

/**
 * @ngdoc directive
 * @name sandyxSinApp.directive:videoItem
 * @description
 * # videoItem
 */
angular.module('sandyxSinApp')
  .directive('videoItem', function ($rootScope) {
    return {
      templateUrl: 'partials/videoitem.html',
      restrict: 'E',
      scope: {
      	item: '='
      },
      link: function postLink(scope) {
      	scope.openModal = function () {
      		$rootScope.modalItem = scope.item;
      	}
      }
    };
  });
