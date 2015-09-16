#Server:

```
Foursquare.init({
  id: 'CLIENT_ID',
  secret: 'CLIENT_SECRET',
  authOnly: false // need auth for using or no?
});
```

#Client:

```
Foursquare.find(params, function(error, result) {
  // your callback
});
```

For example:

```
var params = {};
params.query = 'Nopalito';
params.near = 'San Francisco, CA';
Foursquare.find(params, function(error, result) {
  console.log(result);
});
```

See params on https://developer.foursquare.com/docs/venues/search

result is array of venues
