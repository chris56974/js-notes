/** 
 * A Map is a list of key value pairs that preserve insertion order
 * It has better performance on frequent writes, the keys can be any type
 */
const mapLiteral = new Map([["key", "value"], [2, "bar"]])
const myMap = new Map();
myMap.set("a", 1); myMap.set({}, 'a'); myMap.set(() => "c", 3);
myMap.has("a") // true
myMap.get("a") // 1
myMap.size;    // 3

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`)
}

myMap.forEach((value, key) => console.log(`${key} = ${value}`))

const maparr = Array.from(myMap); // also myMap.values() or myMap.keys()
