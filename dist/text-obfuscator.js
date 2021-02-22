(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.TextObfuscator = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }

        return n[i].exports;
      }

      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);

      return o;
    }

    return r;
  }()({
    1: [function (require, module, exports) {
      /*!
       * TextObfuscator v1.1.0 ES6 [NodeJS or Browser]
       * https://github.com/aalfiann/text-obfuscator
       *
       * Copyright 2019 M ABD AZIZ ALFIAN
       * Released under the MIT license
       * https://github.com/aalfiann/text-obfuscator/blob/master/LICENSE
       */
      'use strict';

      const TextObfuscator = {
        /**
           * Determine value is string
           * @param {string} value
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
        encode: function (value, size = 1) {
          let result = '';
          size = parseInt(size);
          if (!this._isString(value)) throw new Error('Value must be string');

          const data = this._make(value, size);

          let len = data.length;

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

          const data = this._remake(value, size);

          let i = 0;
          const len = data.length;

          for (; i < len; i++) {
            result += data[i];
          }

          return result;
        }
      };
      module.exports = TextObfuscator;
    }, {}]
  }, {}, [1])(1);
});
