'use strict';

/**
 * @ngdoc function
 * @name yoTest1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTest1App
 */
angular.module('yoTest1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
