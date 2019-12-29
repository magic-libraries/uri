## @magic-libraries/uri

encode objects to uris and decode uri strings to objects

[html-docs](https://magic-libraries.github.io/uri)

[@magic](https://magic.github.io/core)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-libraries/uri.svg
[npm-url]: https://www.npmjs.com/package/@magic-libraries/uri
[travis-image]: https://img.shields.io/travis/com/magic-libraries/uri/master
[travis-url]: https://travis-ci.com/magic-libraries/uri
[appveyor-image]: https://img.shields.io/appveyor/ci/magiclibraries/uri/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magiclibraries/uri/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-libraries/uri/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-libraries/uri
[greenkeeper-image]: https://badges.greenkeeper.io/magic-libraries/uri.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-libraries/uri.svg
[snyk-image]: https://snyk.io/test/github/magic-libraries/uri/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-libraries/uri

* [installation](#install)
* [usage](#usage)
* [encode](#usage-encode)
* [decode](#usage-decode)


#### <a name="install"></a>installation
```bash
npm install --save-exact @magic-libraries/uri
```

#### <a name="usage"></a>usage
in a page/component, just use the lib.uri functions'),

##### <a name="usage-encode"></a>encode
```javascript
lib.uri.encode({
  host: 'https://example.com',
  params: {
    param_1: true,
    param_2: 'string',
  },
})

// returns
'https://example.com?param_1=true&param_2=string'
```

##### <a name="usage-decode"></a>decode
```javascript
lib.uri.decode('https://example.com?param_1=true&param_2=string')

// returns
{
  host: 'https://example.com',
  params: {
    param_1: true,
    param_2: 'string',
  },
}
```

