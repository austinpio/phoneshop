'use strict';

/**
 * @ngdoc function
 * @name phoneshopApp.controller:PhonelistCtrl
 * @description
 * # PhonelistCtrl
 * Controller of the phoneshopApp
 */
angular.module('phoneshopApp')
  .controller('PhonelistCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.phones=[
    {'name':'Nexus S','snippet':'google phone'},
    {'name':'Moto E','snippet':'Motorola phone dhummel'}
    ];

  });
