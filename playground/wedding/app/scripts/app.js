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
    .when('/contact', {
      templateUrl : 'views/contact.html',
      controller : 'contactController'
    })
    .when('/story', {
      templateUrl : 'views/story.html',
      controller : 'storyController'
    })
    .when('/registry', {
      templateUrl : 'views/registry.html',
      controller : 'registryController'
    })
    // .when('/weddingParty', {
    //   templateUrl : 'views/weddingParty.html',
    //   controller : 'weddingPartyController'
    // })
    .when('/rsvp', {
      templateUrl : 'views/rsvp.html',
      controller : 'rsvpController'
    })
    .when('/registry', {
      templateUrl : 'views/registry.html',
      controller : 'registryController'
    })
    .when('/venue', {
      templateUrl : 'views/venue.html',
      controller : 'venueController'
    })
    .when('/tags', {
      templateUrl : 'views/tags.html',
      controller : 'tagsController'
    })
    .when('/', {
      templateUrl : 'views/main.html',
      controller : 'mainController'    
    })
    .otherwise({
      templateUrl : 'views/main.html',
      controller : 'mainController'
    });

  });
