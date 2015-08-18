'use strict';

/**
 * @ngdoc function
 * @name phoneshopApp.controller:PhonelistCtrl
 * @description
 * # PhonelistCtrl
 * Controller of the phoneshopApp
 */
angular.module('phoneshopApp')
  .controller('PhonelistCtrl',['$scope','$http', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/phones.json').success(function(data){
      $scope.phones=data;
    });


    $scope.orderProp='age';

  }]);
