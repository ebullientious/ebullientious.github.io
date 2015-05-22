'use strict';

angular.module('weddingApp')
  .controller('navController', ['$scope', '$location', function($scope, $location) {
    
    $scope.navList = [
      { url: '/main', title: 'Home'},
      { url: '/venue', title: 'Venue'},
      { url: '/story', title: 'Story'},
      { url: '/rsvp', title: 'RSVP'},
      { url: '/party', title: 'Party'},
      { url: '/tags', title: 'Tags'},
      { url: '/extras', title: 'Extras'},
    ];
    
    // navigate to initial route:
    $location.path('/main');
    
    function detectRoute() {
      angular.forEach($scope.navList, function(item) {
        item.active = $location.path().match(new RegExp(item.url)) ? true : false;
      });  
    }
    
    $scope.$on('$routeChangeSuccess', detectRoute);
  
  }]);

