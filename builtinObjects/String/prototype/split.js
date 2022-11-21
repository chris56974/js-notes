str = 'a b'
str.split([separator], [limit])
str.split()       // ['a b']
str.split("")     // ['a', ' ', 'b']
str.split(" ")    // ['a', 'b']
str.split(" ", 1) // ['a']
let a = [...str]  // ['a', ' ', 'b'] (...str & `${...str}` raise an error)