/** 
 * The TDZ "Temporal Dead Zone" is the area of 
 * a block where a variable is uninitialized
 * or undefined
 */

a // undefined
b // ReferenceError
c // ReferenceError

var a = 0
let b = 1
const c = 2