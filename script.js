// script.js

// create the module and name it scotchApp
var weddingApp = angular.module('weddingApp', ['ngRoute']);

weddingApp.config(function($routeProvider) {
  $routeProvider
    .when('/story', {
      templateUrl : 'html/story.html',
      controller : 'storyController'
    })
    .when('/rsvp', {
      templateUrl : 'html/rsvp.html',
      controller : 'rsvpController'
    })
    .when('/venue', {
      templateUrl : 'html/venue.html',
      controller : 'venueController'
    })
    .when('/map', {
      templateUrl : 'html/map.html',
      controller : 'mapController'
    })
    .otherwise({
      templateUrl : 'html/landing.html',
      controller : 'landingController'
    })
    // .otherwise({
    //   redirectTo : '/'
    // });
});

// create the controller and inject Angular's $scope
weddingApp.controller('mainController', function($scope) {
});

weddingApp.controller('landingController', function($scope) {
});

weddingApp.controller('mapController', function($scope) {
});

weddingApp.controller('venueController', function($scope) {
});

weddingApp.controller('storyController', function($scope) {
});

weddingApp.controller('rsvpController', function($scope) {
});