#!/bin/sh

if cat "$(dirname "$0")/../.eslintrc.pre-commit.js" |grep 'a11y'; then
  echo "Disabling av a11y regler er ikke tillatt i precommits"
   exit 1
fi