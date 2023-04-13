#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin https://github.com/Yinjtcflm/large-screen.git &&
git push -uf origin master:gh-pages &&
cd -;

