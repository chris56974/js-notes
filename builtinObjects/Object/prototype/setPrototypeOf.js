/** 
 * setPrototypeOf() is ill-performing and should be avoided
 * if it's possible to set the prototype at object creation time instead.
 * Which you can do with Object.create(), classes, constructor functions, 
 * or { __proto__: prototypeObject }. 
 * 
 * It's ill-performing because many engines optimize the prototype and 
 * try to guess the location of the method in memory when calling an 
 * instance in advance. But setting the prototype dynamically disrupts 
 * all those optimizations. It might also cause some engines to recompile your code for 
 * de-optimization, to make it work according to the specs.
 */

const a = { a: 1 }
const b = { b: 1 }

Object.setPrototypeOf(a, b)
// a --> b --> Object --> null