'use strict';

/**
 * @ngdoc function
 * @name weddingApp.controller:tagsController
 * @description Loads all the tags from different feeds 
 * # tagsController
 * Controller of the weddingApp
 */
angular.module('weddingApp')
  .controller('tagsController', ['$scope', 'instagram', function($scope, instagram) {
  $scope.tagItems = [];
  $scope.$watch('searchValue', function () {
    instagram.fetchRecentTag($scope.searchValue, function (data) {
      $scope.tagItems = data;
    });
  });
}]);
