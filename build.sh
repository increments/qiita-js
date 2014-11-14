#!/usr/bin/env sh
schema-tsifier kitchen/schema.yml Qiita --with-resources > kitchen/qiita.ts
tsc -m commonjs --target es5 -d kitchen/qiita.ts
cat kitchen/qiita.js environments/browser.js > dist/qiita-browser.js
cat kitchen/qiita.js environments/commonjs.js > dist/qiita-commonjs.js
cp kitchen/qiita.d.ts dist/
