# qiita-js

Qiita api v2 client for browser and commonjs.

```
npm install qiita-js
```

or

```
bower install qiita-js
```

## How to use

Get your token at https://qiita.com/settings/tokens/new at first.

```javascript
// var Qiita = requrie('qiita-js'); // require in commonjs env
Qiita.setToken('<your token>');
Qiita.Resources.User.get_user('mizchi').then(function(user){
	console.log(user);
})
```

See qiita.d.ts definitions at `dist/qiita.d.ts`

## LICENSE

MIT
