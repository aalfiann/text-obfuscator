/*!
 * TextObfuscator v1.0.2 ES5 [Browser]
 * https://github.com/aalfiann/text-obfuscator
 *
 * Copyright 2019 M ABD AZIZ ALFIAN
 * Released under the MIT license
 * https://github.com/aalfiann/text-obfuscator/blob/master/LICENSE
 */
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

var TextObfuscator = {
  /**
   * Determine value is string
   * @param {string} value
   * @return {bool} 
   */
  _isString: function _isString(value) {
    return typeof value === 'string' || _instanceof(value, String);
  },

  /**
   * Make chunk array (start from first char)
   * @param {string} value            this is the text value 
   * @param {string|integer} size     this is the size of chunked text value
   * @return {array} 
   */
  _make: function _make(value) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    size = parseInt(size);
    var i = 0,
        o = 0,
        numChunks = Math.ceil(value.length / size),
        chunks = new Array(numChunks);

    for (i, o; i < numChunks; ++i, o += size) {
      chunks[i] = value.substr(o, size);
    }

    return chunks;
  },

  /**
   * Make chunk array reverse (start from last char)
   * @param {string} value            this is the text value 
   * @param {string|integer} size     this is the size of chunked text value
   * @return {array} 
   */
  _remake: function _remake(value) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    size = parseInt(size);

    var i = 0,
        len = value.length,
        data = this._make(value, size),
        datalen = data.length,
        chunks = new Array(datalen),
        last = data[datalen - 1].length;

    for (; i < datalen; i++) {
      if (len >= size) {
        chunks[i] = value.substr(len - size, size);
        len -= size;
      } else {
        chunks[i] = value.substr(0, last);
      }
    }

    return chunks;
  },

  /**
   * Encode or Obfuscate the text 
   * @param {string} value            this is the text value to be encoded
   * @param {string|integer} size     this is the size of text to obfuscate
   * @return {string}
   */
  encode: function encode(value) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var result = '';
    size = parseInt(size);
    if (!this._isString(value)) throw new Error('Value must be string');

    var data = this._make(value, size),
        len = data.length;

    while (len) {
      --len;
      result += data[len];
    }

    return result;
  },

  /**
   * Decode or deobfuscate the text
   * @param {string} value            this is the encoded text
   * @param {string|integer} size     this is the size of text to deobfuscate
   * @return {string}
   */
  decode: function decode(value) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var result = '';
    size = parseInt(size);
    if (!this._isString(value)) throw new Error('Value must be string');

    var data = this._remake(value, size),
        i = 0,
        len = data.length;

    for (; i < len; i++) {
      result += data[i];
    }

    return result;
  }
};