'use strict';

// From http://stackoverflow.com/questions/27101145/mock-backend-server-google-forms-in-angurjs

angular.module('weddingApp')
  .factory('formService', ['$http', function ($http) {
    var myFormService = {};

    myFormService.postMessage = function (formData) {
      $http.jsonp(
          'https://docs.google.com/forms/d/1DvZP2Ns1EfG6XjvdPLFDSrL5lTXevYsHJ_Ubh7yAcuQ/formResponse?'+
          'entry.968907602=' + formData.firstName +
          '&entry.251731624=' + formData.lastName +
          '&entry.543364464=' + formData.attending +
          '&entry.1659833932=' + formData.email +
          '&entry.763506774=' + formData.numberOfPeopleAttending +
          '&entry.891110319=' + formData.songRequests  +
          '&entry.1503585619=' + formData.comments
      );
    };
    console.log(myFormService);
    return myFormService;
  }]);
