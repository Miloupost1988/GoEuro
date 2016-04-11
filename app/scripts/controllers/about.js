'use strict';

/**
 * @ngdoc function
 * @name goEuroApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the goEuroApp
 */
angular.module('goEuroApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
