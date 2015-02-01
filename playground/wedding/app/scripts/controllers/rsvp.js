'use strict';

/**
 * @ngdoc function
 * @name weddingApp.controller:rsvpController
 * @description
 * # rsvpController
 * Controller of the weddingApp
 */
angular.module('weddingApp')
  .controller('rsvpController', ['$scope', '$location', 'formService', function ($scope, $location, formService) {
    $scope.formData = {
      firstName: '',
      lastName: '',
      attending: '',
      email: '',
      comments: '',
      songRequests: '',
      numberOfPeopleAttending: ''
    };

    $scope.submit = function() {
      formService.postMessage(
        $scope.formData
      )
      // .success(function() {
      //     console.log('Success!');
      //   }
      // )
      // .error(function() {
      //     console.log('Failure!');
      //   }
      // );

      $location.path('/thanks');
    };
  }]);