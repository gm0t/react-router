#!/bin/bash -e

babel=node_modules/.bin/babel
webpack=node_modules/.bin/webpack

rm -rf modules-es5/*

$babel -d modules-es5 ./modules