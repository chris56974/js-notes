/** 
 * If you don't pass in a callback, it will convert everything into strings and sort them lexicographically. 
 * In order to sort numbers & foreign languages you need to pass a callback.
 * 
 * if it returns < 0 // Sort a before b
 * if it returns > 0 // Sort b before a
 * if it returns   0 // Keep same order
 */

array.sort(comparisonFunction(current, next))


// if a = 1 and b = 2
const bar = arr.sort((a, b) => a - b) // least to greatest 
const foo = arr.sort((a, b) => b - a) // greatest to least

[7, 15, 1].sort() // by default (with no cb) it does this
["7", "15", "1"]
["7".charCodeAt(0), "15".charCodeAt(0), "1".charCodeAt(0)]
[55, 49, 49]
[49, 49, 55]
[1, 15, 7]