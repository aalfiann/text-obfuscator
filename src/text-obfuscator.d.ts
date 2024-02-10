export = TextObfuscator;

declare const TextObfuscator: {
  /**
   * Determine value is string
   * @param {any} value
   * @return {bool}
   */
  _isString: (value: any) => boolean;
  /**
   * Make chunk array (start from first char)
   * @param {string} value            this is the text value
   * @param {string|integer} size     this is the size of chunked text value
   * @return {array}
   */
  _make: (value: string, size?: number) => string[];
  /**
   * Make chunk array reverse (start from last char)
   * @param {string} value            this is the text value
   * @param {string|integer} size     this is the size of chunked text value
   * @return {array}
   */
  _remake: (value: string, size?: number) => string[];
  /**
   * Encode or Obfuscate the text
   * @param {string} value            this is the text value to be encoded
   * @param {string|integer} size     this is the size of text to obfuscate
   * @return {string}
   */
  encode: (value: string, size?: number) => string;
  /**
   * Decode or deobfuscate the text
   * @param {string} value            this is the encoded text
   * @param {string|integer} size     this is the size of text to deobfuscate
   * @return {string}
   */
  decode: (value: string, size?: number) => string;
};
