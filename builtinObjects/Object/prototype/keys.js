/** 
 * Grab all the keys from an object and turn it into an array.
 */
const foo = { a: 1, b: 2 }
Object.keys(foo)[0] // 'a'

Object.keys(foo).forEach((key, index) => { 
  console.log(key);      // A, B
  console.log(foo[key]); // 1, 2
})