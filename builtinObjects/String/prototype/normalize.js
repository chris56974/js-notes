/** 
 * It returns the unicode normalization form of a string
 * You should use it everytime you accept input from a user 
 * because sometimes two strings can look the same but have 
 * two completely different representations depending on the code points
 */
let a = '\u00f1'       // ñ
let b = '\u006e\u0303' // n + ̃

console.log(a) // ñ
console.log(b) // ñ

console.log(a == b)  // false
console.log(a === b) // false

console.log(a.length) // 1
console.log(b.length) // 2

a = a.normalize()
b = b.normalize()
console.log(a == b) // true
