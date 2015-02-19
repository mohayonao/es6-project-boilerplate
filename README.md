# es6-project-boilderplate
[![Build Status](http://img.shields.io/travis/mohayonao/es6-project-boilerplate.svg?style=flat-square)](https://travis-ci.org/mohayonao/es6-project-boilerplate)
[![NPM Version](http://img.shields.io/npm/v/es6-project-boilerplate.svg?style=flat-square)](https://www.npmjs.org/package/es6-project-boilerplate)
[![Bower](http://img.shields.io/bower/v/es6-project-boilerplate.svg?style=flat-square)](http://bower.io/search/?q=es6-project-boilerplate)
[![Dependency Status](http://img.shields.io/david/mohayonao/mml-emitter.svg?style=flat-square)](https://david-dm.org/mohayonao/es6-project-boilerplate)
[![devDependency Status](http://img.shields.io/david/dev/mohayonao/es6-project-boilerplate.svg?style=flat-square)](https://david-dm.org/mohayonao/es6-project-boilerplate#info=devDependencies)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> ぼくのかんがえたさいきょうのES6プロジェクトテンプレート

## build
- `npm run build`
  - `build-to5` && `build-browser` && `build-minify`
- `npm run build-to5`
  - translate ES6 code into ES5 code && store `lib` directory
  - `lib` directory is .gitignored, but contains in npm files
- `npm run build-browser`
  - build for browser && store `build` directory
- `npm run build-minify`
  - compress a code built on `build-browser`

## test
- `npm run test`
  - test with power-assert

## coverage
- `npm run cover`
  - generate code coverage reports

## lint
- `npm run lint`

## travis
- `npm run travis`
  - `lint` && `test`
