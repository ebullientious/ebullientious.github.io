weddingApp.factory('instagram', ['$http', function ($http) {
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
}]);