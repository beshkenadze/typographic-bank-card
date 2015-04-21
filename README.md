# typographic-bank-card

  Micro module for bank-card format

## Status

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Instalation

```sh
$ npm install typographic-bank-card
```

## Use

```js
var tbc = require('typographic-bank-card')

tbc("5441168611005540")
// 5441 1686 1100 55401

tbc("Credit card: 5441168611005540")
// Credit card: 5441 1686 1100 55401
```

## License

  MIT
  
[npm-image]: https://img.shields.io/npm/v/typographic-bank-card.svg?style=flat-square
[npm-url]: https://npmjs.org/package/typographic-bank-card
[travis-image]: https://travis-ci.org/beshkenadze/typographic-bank-card.svg?style=flat-square&branch=0.1.1
[travis-url]: https://travis-ci.org/beshkenadze/typographic-bank-card
