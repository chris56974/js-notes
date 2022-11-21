/** 
 * It's when you modify one of the built-in prototypes
 * It's not recommended because JS might add a method
 * with the same name in the future
 */

Array.prototype.myRandomMethod = function() {}

/** 
 * On a side note, some of the built-in prototype objects 
 * Are instances of the constructor object themselves
 * This is due to historical reasons
 */
Number.prototype // 0
Array.prototype  // []