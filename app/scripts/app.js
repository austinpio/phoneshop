'use strict';

/**
 * @ngdoc overview
 * @name phoneshopApp
 * @description
 * # phoneshopApp
 *
 * Main module of the application.
 */
angular
  .module('phoneshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularVideoBg'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/phones',{
        templateUrl:'views/phone-list.html',
        controller: 'PhonelistCtrl',
        controllerAs:'ph'
      }
      )
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
