// script.js

// create the module and name it scotchApp
var weddingApp = angular.module('weddingApp', ['ngRoute', 'd3']);

weddingApp.config(function($routeProvider) {
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

weddingApp.controller('contactController', function($scope) {
})

weddingApp.controller('landingController', function($scope) {
});

weddingApp.controller('mapController', function($scope) {
});

weddingApp.controller('venueController', function($scope) {
});

weddingApp.controller('storyController', function($scope) {
});

weddingApp.controller('registryController', function($scope) {
})

weddingApp.controller('rsvpController', function($scope) {
});

weddingApp.controller('tagsController', ['$scope', 'instagram', function($scope, instagram) {
  $scope.tagItems = [];
  $scope.$watch('searchValue', function () {
    instagram.fetchRecentTag($scope.searchValue, function (data) {
      $scope.tagItems = data;
    });
  });
}]);

weddingApp.controller('weddingPartyController', function($scope) {
  $scope.data = [
    {name: "Greg", score: 98},
    {name: "Ari", score: 96},
    {name: 'Q', score: 75},
    {name: "Loser", score: 48}
  ];
});