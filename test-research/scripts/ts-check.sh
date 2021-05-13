#!/bin/sh

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

js_files_count="$(git diff --cached --name-only src server | grep -c -e ".\(js\|jsx\)$")"
if
  [[ $js_files_count -gt 0 ]]; then
  echo "${RED}Found ${js_files_count} files with js/jsx extension, please use Typescript only."
  echo "${RED}\nFiles:"
  echo "${RED}$(git diff --cached --name-only src server | grep -e ".\(js\|jsx\)$")"
  exit 1
fi
echo "${GREEN}Found only Typescript files in src/ directory, nice!${NC}"