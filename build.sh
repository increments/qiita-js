#!/usr/bin/env sh
schema-tsifier kitchen/schema.yml Qiita --with-resources > kitchen/qiita.ts
tsc -m commonjs --target es5 kitchen/qiita.ts
cat kitchen/qiita.js jquery-client.js > dist/qiita-jquery.js
