# qiita-js

[Qiita](http://qiita.com/) api v2 client for browser and commonjs.

Read API detail at http://qiita.com/api/v2/docs or see `dist/qiita.d.ts` as typescript definitions.

```
npm install qiita-js
```

or

```
bower install qiita-js
```

Now browser client needs `window.jQuery` to request to server.
I will remove this dependency later but not yet. Sorry...

## How to try

Get your token from https://qiita.com/settings/tokens/new

```javascript
// Require promise and fetch
global.Promise = require('bluebird');
require('isomorphic-fetch')

// require in commonjs env
var Qiita = require('qiita-js');

// set your token
Qiita.setToken('<your token>');
Qiita.setEndpoint('<your team domain || https://qiita.com>');

// fetch resources!
Qiita.Resources.User.get_user('mizchi')
.then(function(user){
	console.log(user);
});
```

## How to test

Use your token to run tests.

```
echo '{"token": "your token"}' > test/token.json
npm test
```

## LICENSE

MIT
