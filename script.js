// script.js

// create the module and name it scotchApp
var weddingApp = angular.module('weddingApp', ['ngRoute', 'd3', 'firebase']);

weddingApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/contact', {
      templateUrl : 'html/contact.html',
      controller : 'contactController'
    })
    .when('/story', {
      templateUrl : 'html/story.html',
      controller : 'storyController'
    })
    .when('/registry', {
      templateUrl : 'html/registry.html',
      controller : 'registryController'
    })
    .when('/weddingParty', {
      templateUrl : 'html/weddingParty.html',
      controller : 'weddingPartyController'
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
    .when('/tags', {
      templateUrl : 'html/tags.html',
      controller : 'tagsController'
    })
    .when('/', {
      templateUrl : 'html/landing.html',
      controller : 'landingController'    
    })
    .otherwise({
      templateUrl : 'html/landing.html',
      controller : 'landingController'
    });
    // .otherwise({
    //   redirectTo : '/'
    // });
  // TODO: Resolve localhost issue to enable the pretty urls 
  // $locationProvider.html5Mode(true);
});
