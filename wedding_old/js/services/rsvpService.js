
weddingApp.factory('rsvpService', function () {
  var fireBase = new Firebase('https://fiery-fire-3249.firebaseio.com/rsvp');
  return {
    addRSVP: function (rsvp) {
      fireBase.push(rsvp);
    }
  };
});
