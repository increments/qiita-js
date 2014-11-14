# qiita-js

Qiita api v2 client for browser and commonjs.

```
npm install qiita-js
```

or

```
bower install qiita-js
```

Now browser client needs `window.jQuery` to request to server.
I will remove this dependency later but not yet. Sorry...

## How to use

Get your token at https://qiita.com/settings/tokens/new at first.

```javascript
// require in commonjs env
var Qiita = require('qiita-js');

// set your token
Qiita.setToken('<your token>');

// fetch resources!
Qiita.Resources.User.get_user('mizchi').then(function(user){
	console.log(user);
})
```

See qiita.d.ts definitions at `dist/qiita.d.ts`

## How to test

Use your token.

```
echo '{"token": "your token"}' > test/token.json
npm test
```

## LICENSE

MIT
