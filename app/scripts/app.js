'use strict';

/**
 * @ngdoc overview
 * @name sandyxSinApp
 * @description
 * # sandyxSinApp
 *
 * Main module of the application.
 */
angular
  .module('sandyxSinApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngCart'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/shoppingcart', {
        templateUrl: 'views/shoppingcart.html',
        controller: 'ShoppingcartCtrl',
        controllerAs: 'shoppingCart'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
  });
