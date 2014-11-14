#!/usr/bin/env sh
./node_modules/.bin/schema-tsifier kitchen/schema.yml Qiita --with-resources > kitchen/qiita.ts
./node_modules/.bin/tsc --target es5 -d kitchen/qiita.ts
cat kitchen/qiita.js environments/browser.js > dist/qiita-browser.js
cat kitchen/qiita.js environments/commonjs.js > dist/qiita-commonjs.js
cp kitchen/qiita.d.ts dist/
