// Return all truthy values into a new array

filter((element, index, array) => {})

let arr = [{a: 1, b: true}, {a: 2, b: false}];
let arx = arr.filter(item => item.a !== 2); // return all truthy values in NEW array

arr.map(item => {}).filter(Boolean); // remove empty objects from array 