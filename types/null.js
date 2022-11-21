/** 
 * Null represents the intentional absence of a value
 * Only a programmer will set something to null
 * Can indirectly be used to remove an object from memory
 */
typeof null // object (bug)
if (null) console.log("null is falsey")