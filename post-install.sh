#!/bin/bash

cp dist/index.js $INIT_CWD/.git/hooks/pre-commit
cp -n .pre-commit-scripts $INIT_CWD/.pre-commit-scripts
chmod +x $INIT_CWD/.git/hooks/pre-commit