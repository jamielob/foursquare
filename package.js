Package.describe({
  name: 'oleh:foursquare',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for searching places with Foursquare API',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/OlehZymnytskiy/foursquare.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.use('underscore');
  api.use('http');
  api.use('check');

  api.addFiles('foursquare-client.js', 'client');
  api.addFiles('foursquare-server.js', 'server');

  if(api.export)
    api.export('Foursquare');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('oleh:foursquare');
  api.addFiles('foursquare-tests.js');
});
