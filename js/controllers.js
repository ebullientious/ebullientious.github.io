
// create the controller and inject Angular's $scope
weddingApp.controller('mainController', function($scope) {
});

weddingApp.controller('navController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  }
});

weddingApp.controller('contactController', function($scope) {
})

weddingApp.controller('landingController', function($scope) {
  $scope.init = function ($element) {
    $element.isLoaded = true;
  }
});

weddingApp.controller('mapController', function($scope) {
});

weddingApp.controller('venueController', function($scope) {
});

weddingApp.controller('storyController', function($scope) {
});

weddingApp.controller('registryController', function($scope) {
})

weddingApp.controller('rsvpController', ['$scope', 'rsvpService', function($scope, rsvpService) {
  $scope.user = {};
  $scope.addRSVP = function () {
    var user = $scope.user;
    rsvpService.addRSVP({firstName: user.firstName, lastName: user.lastName, email: user.email});
  }
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
});