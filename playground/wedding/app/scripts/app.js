'use strict';

var weddingApp = angular.module('weddingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch']);


/**
 * @ngdoc overview
 * @name weddingApp
 * @description
 * # weddingApp
 *
 * Main module of the application.
 */
weddingApp.config(function ($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl : 'views/about.html',
      controller : 'contactController'
    })
    .when('/story', {
      templateUrl : 'views/story.html',
      controller : 'storyController'
    })
    .when('/extras', {
      templateUrl : 'views/extras.html',
      controller : 'extrasController'
    })
    .when('/party', {
      templateUrl : 'views/party.html',
      controller : 'partyController'
    })
    .when('/rsvp', {
      templateUrl : 'views/rsvp.html',
      controller : 'rsvpController'
    })
    .when('/venue', {
      templateUrl : 'views/venue.html',
      controller : 'venueController'
    })
    .when('/tags', {
      templateUrl : 'views/tags.html',
      controller : 'tagsController'
    })
    .when('/main', {
      templateUrl : 'views/main.html',
      controller : 'mainController'    
    })
    .when('/thanks', {
      templateUrl : 'views/thanks.html'
    })
    .otherwise({
      templateUrl : 'views/main.html',
      controller : 'mainController'
    });
  });
