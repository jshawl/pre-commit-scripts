#!/bin/bash

cp dist/index.js $INIT_CWD/.git/hooks/pre-commit
cp -n .pre-commit-scripts $INIT_CWD/.pre-commit-scripts
echo ".pre-commit-scripts" >> .git/info/exclude
chmod +x $INIT_CWD/.git/hooks/pre-commit