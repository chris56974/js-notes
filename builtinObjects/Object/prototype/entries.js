/** 
 * Takes an object and returns an array of key value pairs.
 */
const foo = { a: 1, b: 2 }
Object.entries(foo)[0] // ['a', 1]

for (const [key, value] of Object.entries(foo)) {
  console.log(`${key}: ${value}`)
}

Object.entries(obj).forEach(entry => {
  console.log(entry)    // ['A', 1], ['B', 2]
  console.log(entry[0]) // 'A', 'B'
  console.log(entry[1]) // 1, 2
});