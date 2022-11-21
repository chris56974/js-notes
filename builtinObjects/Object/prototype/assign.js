/** 
 * Object.assign() copies all enumerable properties from 
 * one or more source objects to a target object. 
 * 
 * The source object has to own the properties itself and 
 * not get it through inheritance. It calls the getters 
 * on the source object and the setters on the target object. 
 * Properties in the target object are overwritten by 
 * properties in the source objects.
 */

const target = {a: 1, b: 2};
const source = {b: 3, c: 4};
const result = Object.assign(target, source); // mutates target

target // {a: 1, b: 3, c: 4} 
source // {b: 3, c: 4} 
result // {a: 1, b: 3, c: 4}