NAME=$(basename $(find ./dist-server -name \*.js))
cp src/server.tmpl.ts src/server.ts
sed -i -- "s/SERVER_BUNDLE_FILENAME/$NAME/g" src/server.ts
find ./dist -name \*.js -exec cp {} dist-server \;
