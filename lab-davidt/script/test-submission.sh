#!/usr/bin/env bash
# nullglob makes globs return empty string if no matches found
shopt -s nullglob

exit_code=0

for submission in ./lab-*;do
  echo "$(tput setaf 4)Runing mocha for dir ${submission}$(tput sgr0)"
  cd "$submission"
  npm i
  mocha
  if [[ "$?" -eq 1 ]];then 
    exit_code=1
  fi
done

exit $exit_code

