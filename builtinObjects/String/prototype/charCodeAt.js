// These methods give you the integer value
a.charCodeAt  // integer between 0 - 65535 representing the utf-16 code unit
a.codePointAt // ibid but grabs the utf-16 code point value
a.codePointAt(0)    // 241
a.charCodeAt(0)     // 241
a.fromCharCode(241) // ñ

// This will give you the hexadecimal value
a.codePointAt(0).toString(16) // 00f1 i.e. \u00f1