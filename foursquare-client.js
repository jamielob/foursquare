// Write your package code here!

Foursquare = {
  find: function(options, callback) {
    Meteor.call('foursquare-search', options, function(error, data) {
      callback(error, data);
    });
  }
};
