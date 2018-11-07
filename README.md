# @gen-tech/version-update
A tool to update package.json version by its command line interface.

[![npm](https://img.shields.io/npm/v/@gen-tech/version-update.svg)](https://www.npmjs.com/package/@gen-tech/version-update)
[![npm](https://img.shields.io/npm/dw/@gen-tech/version-update.svg)](https://www.npmjs.com/package/@gen-tech/version-update)

Useful in build automations etc.

## Install
`npm install @gen-tech/version-update --save-dev`

## Usage
> in package.json
```json
"scripts": {
  "update-package": "gtvu"
}
```
`npm run update-package 2.0.1`

--------------------

> in travis.yml
```yml
before_script: npm run update-package $TRAVIS_TAG
```

## Api
`gtvu <version> --silent --safe --path`

|name       |details                            |default         |
|-----------|-----------------------------------|----------------|
|\<version\>|version to update package.json with|                |
|--silent   |disables logging                   |false           |
|--safe     |not throws error if this is set    |false           |
|--path     |set package.json path              |"./package.json"|

## License
[MIT](https://github.com/gen-tech/version-update/blob/master/LICENSE)
