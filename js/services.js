
// http://www.ng-newsletter.com/posts/d3-on-angular.html
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
      }
      scriptTag.onload = onScriptLoad;
      var s = $document[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);

      return {
        d3: function() { return d.promise; }
      };
}]);

weddingApp.factory('rsvpService', function () {
  var fireBase = new Firebase('https://fiery-fire-3249.firebaseio.com/rsvp');
  return {
    addRSVP: function (rsvp) {
      fireBase.push(rsvp);
    }
  }
});

weddingApp.factory('instagram', ['$http', function ($http) {
  return {
    fetchRecentTag: function (tag, callback) {
      var tag = tag || 'pugs';
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
}]);