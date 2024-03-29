/*!
 * TextObfuscator v1.2.0 ES6 [NodeJS or Browser]
 * https://github.com/aalfiann/text-obfuscator
 *
 * Copyright 2021 M ABD AZIZ ALFIAN
 * Released under the MIT license
 * https://github.com/aalfiann/text-obfuscator/blob/master/LICENSE
 */
'use strict';
const TextObfuscator = {

  /**
   * Determine value is string
   * @param {any} value
   * @return {bool}
   */
  _isString: function (value) {
    return typeof value === 'string' || value instanceof String;
  },

  /**
   * Make chunk array (start from first char)
   * @param {string} value            this is the text value
   * @param {string|integer} size     this is the size of chunked text value
   * @return {array}
   */
  _make: function (value, size = 1) {
    size = parseInt(size);
    let i = 0;
    let o = 0;
    const numChunks = Math.ceil(value.length / size);
    const chunks = new Array(numChunks);

    for (i, o; i < numChunks; ++i, o += size) {
      chunks[i] = value.substring(o, o + size); // Replace substr with substring
    }

    return chunks;
  },

  /**
   * Make chunk array reverse (start from last char)
   * @param {string} value            this is the text value
   * @param {string|integer} size     this is the size of chunked text value
   * @return {array}
   */
  _remake: function (value, size = 1) {
    size = parseInt(size);
    let i = 0;
    let len = value.length;
    const data = this._make(value, size);
    const datalen = data.length;
    const chunks = new Array(datalen);
    const last = data[datalen - 1].length;

    for (; i < datalen; i++) {
      if (len >= size) {
        chunks[i] = value.substring(len - size, len); // Replace substr with substring
        len -= size;
      } else {
        chunks[i] = value.substring(0, last); // Replace substr with substring
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
  encode: function (value, size = 1) {
    let result = '';
    size = parseInt(size);
    if (!this._isString(value)) throw new Error('Value must be string');
    const data = this._make(value, size); let len = data.length;
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
  decode: function (value, size = 1) {
    let result = '';
    size = parseInt(size);
    if (!this._isString(value)) throw new Error('Value must be string');
    const data = this._remake(value, size); let i = 0; const len = data.length;
    for (;i < len; i++) {
      result += data[i];
    }
    return result;
  }

};

module.exports = TextObfuscator;
