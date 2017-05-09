#!/usr/bin/env bash

npm i --silent -g angular-cli-ghpages

cp dist/index.html dist/404.html
echo $GH_DOMAIN > dist/CNAME
ngh angular-cli-ghpages --no-silent --repo=https://GH_TOKEN@github.com/$GH_USER/$GH_REPO.git --name="Travis CI" --email=travis@example.com
