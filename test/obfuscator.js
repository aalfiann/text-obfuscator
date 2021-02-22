/* global describe it */
const assert = require('assert');
const TextObfuscator = require('../src/text-obfuscator');

describe('obfuscator test', function () {
  it('value must be string', function () {
    assert.throws(function () {
      TextObfuscator.encode([]);
    }, Error);
  });

  it('isString helper', function () {
    assert.strictEqual(TextObfuscator._isString('abc'), true);
    assert.strictEqual(TextObfuscator._isString(1), false);
    assert.strictEqual(TextObfuscator._isString([]), false);
    assert.strictEqual(TextObfuscator._isString({}), false);
    assert.strictEqual(TextObfuscator._isString(true), false);
    assert.strictEqual(TextObfuscator._isString(false), false);
    assert.strictEqual(TextObfuscator._isString(null), false);
    assert.strictEqual(TextObfuscator._isString(undefined), false);
  });

  it('make chunk array', function () {
    assert.deepStrictEqual(TextObfuscator._make('abcdefghijklmnopqrstuvwxyz', 3),
      ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'yz']);
  });

  it('remake reversed chunk array', function () {
    assert.deepStrictEqual(TextObfuscator._remake('abcdefghijklmnopqrstuvwxyz', 3),
      ['xyz', 'uvw', 'rst', 'opq', 'lmn', 'ijk', 'fgh', 'cde', 'ab']);
  });

  it('make chunk array like simple reverse', function () {
    assert.deepStrictEqual(TextObfuscator._make('abcdefghijklmnopqrstuvwxyz'),
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
  });

  it('remake reversed chunk array like simple reverse', function () {
    assert.deepStrictEqual(TextObfuscator._remake('abcdefghijklmnopqrstuvwxyz'),
      ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']);
  });

  it('obfuscate the text', function () {
    assert.strictEqual(TextObfuscator.encode('abcdefghijklmnopqrstuvwxyz', 2), 'yzwxuvstqropmnklijghefcdab');
  });

  it('deobfuscate text', function () {
    assert.strictEqual(TextObfuscator.decode('yzwxuvstqropmnklijghefcdab', 2), 'abcdefghijklmnopqrstuvwxyz');
  });

  it('obfuscate only works with string', function () {
    assert.throws(function () {
      TextObfuscator.encode(['12345']);
    }, Error);
  });

  it('deobfuscate only works with string', function () {
    assert.throws(function () {
      TextObfuscator.decode(['54321']);
    }, Error);
  });
});
