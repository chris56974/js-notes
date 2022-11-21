/** 
 * There are two categories of types in JS, 
 * primitive types and reference types. 
 * 
 * Arrays, functions, and objects are all reference types, 
 * everything else is a primitive type. 
 * 
 * JS doesn't have pointers, 
 * it has references that point to the object in memory. 
 */
typeof 2                        // number
Array.isArray([]);              // you can't use typeof [] for arrays

object.hasOwnProperty("foo");   // object = { foo: 1 } true - false if foo is inherited
if ("foo" in object)            // true (even if foo is inherited)

  Parent.prototype.isPrototypeOf(object); // is this a prototype of?
