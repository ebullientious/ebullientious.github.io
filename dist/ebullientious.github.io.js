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
;
// create the controller and inject Angular's $scope
weddingApp.controller('mainController', function($scope) {
});

weddingApp.controller('navController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
});

weddingApp.controller('contactController', function($scope) {
});

weddingApp.controller('landingController', function($scope) {
  $scope.init = function ($element) {
    $element.isLoaded = true;
  };
});

weddingApp.controller('mapController', function($scope) {
});

weddingApp.controller('venueController', function($scope) {
});

weddingApp.controller('storyController', function($scope) {
});

weddingApp.controller('registryController', function($scope) {
});

weddingApp.controller('rsvpController', ['$scope', 'rsvpService', function($scope, rsvpService) {
  $scope.user = {};
  $scope.addRSVP = function () {
    var user = $scope.user;
    rsvpService.addRSVP({firstName: user.firstName, lastName: user.lastName, email: user.email});
  };
}]);

weddingApp.controller('tagsController', ['$scope', 'instagram', function($scope, instagram) {
  $scope.tagItems = [];
  $scope.$watch('searchValue', function () {
    instagram.fetchRecentTag($scope.searchValue, function (data) {
      $scope.tagItems = data;
    });
  });
}]);

weddingApp.controller('weddingPartyController', function($scope) {
});;// http://www.ng-newsletter.com/posts/d3-on-angular.html
weddingApp.directive('packedCircle', ['$window', '$timeout', 'd3Service', 
  function($window, $timeout, d3Service) {
    return {
      restrict: 'EA',
      scope: {
        data: '=',
        label: '@',
        onClick: '&'
      },
      link: function (scope, element, attrs) {
        d3Service.d3().then(function(d3) { // Start d3Service function
        var diameter = 700;
        var pack = d3.layout.pack()
          .size([diameter - 4, diameter - 4])
          .value(function(d) { return d.size; });

        var svg = d3.select(element[0]).append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .append("g")
              .attr("transform", "translate(0,0)");

        d3.json("js/weddingPartyData.json", function(error, root) { // Start creating nodes
          var node = svg.datum(root).selectAll(".node") // Bind data to all nodes
              .data(pack.nodes)
              .enter()
                .append("g")
                  .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
                  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

          node.append("title")
              .text(function(d) { return d.name + (d.children ? "" : ": " + d.role); });

          node.filter(function(d) {  return !d.image; }) // Draw circles if there aren't any images
            .append("circle")
              .attr("r", function(d) { return d.r; })
              .attr("class", function(d) { return d.className; });

          node.filter(function(d) {  return d.image; }) // Only attach nodes that have images
            .append("svg:image")
              .attr("xlink:href", function (d) { return d.image; })
              .attr("width", function(d) { return d.r * 2; })
              .attr("height", function(d) { return d.r * 2; })
              .attr("transform", function(d) { return "translate(-" + d.r + ",-" + d.r + ")"; })
              .style("preserveAspectRatio", "xMidyMid slice")
              .attr("class", "mask-headshot");
          }); // End creating nodes
        
        });
      } // End d3Service function
    };
}]);;// http://www.ng-newsletter.com/posts/d3-on-angular.html
var d3 = angular.module('d3', []);
d3.factory('d3Service', ['$document', '$q', '$rootScope',
  function($document, $q, $rootScope) {
    var d = $q.defer();
    function onScriptLoad() {
      // Load client in the browser
      $rootScope.$apply(function() { 
        d.resolve(window.d3); 
      });
    }
    // Create a script tag with d3 as the source
    // and call our onScriptLoad callback when it
    // has been loaded
    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript'; 
    scriptTag.async = true;
    scriptTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.2/d3.min.js';
    scriptTag.onreadystatechange = function () {
      if (this.readyState == 'complete') {
        onScriptLoad();
      }
    };
    scriptTag.onload = onScriptLoad;
    var s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);

    return {
      d3: function() { return d.promise; }
    };
}]);
;weddingApp.factory('instagram', ['$http', function ($http) {
  return {
    fetchRecentTag: function (searchTag, callback) {
      var tag = searchTag || 'pugs';
      var base = 'https://api.instagram.com/v1';
      var request = '/tags/' + tag + '/media/recent';
      var clientId = '523902333d6345938f4f9eeb92f8c3d8';
      var url = base + request;
      var config = {
        'params': {
          'client_id': clientId,
          'count': 16,
          'callback': 'JSON_CALLBACK'
        }
      };

      $http.jsonp(url, config).success(function(response) {
        callback(response.data);
      });
    }
  };
}]);;
weddingApp.factory('rsvpService', function () {
  var fireBase = new Firebase('https://fiery-fire-3249.firebaseio.com/rsvp');
  return {
    addRSVP: function (rsvp) {
      fireBase.push(rsvp);
    }
  };
});
