'use strict';

/**
 * @ngdoc function
 * @name phoneshopApp.controller:PhonedetailCtrl
 * @description
 * # PhonedetailCtrl
 * Controller of the phoneshopApp
 */
angular.module('phoneshopApp')
  .controller('PhonedetailCtrl',['$scope','$routeparams', function ($scope,$routeparams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.phoneId=$routeparams.$phoneId;
  }]);
