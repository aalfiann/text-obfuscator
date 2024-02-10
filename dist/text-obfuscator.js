"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
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
       * TextObfuscator v1.2.0 ES6 [NodeJS or Browser]
       * https://github.com/aalfiann/text-obfuscator
       *
       * Copyright 2021 M ABD AZIZ ALFIAN
       * Released under the MIT license
       * https://github.com/aalfiann/text-obfuscator/blob/master/LICENSE
       */
      'use strict';

      var TextObfuscator = {
        /**
         * Determine value is string
         * @param {any} value
         * @return {bool}
         */
        _isString: function _isString(value) {
          return typeof value === 'string' || value instanceof String;
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
          var i = 0;
          var o = 0;
          var numChunks = Math.ceil(value.length / size);
          var chunks = new Array(numChunks);
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
        _remake: function _remake(value) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          size = parseInt(size);
          var i = 0;
          var len = value.length;
          var data = this._make(value, size);
          var datalen = data.length;
          var chunks = new Array(datalen);
          var last = data[datalen - 1].length;
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
        encode: function encode(value) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var result = '';
          size = parseInt(size);
          if (!this._isString(value)) throw new Error('Value must be string');
          var data = this._make(value, size);
          var len = data.length;
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
          var data = this._remake(value, size);
          var i = 0;
          var len = data.length;
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
