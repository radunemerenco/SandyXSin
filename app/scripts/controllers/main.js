'use strict';

/**
 * @ngdoc function
 * @name sandyxSinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sandyxSinApp
 */
angular.module('sandyxSinApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
  	/*if ($location.search('pageSection')) {
  		$rootScope.gotoElement($location.search('pageSection'));
  		$location.search('pageSection', undefined);
  	}*/
    $scope.imgItems = [
    	{
    		id: 'video1_id',
    		name: 'video1_name',
    		price: '10',
    		image: 'images/gallery/album1/1.jpg'
    	}, {
    		id: 'video2_id',
    		name: 'video2_name',
    		price: '20',
    		image: 'images/gallery/album2/1.jpg'
    	}, {
    		id: 'video3_id',
    		name: 'video3_name',
    		price: '30',
    		image: 'images/gallery/album3/1.jpg'
    	}, {
    		id: 'video4_id',
    		name: 'video4_name',
    		price: '40',
    		image: 'images/gallery/album4/1.jpg'
    	}, {
    		id: 'video5_id',
    		name: 'video5_name',
    		price: '50',
    		image: 'images/gallery/album5/1.jpg'
    	}, {
    		id: 'video6_id',
    		name: 'video6_name',
    		price: '60',
    		image: 'images/gallery/album6/1.jpg'
    	},
    ];
  });
