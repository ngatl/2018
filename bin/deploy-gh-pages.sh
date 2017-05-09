#!/usr/bin/env bash

cp dist/index.html dist/404.html
echo $GH_DOMAIN > dist/CNAME
ngh angular-cli-ghpages --repo=https://GH_TOKEN@github.com/$GH_USER/$GH_REPO.git --name="Travis CI" --email=travis@example.com
