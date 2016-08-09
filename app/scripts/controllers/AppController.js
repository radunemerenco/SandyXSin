'use strict';

/**
 * @ngdoc function
 * @name sandyxSinApp.controller:AppctrlCtrl
 * @description
 * # AppctrlCtrl
 * Controller of the sandyxSinApp
 */
angular.module('sandyxSinApp')
  .controller('AppController', function ($scope, $rootScope, $location, anchorSmoothScroll) {

    $scope.gotoElement = $rootScope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');
 
      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);
      
    };
    $scope.gotoPage = $rootScope.gotoPage = function (pageLink, pageElement) {
      if ($location.path() !== pageLink) {
        $location.path(pageLink);
        if (pageElement) {
          $scope.$on('$viewContentLoaded', function(){
          $scope.gotoElement(pageElement)
        });
        }
      } else if (pageElement) {
        $scope.gotoElement(pageElement)
      }
    };
  });
