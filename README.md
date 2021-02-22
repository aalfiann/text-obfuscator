# text-obfuscator
[![NPM](https://nodei.co/npm/text-obfuscator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/text-obfuscator/)
[![js-semistandard-style](https://raw.githubusercontent.com/standard/semistandard/master/badge.svg)](https://github.com/standard/semistandard)  
  
[![npm version](https://img.shields.io/npm/v/text-obfuscator.svg?style=flat-square)](https://www.npmjs.org/package/text-obfuscator)
[![Build Status](https://travis-ci.org/aalfiann/text-obfuscator.svg?branch=master)](https://travis-ci.org/aalfiann/text-obfuscator)
[![Coverage Status](https://coveralls.io/repos/github/aalfiann/text-obfuscator/badge.svg?branch=master)](https://coveralls.io/github/aalfiann/text-obfuscator?branch=master)
[![Known Vulnerabilities](https://snyk.io//test/github/aalfiann/text-obfuscator/badge.svg?targetFile=package.json)](https://snyk.io//test/github/aalfiann/text-obfuscator?targetFile=package.json)
![License](https://img.shields.io/npm/l/text-obfuscator)
![NPM download/month](https://img.shields.io/npm/dm/text-obfuscator.svg)
![NPM download total](https://img.shields.io/npm/dt/text-obfuscator.svg)
[![](https://data.jsdelivr.com/v1/package/npm/text-obfuscator/badge)](https://www.jsdelivr.com/package/npm/text-obfuscator)  
Simple Text Obfuscator for NodeJS or Browser.

Because sometimes we want to obfuscate a text in client browser for `key`, `id`, `base64`, etc.

## Getting Started

### Install using NPM
```bash
$ npm install text-obfuscator
```

**Or simply use in Browser with CDN**
```html
<!-- Always get the latest version -->
<!-- Not recommended for production sites! -->
<script src="https://cdn.jsdelivr.net/npm/text-obfuscator/dist/text-obfuscator.min.js"></script>

<!-- Get minor updates and patch fixes within a major version -->
<script src="https://cdn.jsdelivr.net/npm/text-obfuscator@1/dist/text-obfuscator.min.js"></script>

<!-- Get patch fixes within a minor version -->
<script src="https://cdn.jsdelivr.net/npm/text-obfuscator@1.1/dist/text-obfuscator.min.js"></script>

<!-- Get a specific version -->
<!-- Recommended for production sites! -->
<script src="https://cdn.jsdelivr.net/npm/text-obfuscator@1.1.0/dist/text-obfuscator.min.js"></script>
```

### Usage
```javascript
const TextObfuscator = require('text-obfuscator'); // in browser doesn't need this line

// simple obfuscate (just reverse)
var encoded1 = TextObfuscator.encode('welcome to my life!');
var decoded1 = TextObfuscator.decode(encoded1);
console.log(encoded1); // !efil ym ot emoclew
console.log(decoded1); // welcome to my life!

// confusing obfuscate
var encoded2 = TextObfuscator.encode('welcome to my life!',3);
var decoded2 = TextObfuscator.decode(encoded2,3);
console.log(encoded2); // !ifey lo me tcomwel
console.log(decoded2); // welcome to my life!
```

## Limitation
This library is not support with unicode char. Contributions are welcome.

## Unit Test
If you want to play around with test.
```bash
$ npm test
```