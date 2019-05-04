## @magic-client/uri

encode objects to uris and decode uri strings to objects
[@magic](https://magic.github.io/core)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-client/uri.svg
[npm-url]: https://www.npmjs.com/package/@magic-client/uri
[travis-image]: https://api.travis-ci.org/magic-client/uri.svg?branch=master
[travis-url]: https://travis-ci.org/magic-client/uri
[appveyor-image]: https://img.shields.io/appveyor/ci/magicclient/uri/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicclient/uri/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-client/uri/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-client/uri
[greenkeeper-image]: https://badges.greenkeeper.io/magic-client/uri.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-client/uri.svg
[snyk-image]: https://snyk.io/test/github/magic-client/uri/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-client/uri

* [installation](#install)
* [require](#require)
* [usage](#usage)
* [encode](#usage-encode)
* [decode](#usage-decode)


#### <a name="install"></a>installation
```bash
npm install --save-exact magic-client/uri
```

#### <a name="require"></a>require
first add the client lib to the app.lib, note that we do not actually require the library.

```javascript
// /app.js
module.exports = {
  //...other app exports
  lib: {
    URI: '@magic-client/uri',
  },
}
```

#### <a name="usage"></a>usage
in a page/component, just use the LIB.URI functions'),


##### <a name="usage-encode"></a>encode
```javascript
LIB.URI.encode({
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
LIB.URI.decode('https://example.com?param_1=true&param_2=string')

// returns
{
  host: 'https://example.com',
  params: {
    param_1: true,
    param_2: 'string',
  },
}
```

