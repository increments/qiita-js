#!/usr/bin/env sh
./node_modules/.bin/schema-tsifier kitchen/schema.yml Qiita --with-resources > kitchen/qiita.ts
./node_modules/.bin/tsc --target es5 -d kitchen/qiita.ts
browserify -t coffeeify --extension=".coffee" src/index.coffee -o dist/qiita.js
