#!/bin/bash

cp dist/index.js $INIT_CWD/.git/hooks/pre-commit
chmod +x $INIT_CWD/.git/hooks/pre-commit