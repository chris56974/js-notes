/** 
 * Primitives are passed by value (pass a copy), 
 * Objects are passed by reference (or copy of a reference)
 * So when you pass an object, you are passing a reference to that object, 
 * and it is possible to modify the contents of that object since you have the real reference. 
 * But overwriting the reference won't do anything because the reference itself is passed by value.
 */
const replace = (ref) => ref = {}; // point ref to nothing
const update = (ref) => ref.key = 'newvalue'; // mutates contents

var a = { key: 'value' };
replace(a);  // doesn't do anything you were only passed a copy ref
update(a);   // contents are now mutated 