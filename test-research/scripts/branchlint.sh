#!/bin/sh

ERROR_MESSAGE="Invalid branch name: Check if your branch prefix is either feature or hotfix"

(git rev-parse --abbrev-ref HEAD | grep -Eq '^(feature|hotfix)\/[a-zA-Z0-9!@#$&()_`;|.+,\/"-]+$') || (echo $ERROR_MESSAGE && exit 1)
