var initialized = false;
var fs_config = {};

Foursquare = {
  init: function(config) {
    check(config, Object);
    check(config.id, String);
    check(config.secret, String);

    _.extend(fs_config, config);

    initialized = true;
  }
};

Meteor.methods({
  'foursquare-search': function(config) {
    check(config, Object);
    check(config.query, String);
    check(config.ll, String);

    if(fs_config.authOnly && !this.userId)
      throw new Meteor.Error('Permission denied');

    var result, query = {
      client_id: fs_config.id,
      client_secret: fs_config.secret,
      v: 20130815
    };

    _.extend(config, query);

    console.log(query);

    try {
      result = HTTP.get('https://api.foursquare.com/v2/venues/search', {
        params: config,
        timeout: 20000
      });
    } catch(error) {
      return error;
    }

    return result.data;
  }
});
