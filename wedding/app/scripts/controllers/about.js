'use strict';

/**
 * @ngdoc function
 * @name weddingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weddingApp
 */
angular.module('weddingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
