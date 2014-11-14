# qiita-js

browser and commonjs api client.

See definitions at `dist/qiita.d.ts`

## Install

### npm

```
npm install qiita-js
```

### bower

```
bower install qiita-js
```

## Example

```javascript
var Qiita = requrie('qiita-js');
Qiita.setToken('<your token>');
Qiita.Resources.User.get_user('mizchi').then(function(user){
	console.log(user);
})
```

## LICENSE

MIT
