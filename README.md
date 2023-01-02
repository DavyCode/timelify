# timelify

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]

Get the current time in any timezone.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
$ npm install timelify
```

## API

<!-- eslint-disable no-unused-vars -->

```js
var timelify = require("timelify");
```

### timelify.getCurrentTime()

Get the current time in any timezone

## Example

<!-- eslint-disable no-unused-vars, no-undef -->

```js
var timelify = require("timelify");

timelify.getCurrentTime();

// [
//   {
//     timezone: 'America/New_York',
//     currentTime: 'Monday, January 2, 2023 8:13 AM'
//   },
//   {
//     timezone: 'Asia/Tokyo',
//     currentTime: 'Monday, January 2, 2023 10:13 PM'
//   },
//   {
//     timezone: 'Europe/Paris',
//     currentTime: 'Monday, January 2, 2023 2:13 PM'
//   },
//   {
//     timezone: 'Australia/Sydney',
//     currentTime: 'Tuesday, January 3, 2023 12:13 AM'
//   },
//   {
//     timezone: 'Africa/Johannesburg',
//     currentTime: 'Monday, January 2, 2023 3:13 PM'
//   }
// ]
```

# License

[MIT](LICENSE)

[coveralls-image]: https://badgen.net/coveralls/c/github/jshttp/timelify/master
[downloads-image]: https://badgen.net/npm/dm/timelify
[downloads-url]: https://npmjs.org/package/timelify
[node-version-image]: https://badgen.net/npm/node/timelify
[node-version-url]: https://nodejs.org/en/download
[npm-image]: https://badgen.net/npm/v/timelify
[npm-url]: https://npmjs.org/package/timelify
[travis-image]: https://badgen.net/travis/jshttp/timelify/master
