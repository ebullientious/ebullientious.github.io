'use strict';

/* http://codepen.io/anon/pen/GHbIl */

angular.module('weddingApp')
  .factory('instagram', ['$resource', function($resource){

  return {
    fetchRecentTag: function(tag, callback){
      var api = $resource('https://api.instagram.com/v1/tags/:tag/media/recent/?client_id=:clientId&callback=JSON_CALLBACK', {
          clientId: '523902333d6345938f4f9eeb92f8c3d8',
          tag: tag
        }, {
          fetch: {
            method: 'JSONP'
          }
        });
      console.log(api);
      api.fetch(function (response) {
        callback(response.data);
      });
    }
  };

}]);