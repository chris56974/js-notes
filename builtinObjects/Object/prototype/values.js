/** 
 * Grab all the values from an object and return them in an array.
 */
const foo = { a: 1, b: 2 }
Object.values(foo)[0] // 1

Object.values(foo).forEach(value => {
  console.log(value); // 1, 2
})