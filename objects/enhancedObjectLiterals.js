/** 
 * Object literals were enhanced in three ways
 * 
 * 1. new shorthand for initializing properties
 * 2. new shorthand for defining methods
 * 3. computed property names
 */
var ES5 = {
	x: 'x', 
	y: function() {}
}

let ES6 = {
	x, // if the key is the same as the value you can do this
	y() {} 
}